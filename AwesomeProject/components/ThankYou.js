import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight,
	ActivityIndicator} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Actions} from "react-native-router-flux";


export default class ThankYou extends React.Component{
	state={
		animating:true
	}

closeActivityIndicator = () =>setTimeout(() =>this.setState({
      animating: false }), 3000);

componentDidMount=()=>{
          this.closeActivityIndicator();
    }

	render(){
		 if(this.state.animating==true){
     return(
       <View style = {styles.container}>
           <ActivityIndicator
              animating = {this.state.animating}
              color = '#bc2b78'
              size = "large"
              style = {styles.activityIndicator}/>
              <Text> Wait, we are sending your complaint to concern authority </Text>
        </View>
     )
   }else{
		return(
			<View style={styles.container}>
        <Text style={styles.paragraph}>
          Thank You For Raising Your Concern!
        </Text>
      
      </View>
			)}
	}
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  
  },
  paragraph: {
    margin: 50,
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor:'skyblue',
    padding:20,
     fontFamily:'lucida grande',
     
     borderRadius:50,
    
  },

});