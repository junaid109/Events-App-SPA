import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container, Header, Icon, List } from "semantic-ui-react";
import { IEvent } from "../../models/event";
import NavBar from "../../features/nav/NavBar";
import EventDashboard from "../../features/events/dashboard/EventDashboard";

const App = () => {
  const url = "https://localhost:44346/api/Events/GetList";
 

  const [events, setEvents] = useState<IEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<IEvent>();

  useEffect(() => {
    axios
    .get<IEvent[]>(url)
    .then((response) => {
      setEvents(response.data);
      console.log(response);
    });
  }, []);

  function handleSelectEvent(id: String) {
    setSelectedEvent(events.find(x => x.id === id))
  }

  function handleCancelEvent() {
    //setSelectedEvent(undefined);
  }

  return (
    <Fragment>
      <NavBar/>
      <Container style={{marginTop: "7em"}}> 
      <EventDashboard events={events} selectedEvent={selectedEvent} selectEvent={handleSelectEvent} cancelSelectEvent={handleCancelEvent}/>
      </Container>

    </Fragment>
  );
};

export default App;
