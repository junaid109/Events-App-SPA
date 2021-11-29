import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header> <img src="/events-app-spa/public/assets/logo.png " style={{marginRight: "10px"}}/>Events</Menu.Item> 
        <Menu.Item header>Messages</Menu.Item> 
        <Menu.Item header>Friends</Menu.Item> 

          <Button positive content="Create Activity">

        </Button>

      </Container>
    </Menu>
  );
};

export default NavBar;
