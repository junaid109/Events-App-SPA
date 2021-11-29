import React from 'react';
import { Button, Card, Image} from 'semantic-ui-react';
import { IEvent } from '../../../../models/event';

interface Props {
    events: IEvent;
    cancelSelectEvent: () => void;


}

export default function EventDetails({events, cancelSelectEvent}: Props) {
  return (
   <Card fluid>
       <Image src={"/assets/categoryImages/{props.event.category}.jpg"} />
       <Card.Content>
           <Card.Header>{events.title}</Card.Header>
           <Card.Meta> 
                <span>{events.date}</span>
           </Card.Meta>

           <Card.Description>{events.description}</Card.Description>
       </Card.Content>

       <Card.Content extra>
           <Button.Group widths="2">
               <Button basic color="blue" content="Edit"></Button>
               <Button onClick={cancelSelectEvent} basic color="grey" content="Cancel"></Button>

           </Button.Group>
       </Card.Content>
   </Card>
  );
}
