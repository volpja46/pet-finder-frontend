import React from 'react';
import LostPetModal from './LostPetModal'
import FoundPetModal from './FoundPetModal'
import PlacesAutoCompleteForm from './PlacesAutoCompleteForm'
import SimpleMap from './MyMapComponent'
import {Grid} from 'semantic-ui-react'
import '../App.css'
import SimpleForm from './SearchLocation'


export default class Home extends React.Component {
	constructor(){
		super()
		this.searchLocation = this.searchLocation.bind(this)
		this.state = {
			lat: 40.7128,
			lng: -74.0060
		}
	}

	searchLocation = (latlng) => {
		console.log(latlng)
		this.setState({
			lat: latlng.lat,
			lng: latlng.lng
		})
	}

	render() {
		return (
			<div id="App">
				<center>
					<h1 className="title">
            InPetstigator
					</h1>
					<LostPetModal/>
					<FoundPetModal />
				</center>
				<div style={{width: '70vw', height: '50vh'}}>
					<SimpleMap searchLat={this.state.lat} searchLng={this.state.lng}/>
				</div>
					<div>
					<SimpleForm searchLocation={this.searchLocation}/>
				</div>
			</div>
		);
	}
}
