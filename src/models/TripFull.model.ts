import moment from "moment";
import {
  ITripJSONFile,
  TripFile,
  ITripJSONFileCoordinate,
} from "../components/AppModule/Upload/UploadButton/uploadFiles/uploadTypes";
import FileTypes from "./types/FileTypes.types";
import TripCoordinate, { ITripCoordinate } from "./TripCoordinate.model";

export interface TripJSON {
  startDate: Date;
  endDate: Date;
  coordinates: TripCoordinate[];
}

export interface TripLocation {
  startLocation: string;
  endLocation: string;
  city: string;
  country: string;
}

const OPEN_CAGE_BASE_URL = "https://api.opencagedata.com/geocode/v1/json";
const { REACT_APP_OPEN_CAGE_API_KEY: API_KEY } = process.env;

export interface ITripFull {
  fileName: string;
  fileSize: number;
  fileType: FileTypes;
  lastModified: Date;
  // JSON Data
  startDate: Date; // from `start_time` coordinate property
  endDate: Date; // from `end_time` coordinate property
  coordinates: ITripCoordinate[];
  // Simple Analysis
  distance: number;
  duration: string;
  // OpenCage API
  startLocation: string;
  endLocation: string;
  city: string;
  country: string;
  // Advanced Analysis
  timeIdle: number;
  timeMoving: number;
  percentageIdle: number;
  percentageMoving: number;
  averageSpeed: number;
}

export default class TripFull implements ITripFull {
  public fileName: string;
  public fileSize: number;
  public fileType: FileTypes;
  public lastModified: Date;
  // JSON Data
  public startDate: Date; // from `start_time` coordinate property
  public endDate: Date; // from `end_time` coordinate property
  public coordinates: TripCoordinate[];
  // Simple Analysis
  public distance: number;
  public duration: string;
  // OpenCage API
  public startLocation: string;
  public endLocation: string;
  public city: string;
  public country: string;
  // Advanced Analysis
  public timeIdle: number;
  public timeMoving: number;
  public percentageIdle: number;
  public percentageMoving: number;
  public averageSpeed: number;
  public averageAcceleration: number;

  constructor(jsonFile: TripJSON, tripFile: TripFile, location: TripLocation) {
    const { startDate, endDate, coordinates } = jsonFile;

    // File Data
    this.fileName = tripFile.fileName;
    this.fileSize = tripFile.fileSize;
    this.fileType = tripFile.fileType;
    this.lastModified = tripFile.lastModified;

    // Location Data
    this.startLocation = location.startLocation;
    this.endLocation = location.endLocation;
    this.city = location.city;
    this.country = location.country;

    // Date Data
    this.startDate = startDate;
    this.endDate = endDate;

    // Basic Data
    this.distance = this.calculateDistance(coordinates);
    this.duration = this.calculateDuration(coordinates);

    // Coordinates Data
    this.coordinates = coordinates;

    // Movement Data
    const { timeIdle, timeMoving, percentageIdle, percentageMoving } =
      this.calculateMovement(coordinates);
    this.timeIdle = timeIdle; // in seconds
    this.timeMoving = timeMoving; // in seconds
    this.percentageIdle = percentageIdle;
    this.percentageMoving = percentageMoving;

    // Averages Data
    const { averageSpeed, averageAcceleration } = this.calculateAverages();
    this.averageSpeed = averageSpeed;
    this.averageAcceleration = averageAcceleration;
  }

  private calculateDistance(coords: TripCoordinate[]) {
    return coords[coords.length - 1].accummulatedDistance;
  }

  private calculateDuration(coords: TripCoordinate[]) {
    const duration = coords.length + 1;
    return moment.utc(duration * 1000).format("HH:mm:ss");
  }

  private calculateMovement(coords: TripCoordinate[]) {
    const timeInSeconds = coords.length + 1;
    let timeIdle = 0,
      timeMoving = 0;
    coords.forEach((coord) => (coord.speed === 0 ? timeIdle++ : timeMoving++));
    const percentageMoving = (timeMoving / timeInSeconds) * 100;
    const percentageIdle = (timeIdle / timeInSeconds) * 100;
    return { timeIdle, percentageMoving, timeMoving, percentageIdle };
  }

  private calculateAverages() {
    const { coordinates: coords } = this;
    const points = coords.length;

    const speeds = coords.reduce((sum, coord) => sum + coord.speed, 0);
    const accelerations = coords.reduce(
      (sum, coord) => sum + coord.acceleration,
      0
    );

    const averageSpeed = speeds / points;
    const averageAcceleration = accelerations / points;
    return { averageSpeed, averageAcceleration };
  }

  private static async getLocation(coords: TripCoordinate[]) {
    const { latitude: firstLat, longitude: firstLng } = coords[0];
    const { latitude: lastLat, longitude: lastLng } = coords[coords.length - 1];
    let startLocation = "",
      endLocation = "",
      country = "",
      city = "";
    const urlFirstLoc = `${OPEN_CAGE_BASE_URL}?q=${firstLat}+${firstLng}&key=${API_KEY}`;
    const urlLastLoc = `${OPEN_CAGE_BASE_URL}?q=${lastLat}+${lastLng}&key=${API_KEY}`;

    // Start Location API call
    try {
      let firstRes = await fetch(urlFirstLoc);
      let firstData = await firstRes.json();
      const firstLocationResult = firstData.results[0].formatted;
      const {
        city: cityResult,
        country: countryResult,
        county,
      } = firstData.results[0].components;

      if (!cityResult) city = county;
      else city = cityResult;
      startLocation = firstLocationResult;
      country = countryResult;
    } catch (error) {
      startLocation = "N/A";
      country = "N/A";
      city = "N/A";
    }

    try {
      let secondRes = await fetch(urlLastLoc);
      let secondData = await secondRes.json();
      const secondLocationResult = secondData.results[0].formatted;
      endLocation = secondLocationResult;
    } catch (error) {
      endLocation = "N/A";
    }
    // End Location API call

    return { startLocation, endLocation, city, country };
  }

  public static generateCoordinates(coords: ITripJSONFileCoordinate[]) {
    return coords.map((coord, index) => {
      let dist = index === 0 ? 0 : coords[index].dist - coords[index - 1].dist;
      let acceleration =
        index === 0 ? 0 : coord.speed - coords[index - 1].speed;
      const { index: idx, dist: accummulatedDistance, speed, lng, lat } = coord;
      return new TripCoordinate(
        idx,
        dist,
        speed,
        lat,
        lng,
        accummulatedDistance,
        acceleration
      );
    });
  }

  public static init(jsonRawFile: ITripJSONFile, tripFile: TripFile) {
    return (async function useLocationAPI() {
      const { start_time, end_time, coords } = jsonRawFile;
      const coordinates = TripFull.generateCoordinates(coords);
      const location = await TripFull.getLocation(coordinates);
      const jsonFile = {
        startDate: new Date(start_time),
        endDate: new Date(end_time),
        coordinates,
      };

      return new TripFull(jsonFile, tripFile, location);
    })();
  }

  /**
   * @Getters
   */
  public getStartLocation(): string {
    return this.startLocation.split(",")[0];
  }

  public getEndLocation(): string {
    return this.endLocation.split(",")[0];
  }

  public getCity(): string {
    return this.city;
  }

  public getCountry(): string {
    if (this.country === "United States of America") {
      return "US";
    }

    return this.country;
  }

  public getTimeIdle(): string {
    return moment.utc(this.timeIdle * 1000).format("HH:mm:ss");
  }

  public getTimeMoving(): string {
    return moment.utc(this.timeMoving * 1000).format("HH:mm:ss");
  }

  public getPercentageIdle(): string {
    return `${Math.round(this.percentageIdle)}%`;
  }

  public getPercentageMoving(): string {
    return `${Math.round(this.percentageMoving)}%`;
  }

  public getAverageSpeed(): string {
    return `${this.averageSpeed.toFixed(2)} mph`;
  }

  public getAverageAcceleration(): string {
    return `${this.averageAcceleration.toFixed(5)} mph/s`;
  }

  public getStartDate(): string {
    return moment(this.startDate).format("dddd, MMMM Do YYYY");
  }

  public getStartTime(): string {
    return moment(this.startDate).format("HH:mm:ss a");
  }

  public getEndDate(): string {
    return moment(this.endDate).format("dddd, MMMM Do YYYY");
  }

  public getEndTime(): string {
    return moment(this.endDate).format("HH:mm:ss a");
  }

  public getDistance(): string {
    return `${Number(this.distance.toFixed(2)).toLocaleString()} miles`;
  }

  public getDuration(): string {
    return this.duration;
  }
}
