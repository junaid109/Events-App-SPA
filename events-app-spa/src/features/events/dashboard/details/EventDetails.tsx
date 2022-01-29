import React from 'react';
import { Button, Card, Icon, Image} from 'semantic-ui-react';
import { Event } from '../../../../models/event';

interface Props {
    events: Event;
    cancelSelectEvent: () => void;
    openForm: (id: string) => void;
}

export default function EventDetails({events, cancelSelectEvent, openForm}: Props) {
  return (
   <Card fluid>
       <Image src={"/assets/categoryImages/{props.event.category}.jpg"}  wrapped ui={false}/>
       <Card.Content>
           {/* <Card.Header>{events.title}</Card.Header>
           <Card.Meta> 
                <span>{events.date}</span>
           </Card.Meta>

           <Card.Description>{events.description}</Card.Description> */}
       </Card.Content>

       <Card.Content extra>
           <Icon name="user"></Icon>
           <Button.Group widths="2">
               <Button onClick={() => openForm(events.id)} basic color="blue" content="Edit"></Button>
               <Button onClick={cancelSelectEvent} basic color="grey" content="Cancel"></Button>

           </Button.Group>
       </Card.Content>
   </Card>
  );
}
