import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Icon} from 'semantic-ui-react'

const AnyReactComponent = ({ text }) => (
  <Icon name='circle' color='red' size="large" />
);

let divStyle = {
  border: '5px solid #f44336',
  minWidth: "175px",
  backgroundColor: 'white',
  textAlign: 'center',
  color: 'black',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
}

const InfoBox = (props) => (
  <div style={divStyle}>
  <p>{props.pet.name}</p>
  <p>{props.pet.lost_or_found}</p>
  <p>{props.pet.contact}</p>
  <p>{props.pet.animal_type}</p>
  <p>{props.pet.comment}</p>
  </div>

);

export default class SimpleMap extends React.Component {
  constructor(){
    super()
    this.childMouseEnter = this.childMouseEnter.bind(this)
    this.state = {
      allPets: [],
      lat: "",
      lng: "",
      infoBox: false
    }
  }

  componentWillMount(){
    fetch('http://localhost:3000/pets')
      .then(res => res.json())
      .then(res => this.setState({
        allPets: res
      }))

  }

  static defaultProps = {
    center: {lat: 40.7128, lng: -74.0060},
    zoom: 11
  };

  childMouseEnter(num, childProps){
    this.setState({
      lat: childProps.lat,
      lng: childProps.lng,
      infoBox: true,
      pet: childProps.pet
    })

  }

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChildMouseEnter={this.childMouseEnter}
      >
      {this.state.allPets.map(pet =>
        <AnyReactComponent
          key={pet.id}
          lat={pet.lat}
          lng={pet.lng}
          pet = {pet}
        /> )}
        {this.state.infoBox ? <InfoBox lat={this.state.lat} lng={this.state.lng} pet={this.state.pet}/> : console.log("noninfnobox")}
      </GoogleMapReact>
    );
  }
}
