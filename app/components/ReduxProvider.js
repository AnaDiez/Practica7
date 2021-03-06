import { Provider } from 'react-redux';
import GlobalState from '../reducers/reducers';
import { createStore } from 'redux';
import { questions } from "../../assets/mock-data";

import React from 'react';

import GameScreen from './GameScreen';

export default class ReduxProvider extends React.Component {
	constructor(props) {
		super(props);
		this.initialState = {
			score: 0,
			finished: false,
			currentQuestion : 0,
			questions: [ ...questions ]
		};
		this.store = this.configureStore();
	}

	render() {
		return (
			<Provider store={this.store}>
				<GameScreen/>
			</Provider>
		);
	}

	configureStore() {
		return createStore(GlobalState, 
							this.initialState,
							);

	}
}