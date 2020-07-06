import React, { useState } from "react"
import { DeleteDataWrapper, DeleteDataContainer, DeleteDataButton } from "./DeleteDataStyles"
import { SearchContainer, SearchHeader } from "../Search/SearchStyles"
import { ParagraphItem, HeaderTwo } from "../../../Shared/Layout/Layout"
import useAppContext from "../../../../state/context/AppContext"

export default function DeleteData () {
  const { deleteAllItems } = useAppContext()
  const [toggleContent, setToggleContent] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)

  function toggleSearch () {
    setToggleContent(!toggleContent)
  }

  async function handleDelete() {
    if (!deleteMode) {
      return setDeleteMode(true)
    }
    deleteAllItems()
  }
  
  return (
    <DeleteDataWrapper>
      <SearchContainer>
        <SearchHeader onClick={toggleSearch}>
          <HeaderTwo text="Delete Data" />
        </SearchHeader>
        {toggleContent ? (
          <DeleteDataContainer>
            <ParagraphItem text="This action is permanent and cannot be undone. Please be sure you want to delete this data before continuing." />
            <DeleteDataButton 
              onClick={handleDelete}
              deleteMode={deleteMode}
            >Delete Data</DeleteDataButton>
          </DeleteDataContainer>
        ) : null}
      </SearchContainer>
    </DeleteDataWrapper>
  )
}