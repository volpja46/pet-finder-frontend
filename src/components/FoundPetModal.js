import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox, Icon } from 'semantic-ui-react'

const FoundPetModal = () => (
  <Modal trigger={<Button color="dark grey">Report a pet sighting</Button>} closeIcon>
  <Header icon='paw' align="center" content='Report a pet sighting!' />
<Modal.Content image>
  <Image wrapped size='tiny' src='/assets/images/avatar/large/rachel.png' />
  <Modal.Description>
      <Form size='small' key='small'>
    <div class="ui two column centered grid">
    <Form.Field>
      <input placeholder='Name' />
    </Form.Field>
  </div>
  <div class="ui two column centered grid">
    <Form.Field>
      <input placeholder='Pet type' />
    </Form.Field>
    </div>
    <div class="ui two column centered grid">
    <Form.Field>
      <input placeholder='Address' />
    </Form.Field>
  </div>
  <div class="ui two column centered grid">
    <Form.Field>
      <input placeholder='Upload a photo' />
    </Form.Field>
  </div>
  <div class="ui two column centered grid">
    <Button color='purple'>
      <Icon name='paw' /> Submit
    </Button>
  </div>
    </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default FoundPetModal ;
