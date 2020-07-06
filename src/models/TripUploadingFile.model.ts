import FileTypes from "./types/FileTypes.types"
import FileUploadStatusTypes from "./types/FileUploadStatusTypes.types"

export default class TripUploadingFile {
  file: File
  fileName: string
  fileSize: number
  fileType: FileTypes
  lastModified: Date
  status: FileUploadStatusTypes
  errorMessage?: string = ""

  constructor (file: File) {
    this.file = file
    this.fileName = file.name
    this.fileSize = file.size
    this.fileType = FileTypes.JSON
    this.lastModified = new Date (file.lastModified)
    this.status = FileUploadStatusTypes.PENDING
  }

  public get () {
    return {
      fileName: this.fileName,
      fileSize: this.fileSize,
      fileType: this.fileType,
      lastModified: this.lastModified
    }
  }
}