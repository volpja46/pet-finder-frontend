import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox, Icon, Grid} from 'semantic-ui-react'
import PlacesAutoCompleteForm from './PlacesAutoCompleteForm'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


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
    console.log(latlng)
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
      <Modal trigger={<Button color="grey">Report a pet sighting</Button>} closeIcon>
      <Header icon='paw' align="center" size="large" content='Report a pet sighting!' />
        <Modal.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Form
                size='large' key='large'
                onSubmit={this.handleSubmit}
                >
                <Form.Field>
                  <input
                    placeholder='Name'
                    onChange={this.handleNameChange}
                     />
                </Form.Field>
                <Form.Field>
                  <input
                    placeholder='Pet type'
                    onChange={this.handlePetTypeChange}/>
                </Form.Field>
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
                <Form.Field>
                <Button color='violet'>
                  <Icon name='paw' /> Submit
                </Button>
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <img src="https://static.pexels.com/photos/247937/pexels-photo-247937.jpeg"></img>
              <p>"I found this dog and I reported it to PetFindr. They have great customer service! Lady on the phone named Lauren was very nice." - David He</p> 
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Modal.Content>
    </Modal>
    )
  }
}

export default FoundPetModal
