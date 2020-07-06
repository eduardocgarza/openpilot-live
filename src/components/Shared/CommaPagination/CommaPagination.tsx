import React from "react"
import { Pagination } from "react-bootstrap"
import styled from "styled-components"

const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 30px 0;
`

interface CommaPaginationProps {
  pages: any[]
  pageActive: number
  setPage: (p: number) => void
}

export default function CommaPagination(props: CommaPaginationProps) {
  const { pages, pageActive, setPage } = props

  const pagination = pages.map((_page, index) => (
    <Pagination.Item
      key={index} 
      onClick={() => gotoPage(index)}
      active={index === pageActive}
    >{index+1}</Pagination.Item>
  ))

  function gotoFirst () {
    setPage (0)
  }

  function gotoLast () {
    setPage(pages.length-1)
  }
  
  function gotoPrevious () {
    if (pageActive !== 0) {
      setPage (pageActive - 1)
    }
  }

  function gotoNext () {
    const lastPage = pages.length-1
    if (pageActive !== lastPage) {
      setPage (pageActive + 1)
    }
  }

  function gotoPage(index: number) {
    setPage (index)
  }
  
  return (
    <>
      {pages.length > 1 ? (
        <PaginationWrapper>
          <Pagination size="sm">
            {pages.length > 2 ? (
              <Pagination.First 
                onClick={gotoFirst} 
                disabled={pageActive === 0}
              />
            ) : null}
            <Pagination.Prev 
              onClick={gotoPrevious} 
              disabled={pageActive === 0}
            />
            {pagination}
            <Pagination.Next 
              onClick={gotoNext} 
              disabled={pageActive === (pages.length-1)}
            />
            {pages.length > 2 ? (
              <Pagination.Last 
                onClick={gotoLast} 
                disabled={pageActive === (pages.length-1)}
              />
            ) : null}
          </Pagination>
        </PaginationWrapper>
      ) : null}
    </>
  )
}