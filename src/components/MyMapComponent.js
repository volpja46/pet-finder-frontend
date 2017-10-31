import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Icon} from 'semantic-ui-react'

const AnyReactComponent = ({ text }) => (
  <Icon name='circle' color='violet' size="large" />
);

let divStyle = {
  border: '3px solid #7e20db',
  minWidth: "170px",
  backgroundColor: 'white',
  color: 'black',
  fontSize: 13,
  padding: 4,
  cursor: 'pointer',
  borderRadius: '10%'
}

const InfoBox = (props) => (
  <div style={divStyle}>
  <p><b>Name:</b> {props.pet.name}</p>
  <p><b>Status:</b> {props.pet.lost_or_found}</p>
  <p><b>Contact:</b> {props.pet.contact}</p>
  <p><b>Animal type:</b> {props.pet.animal_type}</p>
  <p>{props.pet.comment}</p>
  </div>

);

export default class SimpleMap extends React.Component {
  constructor(){
    super()
    this.childMouseEnter = this.childMouseEnter.bind(this)
    this.childMouseLeave = this.childMouseLeave.bind(this)
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
    center: {lat: 40, lng: 40},
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

  childMouseLeave(num, childProps){
    this.setState({
      infoBox: false
    })
  }

  render() {
    return (
       <GoogleMapReact
        center={{lat: this.props.searchLat, lng: this.props.searchLng}}
        defaultZoom={this.props.zoom}
        onChildMouseEnter={this.childMouseEnter}
        onChildMouseLeave={this.childMouseLeave}
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
