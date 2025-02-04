import React from "react"

interface AddButtonIconProps { width: number }

export default function AddButtonIcon (props: AddButtonIconProps) {
  return (
    <svg width={props.width} viewBox="0 0 24 24">
      <path fill="#FFF" d="M13 12v-2h1v2h2v1h-2v2h-1v-2h-2v-1h2zm5 8H6V4H5v17h13v-1zm1 0v2H4V3h2V1h10l5 5v14h-2zM7 2v17h13V6l-4-4H7zm9 0l4 4h-4V2z" />
    </svg>
  )
}