import jsZip from "jszip"

export default function readZIPFile (file: File) {
  return jsZip.loadAsync (file)
  .then ((jsZipFile: jsZip) => {
    const promises: Promise<string>[] = []

    Object.values(jsZipFile.files).forEach (compressedFile => {
      if (compressedFile.dir) return null
      promises.push(compressedFile.async ("string"))
    })
    
    return promises
  })
}