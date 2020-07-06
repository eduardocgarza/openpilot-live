import getJSONFiles from "./getJSONFiles"
import readJSONFile from "./readJSONFile"
import getZipFiles from "./getZipFiles"
import TripUploadingFile from "../../../../../models/TripUploadingFile.model"

export function initializeUploader<T extends File>(acceptedFiles: T[]) {
  const allFiles = Object.values(acceptedFiles)
  const jsonFiles = getJSONFiles(allFiles)
  const zipFiles = getZipFiles (allFiles)
  return { jsonFiles, zipFiles }
}

export function startJSONFileUploader (files: TripUploadingFile[]) {
  const jsonFilePromises = files.map (file => readJSONFile(file))
  return jsonFilePromises
}