import React, { useContext } from "react"
import jumbotronImage from "../../../assets/images/open-pilot.jpg"
import { SessionContext } from "../../../state/context/SessionContext"
import { HomeWrapper, JumbotronContainer, ContentContainer, HomeButton } from "./HomeStyles"
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
        <img src={jumbotronImage} alt="comma.ai"/>
      </JumbotronContainer>
      <ContentContainer>
        <h1>openpilot.live</h1>
        <p>
          Welcome to openpilot.live. Get started by clicking below and entering into your Dashboard to begin uploading analyzing data.
        </p>
        <HomeButton onClick={handleEnter}>Enter site</HomeButton>
      </ContentContainer>
    </HomeWrapper>
  )
}