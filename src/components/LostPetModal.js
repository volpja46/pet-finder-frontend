import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox, Icon} from 'semantic-ui-react'
import PlacesAutoCompleteForm from './PlacesAutoCompleteForm'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


class LostPetModal extends React.Component {
  constructor (){
    super()
    this.state = {
      name: '',
      address: '',
      lostOrFound: 'lost',
      animalType: '',
      image: '',
      comment: '',
      contact: '',
      lat: '',
      lng: ''
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
  }

  handleLatLng = (latlng) => {
    this.setState({
      lat: latlng.lat,
      lng: latlng.lng
    })
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
    contact: this.state.contact,
    lat: this.state.lat,
    lng: this.state.lng
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
      <Modal trigger={<Button color="grey">Report a lost pet</Button>} closeIcon>
      <Header icon='paw' align="center" content='Report a lost pet!' />
        <Modal.Content image>
          <Image wrapped size='tiny' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
        <Form
        size='small' key='small'
        onSubmit={this.handleSubmit}
        >
        <div className="ui two column centered grid">
        <Form.Field>
          <input
            placeholder='Name'
            onChange={this.handleNameChange}
             />
        </Form.Field>
      </div>
      <div className="ui two column centered grid">
        <Form.Field>
          <input
            placeholder='Pet type'
            onChange={this.handlePetTypeChange}/>
        </Form.Field>
        </div>
      <div className="ui two column centered grid">
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
        <Form.Field>
          <PlacesAutoCompleteForm handleLatLng={this.handleLatLng}/>
        </Form.Field>
      </div>
      <Button color='purple'>
        <Icon name='paw' /> Submit
      </Button>
      <div className="ui two column centered grid">

    </div>

        </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default LostPetModal
