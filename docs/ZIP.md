# ZIP Read

## TODO

```js
import JSZip from "jszip"

export default function handleZipFileRead (file) {
  const jsZip = new JSZip ()
  const p = jsZip.loadAsync (file)
    .then (zip => {
      const fileNames = Object.keys(zip.files)
      fileNames.forEach (fileName => {
        const file = zip.files[fileName]
        if (file.dir === true) return
        const file = zip.files[fileName]
        const fileData = await file.async ("string")
      })

      return Promise.all (contentPromises)
        .then ((result) => {
        })
    })
}
```