import TripUploadingFile from "../../../../models/TripUploadingFile.model"
import TripFull from "../../../../models/TripFull.model"
import { initializeUploader } from "../UploadButton/uploadFiles/uploadFilesHandler"
import readJSONFile from "../UploadButton/uploadFiles/readJSONFile"
import FileUploadStatusTypes from "../../../../models/types/FileUploadStatusTypes.types"

/**
 * -----------------------------------------------------
 * 
 *  @UploaderSetup Helpers
 * 
 * -----------------------------------------------------
 */
type FileHashMap = { [s: string]: TripUploadingFile }

export function filterUniqueFiles (files: File[]) {
  const uniqueFilesToUpload: FileHashMap = {}
  files.forEach (file => {
    if (!uniqueFilesToUpload[file.name]) {
      uniqueFilesToUpload[file.name] = new TripUploadingFile(file)
    }
  })
  return Object.values(uniqueFilesToUpload)
}

export function filterFilesAlreadyInDB (files: TripUploadingFile[], trips: TripFull[]) {
  for (let index = 0; index < files.length; index++) {
    const file = files[index]
    for (const trip of trips) {
      if (file.fileName === trip.fileName) {
        file.status = FileUploadStatusTypes.DUPLICATE
        break
      }
    }
  }
}

export function setupUploader<T extends File>(files: T[], trips: TripFull[]) {
  const { jsonFiles, zipFiles } = initializeUploader(files)

  /** @JSON Files */
  const uniqueFiles = filterUniqueFiles(jsonFiles)
  filterFilesAlreadyInDB(uniqueFiles, trips)
  return uniqueFiles

  /** @ZIP - @TODO */
  // ...
}

/**
 * -----------------------------------------------------
 * 
 *  @Uploading Helpers
 * 
 * -----------------------------------------------------
 */
type UpdateUploadFn = (f: TripUploadingFile[]) => void

export function startUploading (files: TripUploadingFile[], setFiles: UpdateUploadFn) {
  const fileUploadingPromises = []
  
  for (let index = 0; index < files.length; index++) {
    const file = files[index]
    const fileUploadPromise = readJSONFile(file)
      .then (result => {
        const items = [...files]
        items[index].status = FileUploadStatusTypes.UPLOADED
        setFiles (items)
        return result
      })
      .catch (error => {
        const items = [...files]
        items[index].status = FileUploadStatusTypes.FAILED
        setFiles (items)
      })

    fileUploadingPromises.push(fileUploadPromise)
  }

  return Promise.all(fileUploadingPromises)
}