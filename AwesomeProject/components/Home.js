import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight,
	ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Actions} from "react-native-router-flux";
// import { Card } from 'react-native-elements'; 

export default class Home extends React.Component{

	static navigationOptions = {
    headerStyle: { backgroundColor: 'skyblue',paddingTop:15,height:75},
    headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' }
  };
  _onPressButton=()=>{
  	Actions.raiseComplaint();
  }

	render(){
		return(
		 <View style={styles.container}>
        <View style={styles.card}>
          <TouchableHighlight style={styles.touch}  onPress={this._onPressButton}>
        <Text style={styles.paragraph}>
          Fire Issue
        </Text>
      </TouchableHighlight>
      <Text></Text>
      <TouchableHighlight style={styles.touch} onPress={this._onPressButton}>
        <Text style={styles.paragraph}>
          Drainage issue
        </Text>
      </TouchableHighlight>
       <Text></Text>
      <TouchableHighlight style={styles.touch} onPress={this._onPressButton}>
        <Text style={styles.paragraph}>
          Water Leakage
        </Text>
      </TouchableHighlight>
       <Text></Text>
      <TouchableHighlight style={styles.touch} onPress={this._onPressButton}>
        <Text style={styles.paragraph}>
          Electricity Shutdown
        </Text>
      </TouchableHighlight>
        </View>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  touch:{
    backgroundColor:"#DADADA",
    width:'90%',
    marginLeft:20,
    borderRadius:5,
  },
  card:{
    backgroundColor:'#F9F9F9',
    width:'90%',
    height:'90%',
  }
});