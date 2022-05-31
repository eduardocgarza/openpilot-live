import React, { useContext } from "react"
import jumbotronImage from "../../../assets/images/open-pilot.jpg"
import { SessionContext } from "../../../state/context/SessionContext"
import { HomeWrapper, JumbotronContainer, ContentContainer, HomeButton, CommaMainImage, HomeTitle, HomeDescription } from "./HomeStyles"
import { useHistory } from "react-router-dom"
import { DashboardRoute } from "../../../router/Routes"

export default function Home () {
  const { setSession } = useContext (SessionContext)
  const history = useHistory ()

  function handleEnter () {
    setSession ({ isAuthenticated: true })
    history.push (DashboardRoute)
  }
  
  return (
    <HomeWrapper>
      <JumbotronContainer>
        <CommaMainImage src={jumbotronImage} alt="Comma.ai" />
      </JumbotronContainer>
      <ContentContainer>
        <HomeTitle>Welcome to the openpilot dashboard</HomeTitle>
        <HomeDescription>
          Get started by clicking below and entering into your Dashboard to begin uploading analyzing data.
        </HomeDescription>
        <HomeButton onClick={handleEnter}>Enter site</HomeButton>
      </ContentContainer>
    </HomeWrapper>
  )
}