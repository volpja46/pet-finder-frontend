import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import {Button, Icon, Form, Grid} from 'semantic-ui-react'
import '../App.css'

class SimpleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.searchLocation(latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      placeholder: "Search Location",
      onChange: this.onChange,
    }

    return (
    <form className="button" onSubmit={this.handleFormSubmit}>
          <PlacesAutocomplete inputProps={inputProps} />
          <Button color='dark grey'>Submit </Button>
     </form>

    )
  }
}

export default SimpleForm



// <Form size={"medium"} onSubmit={this.handleFormSubmit}>
// <Grid columns={2} >
//   <Grid.Row>
//     <Grid.Column className="no-padding">
//       <PlacesAutocomplete inputProps={inputProps} />
//     </Grid.Column>
//     <Grid.Column className="no-padding">
//       <Button animated Button color="grey" className="no-margin">
//         <Button.Content visible>Submit</Button.Content>
//         <Button.Content hidden>
//         <Icon name='location arrow' />
//         </Button.Content>
//       </Button>
//     </Grid.Column>
//  </Grid.Row>
// </Grid>
//  </Form>
