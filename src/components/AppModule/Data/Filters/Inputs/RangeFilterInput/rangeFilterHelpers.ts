import moment from "moment"

export function validateRange(sortKey: string, lowerValue: string, upperValue: string) {
  if (!lowerValue && !upperValue) return false
  
  const checkLower = !!lowerValue
  const checkUpper = !!upperValue

  switch (sortKey) {
    case "distance":
    case "averageSpeed":
    case "averageAcceleration": {
      const lowerNumber = Number(lowerValue)
      const upperNumber = Number(upperValue)
      const lowerIsNumber = Number.isFinite(lowerNumber)
      const upperIsNumber = Number.isFinite(upperNumber)

      if (checkLower && checkUpper) {
        if (!lowerIsNumber) return false
        if (!upperIsNumber) return false
        else if (lowerNumber > upperNumber) return false
      }
      else if (checkLower) {
        if (!lowerIsNumber) return false
      }
      else if (checkUpper) {
        if (!upperIsNumber) return false
      }
      return true
    }
    case "startDate": {
      const DATE_FORMAT = ["DD-M-YYYY", "D-MM-YYYY", "DD-MM-YYYY", "D-M-YYYY"]
      if (checkLower && checkUpper) {
        const lowerDate = moment(lowerValue, DATE_FORMAT, true)
        const lowerValueValid = lowerDate.isValid()
        const upperDate = moment(upperValue, DATE_FORMAT, true)
        const upperValueValid = upperDate.isValid()
        if (!lowerValueValid || !upperValueValid) return false
        
        return lowerDate < upperDate
      }
      else if (checkLower) {
        const lowerValueValid = moment(lowerValue, DATE_FORMAT, true).isValid()
        if (!lowerValueValid) return false
        else return true
      }
      else if (checkUpper) {
        const upperValueValid = moment(upperValue, DATE_FORMAT, true).isValid()
        if (!upperValueValid) return false
        else return true
      }
      return false
    }
    case "startTime": 
    case "duration": {
      const DURATION_FORMAT = ["HH:mm:ss","H:mm:ss"]
      if (checkLower && checkUpper) {
        const lowerDuration = moment(lowerValue, DURATION_FORMAT, true)
        const lowerValueValid = lowerDuration.isValid()
        const upperDuration = moment(upperValue, DURATION_FORMAT, true)
        const upperValueValid = upperDuration.isValid()
        
        if (!lowerValueValid || !upperValueValid) return false
        
        return lowerDuration < upperDuration
      }
      else if (checkLower) {
        const lowerValueValid = moment(lowerValue, DURATION_FORMAT, true).isValid()
        if (!lowerValueValid) return false
        else return true
      }
      else if (checkUpper) {
        const upperValueValid = moment(upperValue, DURATION_FORMAT, true).isValid()
        if (!upperValueValid) return false
        else return true
      }
      return false
    }
    default: {
      return false
    }
  }
}