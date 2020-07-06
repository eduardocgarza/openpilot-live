import styled from "styled-components"

/**
 * @Header
 */
export const Header = styled.header`
  background: #F4F4F4;
  border: 1px solid #CCC;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #666;
  display: flex;
  padding: 8px 6px;
`

export const HeadIcon = styled.div`
  width: 40px;
`

export const HeadExpand = styled.div`
  flex: 1;
`

export const HeadContent = styled.div`
  margin-left: 8px;
  min-width: 120px;
`

export const HeadButton = styled.div`
  min-width: 50px;
`

/**
 * @Item
 */
export const ItemIcon = styled.div`
  min-width: 40px;
`

export const ItemExpand = styled.div`
  flex: 1;

  &:hover {
    text-decoration: underline;
  }
`

export const ItemContent = styled.div`
  margin-left: 8px;
  min-width: 120px;
`

export const ItemButton = styled.div`
  min-width: 50px;
`