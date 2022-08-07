import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container, Header, Icon, List } from "semantic-ui-react";
import { Event } from "../../models/event";
import NavBar from "../../features/nav/NavBar";
import EventDashboard from "../../features/events/dashboard/EventDashboard";

const App = () => {
  const url = "http://localhost:20145/api/Events/GetList";
 
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
    .get<Event[]>(url)
    .then((response) => {
      setEvents(response.data);
      console.log(response);
      alert(response.statusText);
    });
  }, []);

  function handleSelectEvent(id: String) {
    setSelectedEvent(events.find(x => x.id === id))
  }
  

  function handleCancelEvent() {
    setSelectedEvent(undefined);
  }

  function handleFormOpen(id? : string) 
  {
    id ? handleSelectEvent(id): handleCancelEvent();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }



  return (
    <Fragment>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: "7em"}}> 
      { 

      <EventDashboard 
      events={events} 
      selectedEvent={selectedEvent} 
      selectEvent={handleSelectEvent} 
      cancelSelectEvent={handleCancelEvent}
      editMode = {editMode}
      openForm={handleFormOpen}
      closeForm={handleFormClose}/> 
    }
      </Container>

    </Fragment>
  );
};

export default App;

function value(value: any) {
  //throw new Error("Function not implemented.");
}

