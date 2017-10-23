import React from 'react';
import LostPetModal from './LostPetModal'
import FoundPetModal from './FoundPetModal'
import PlacesAutoCompleteForm from './PlacesAutoCompleteForm'
import SimpleMap from './MyMapComponent'



export default class Home extends React.Component {
	render() {
		return (
			<div>
				<center>
					<h2>
            <img src={require(`../images/finder.png`)} alt="finder" height="60" width="175"/>
					</h2>
					<LostPetModal/>
					<FoundPetModal />
				</center>
				<div style={{width: '100%', height: '600px'}}>
					<SimpleMap/>
				</div>
			</div>
		);
	}
}
