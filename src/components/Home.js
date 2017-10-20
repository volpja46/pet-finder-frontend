import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import LostPetModal from './LostPetModal'
import FoundPetModal from './FoundPetModal'

export default class Home extends React.Component {
	render() {
		return (
			<div>
					<h2>
            <img src={require(`../images/finder.png`)} alt="finder" height="60" width="175"/>
					</h2>
					<LostPetModal/>
					<FoundPetModal />
			</div>
		);
	}
}

//
// <center>
//   <img src={require(`../Images/beer.jpeg`)} alt="beer" />
