import React from 'react'
import { Button, Header, Image, Modal, Form, Checkbox, Icon, Grid} from 'semantic-ui-react'
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
      <Modal trigger={<Button color="grey">Report a lost pet</Button>} closeIcon>
      <Header icon='paw' align="center" size="large" content='Report a lost pet!' />
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
              <img src="https://static.pexels.com/photos/460823/pexels-photo-460823.jpeg"></img>
              <p>"Help me find my poor old Baxter Puppington." -Kevin Yonzon</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Modal.Content>
  </Modal>
  )
  }
}

export default LostPetModal
