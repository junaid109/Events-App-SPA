import React from 'react'
import { Grid, Header, List } from 'semantic-ui-react'
import { IEvent } from '../../../models/event'
import EventDetails from './details/EventDetails'
import EventList from './EventList'
import EventForm from './form/EventForm'

interface Props {
    events: IEvent[];
    selectedEvent: IEvent;
    selectEvent: (id: string) => void;
    cancelSelectEvent: () => void;
}
export default function EventDashboard({events ,selectedEvent, selectEvent, cancelSelectEvent} : Props) {
    return (
        <Grid>
            <Grid.Column width= "10">
                <EventList events={events} selectEvent={selectEvent}/>       
            </Grid.Column>

            <Grid.Column width="6">
                {events[0] &&
                <EventDetails events={selectedEvent} cancelSelectEvent={cancelSelectEvent}/> }
                <EventForm></EventForm>
            </Grid.Column>
        </Grid>
    )
}

