import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox, Icon} from 'semantic-ui-react'
import PlacesAutoCompleteForm from './PlacesAutoCompleteForm'

class FoundPetModal extends React.Component {
  constructor (){
    super()
    this.state = {
      name: '',
      address: '',
      lostOrFound: 'found',
      animalType: '',
      image: '',
      comment: '',
      contact: ''
    }
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  handlePetTypeChange = (event) => {
    this.setState({
      animalType: event.target.value
    })
  }

  handlePhotoChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleContactChange = (event) => {
    this.setState({
      contact: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newPet = {
    name: this.state.name,
    lost_or_found: this.state.lostOrFound,
    animal_type: this.state.animalType,
    address: this.state.address,
    image: this.state.image,
    comment: this.state.comment,
    contact: this.state.contact
  }

  let animalCreateParams = {
    method: 'POST',
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json'},
    body: JSON.stringify(newPet)
  }

  fetch(`http://localhost:3000/pets`, animalCreateParams)
    .then(resp=>resp.json())
    .then(resp => console.log(resp))
}

  render() {
    return(
      <Modal trigger={<Button color="grey">Report a pet sighting</Button>} closeIcon>
      <Header icon='paw' align="center" content='Report a pet sighting!' />
        <Modal.Content image>
          <Image wrapped size='tiny' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
        <Form
        size='small' key='small'
        onSubmit={this.handleSubmit}
        >
        <div class="ui two column centered grid">
        <Form.Field>
          <input
            placeholder='Name'
            onChange={this.handleNameChange}
             />
        </Form.Field>
      </div>
      <div class="ui two column centered grid">
        <Form.Field>
          <input
            placeholder='Pet type'
            onChange={this.handlePetTypeChange}/>
        </Form.Field>
        </div>
        <div class="ui two column centered grid">
        <Form.Field>
          <input
            placeholder='Address'
            onChange={this.handleAddressChange} />
        </Form.Field>
      </div>
      <div class="ui two column centered grid">
        <Form.Field>
          <input
            placeholder='Upload a photo'
            onChange={this.handlePhotoChange}
            />
        </Form.Field>
        <Form.Field>
          <input
            placeholder='Comment'
            onChange={this.handleCommentChange} />
        </Form.Field>
        <Form.Field>
          <input
            placeholder='Contact'
            onChange={this.handleContactChange} />
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
  }
}

export default FoundPetModal
