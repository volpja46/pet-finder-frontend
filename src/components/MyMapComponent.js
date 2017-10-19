import React from "react"
import { compose, withProps } from "recompose"
import CSS from '../App.css'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer"
// import MyModal from './MyModal'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px`, width: `500px`}} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 40.70, lng: -74.01 }}
  >
    {props.isMarkerShown && <Marker key={1} position={{ lat: 40.70, lng: -74.01 }} onClick={props.onMarkerClick(this)} />}
    {props.isMarkerShown && <Marker key={2} position={{ lat: 40.90, lng: -74.01 }} onClick={props.onMarkerClick(this)} />}
  </GoogleMap>
)

export class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }


  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {

  }

  render() {
    return (
      <div>
        <br/>
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    </div>
    )
  }
}
