import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function NavBar( {openForm} : Props) {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header> <img src="/events-app-spa/public/assets/logo.png " style={{marginRight: "10px"}}/>Events</Menu.Item> 
        <Menu.Item header>Messages</Menu.Item> 
        <Menu.Item header>Friends</Menu.Item> 

          <Button onClick={openForm} positive content="Create Activity">

        </Button>

      </Container>
    </Menu>
  )
}

