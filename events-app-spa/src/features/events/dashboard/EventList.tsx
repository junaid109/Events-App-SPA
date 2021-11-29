import React from 'react';
import { Button, Item, Label, Segment } from "semantic-ui-react"
import { IEvent } from '../../../models/event';

interface Props {
    events: IEvent[];
    selectEvent: (id: string) => void;
}

export default function EventList({events, selectEvent}: Props) {
  return (
      <Segment>
          <Item.Group divided>
              {events.map(event => 
                {
                    <Item key={event.id}>
                        <Item.Content>
                        <Item.Header as="a">{event.title}</Item.Header>
                        <Item.Meta>{event.date}</Item.Meta>
                        <Item.Description>
                            <div>{event.description}</div>
                            <div>{event.city}{event.venue}</div>
                        </Item.Description>
                        <Item.Extra>
                            <Button onClick={() => selectEvent(event.id)} floated="right" content="View" color="blue"></Button>
                            <Label basic content={event.category}></Label>
                        </Item.Extra>
                        </Item.Content>
                    </Item>
                })}

          </Item.Group>
      </Segment>
  );
}
