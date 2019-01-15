import React from 'react';
import { Text, TouchableOpacity, Button} from 'react-native';
import {StyleSheet} from 'react-native';
export default class MyButton extends React.Component {
		
	render() {

		return (
			<TouchableOpacity style={styles.buttonStyle} onPress={this.props.funcionClick} disabled={this.props.disable} >
				<Text style={styles.textStyle} >{this.props.nombre}</Text>
			</TouchableOpacity>
			
		);
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
	backgroundColor: '#841584',
	borderRadius:10,
	borderColor: 'white',
    borderWidth: 3,
  }
});