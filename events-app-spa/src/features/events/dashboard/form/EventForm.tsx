import React from 'react';
import { Button, Form, Segment } from "semantic-ui-react";

interface Props {
  events: Event | undefined;
  closeForm: () => void;
}

export default function EventForm({events, closeForm} : Props)  {
  return (
    <Segment clearing>
        <Form>
            <Form.Input placeholder="Title"> </Form.Input>
            <Form.TextArea placeholder="Description"> </Form.TextArea>
            <Form.Input placeholder="Category"> </Form.Input>
            <Form.Input placeholder="Date"> </Form.Input>
            <Form.Input placeholder="City"> </Form.Input>
            <Form.Input placeholder="Venue"> </Form.Input>
            <Button floated="right" positive type="submit" content="Submit"></Button>
            <Button floated="right" type="button" content="Cancel"></Button>

        </Form>
    </Segment>
  );
}
