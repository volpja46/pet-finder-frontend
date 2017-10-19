import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox } from 'semantic-ui-react'

const FoundPetModal = () => (
  <Modal trigger={<Button>Report a pet sighting</Button>}><br/>
    <Modal.Header>Report a pet sighting</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Form>
    <Form.Field>
      <label>Name:</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Address</label>
      <input placeholder='Address' />
    </Form.Field>
    <Form.Field>
      <label>Upload a photo</label>
      <input placeholder='Upload a photo' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default FoundPetModal ;
