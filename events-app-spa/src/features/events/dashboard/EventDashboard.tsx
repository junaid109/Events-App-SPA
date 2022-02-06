import React from 'react'
import { Grid, Header, List } from 'semantic-ui-react'
import { Event } from '../../../models/event'
import EventDetails from './details/EventDetails'
import EventList from './EventList'
import EventForm from './form/EventForm'

interface Props {
    events: Event[];
    selectedEvent: Event | undefined;
    selectEvent: (id: string) => void;
    cancelSelectEvent: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
}
export default function EventDashboard({
    events,
    selectedEvent, 
    selectEvent, 
    cancelSelectEvent,
    editMode,
    openForm,
    closeForm} : Props) {
    return (
        <Grid>
            <Grid.Column width= "10">
                <EventList events={events} selectEvent={selectEvent}/>       
            </Grid.Column>

            <Grid.Column width="6">
                {events[0] &&
                <EventDetails 
                events={selectedEvent} 
                cancelSelectEvent={cancelSelectEvent}
                openForm={openForm}
                /> }
                {editMode &&
                <EventForm closeForm={closeForm} events={selectedEvent}></EventForm>}
            </Grid.Column>
        </Grid>
    )
}

