import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight,
	ActivityIndicator,Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Actions} from "react-native-router-flux";


export default class Welcome extends React.Component{

	static navigationOptions = {
    headerStyle: { backgroundColor: 'skyblue',paddingTop:15,height:75},
    headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' }
  };

	render(){
		return(
			
      		<View style={styles.container}>
      		<Image
            source={{uri:'http://walldiskpaper.com/wp-content/uploads/2014/11/Blue-Background-High-Definition-HD.jpg'}}
            style={{ height: '100%', width: '100%', marginLeft: 10, paddingTop:0, marginRight: 10 }}>

        <Text style={styles.paragraph}>
         How may I Help You?
        </Text>
       <TouchableHighlight
          onPress={() => Actions.home() }
          style={styles.button}>
          <Text style={styles.buttonText}>
            Raise Complaint
          </Text>
        </TouchableHighlight>
        </Image>
      </View>
		)
	}
}

const styles =StyleSheet.create({
	container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    margin: 50,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
button: {
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 60,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  }
})