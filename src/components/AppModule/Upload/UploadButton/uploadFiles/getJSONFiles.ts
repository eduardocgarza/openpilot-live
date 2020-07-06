export default function getJSONFiles<T extends File>(files: T[]) {
  return files.filter (file => {
    return file.type === "application/json"
  })
}