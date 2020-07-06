import React, { useState } from "react"

export default function CommaLogo () {
  const [hover, setHover] = useState (false)
  const fill = hover ? "#111" : "#000"

  function handleHover () {
    if (!hover) {
      setHover (true)
    }
  }

  function handleUnhover () {
    if (hover) {
      setHover (false)
    }
  }
  
  return (
    <svg 
      height={24} 
      viewBox="0 0 24 44" 
      width={24}
      onMouseOver={handleHover}
      onMouseOut={handleUnhover}
    >
      <title>{"comma"}</title>
      <path
        d="M2.333 44c0-1.018-.08-1.871.037-2.693.05-.35.459-.726.793-.938 1.626-1.032 3.394-1.856 4.908-3.04 4.906-3.836 7.814-8.885 7.973-15.444.045-1.862-.64-2.327-2.204-1.602-4.515 2.095-9.37.867-11.962-3.026C-.948 13.012-.55 7.36 2.836 3.652c4.325-4.736 11.441-4.878 16.348-.354 2.94 2.71 4.337 6.208 4.685 10.187 1.168 13.332-5.52 24.32-17.69 29.148-1.204.477-2.44.87-3.846 1.367"
        fill={fill}
        fillRule="evenodd"
      />
    </svg>
  )
}