import React from 'react';
import { StyleSheet, Text, ScrollView,ListView,View,Button,TouchableOpacity,TouchableHighlight,
	ActivityIndicator,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Actions} from "react-native-router-flux";
import Axios from 'axios';
import MapView from 'react-native-maps';
export default class RaiseComplaint extends React.Component{

static navigationOptions = {
    headerStyle: { backgroundColor: 'skyblue',paddingTop:15,height:75},
    headerTitleStyle: { color: 'white', textAlign: 'center', alignSelf: 'center' }
  };
  state={
  	complaintText:'',
  	      latitude: null,
      longitude: null,
      error: null,
      latitudeDelta:null,
      longitudeDelta:null,
      toEmailText:'',
      region:{
      latitude: 37.78825,
      longitude: -122.4324,
       latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
      }
  }

  // changeText=(e)=>{
  // 	// alert('HI');
  // 	this.setState({complaintText:e.target.value})
  // }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta:position.coords.latitudeDelta,
          longitudeDelta:position.coords.longitudeDelta,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
    let regionObj={
    	latitude:this.state.latitude,
    	longitude:this.state.longitude,
    	latitudeDelta:this.state.latitudeDelta,
    	longitudeDelta:this.state.longitudeDelta
    }
    // this.setState({region:regionObj});
  }

  submitComplaint=()=>{
  	// alert('hi');
  	// alert(this.state.complaintText);
  	let newObj={
  		from:'spsingh559@gmail.com',
  		complaintText:this.state.complaintText,
  		to:this.state.toEmailText
  	}

  	 Axios({
    method: 'POST',
    url: 'http://192.168.0.104:3000/api/v1/RaiseComplaint',
    data: newObj
    })
    .then(function (data) {
    	alert('complaint raise');
    	console.log(data);
    }.bind(this))
    .catch(function (error) {
    console.log(error+"error in jobDetail for status");
    });

    Actions.thankYou();
    // Axios({
    // method: 'GET',
    // url: 'http://192.168.43.208:3000/api/v1/RaiseComplaint'
    // })
    // .then(function (data) {
    // 	alert('complaint raise');
    // 	console.log(data);
    // }.bind(this))
    // .catch(function (error) {
    // console.log(error+"error in jobDetail for status");
    // });
  }

  openCamera=()=>{
  	// alert('Camera On');
  	Actions.cameraPage();
  }
onRegionChange(region) {
  this.setState({ region });
}
	render(){
		return(
			<ScrollView>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Write Complaint 
        </Text>
        <TextInput
          multiline = {true}
          underlineColorAndroid="transparent"
          style={styles.textInput}
          onChangeText={(complaintText) => this.setState({complaintText})}
          value={this.state.complaintText}
          placeholder='Write your complaint'
        />
        <TextInput
        placeholder='Enter your mail ID'
        underlineColorAndroid="transparent"
        style={styles.toTextInput}
          onChangeText={(toEmailText) => this.setState({toEmailText})}
          value={this.state.toEmailText}
        />
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detecting your Current Location</Text>
        <Text>Latitude: {this.state.latitude} Longitude: {this.state.longitude}</Text>
        
        {this.state.error ? <Text style={{color:'red'}}>Sorry We Could not track your current location, kindly enter location detail in problem area. </Text> : null}
     	<MapView
     	style={{height:400,width:300}}
      // region={this.state.region}
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
      // onRegionChange={this.onRegionChange}
    />
      </View>

        <TouchableHighlight style={styles.touch} onPress={this.openCamera}>
        <View style={{justifyContent:'flex-start',flexDirection:'row'}}>

        <Text style={styles.Content}>Take a snap</Text>
        </View>
        </TouchableHighlight>
         <TouchableHighlight style={styles.touch} onPress={this.submitComplaint}>
        <View style={{justifyContent:'flex-start',flexDirection:'row'}}>

        <Text style={styles.Content}>Send Mail</Text>
        </View>
        </TouchableHighlight>
      </View>
      </ScrollView>
			)
	}
}

const styles = StyleSheet.create({
  Content: {
    fontSize: 20,
    paddingLeft:15,
    paddingTop:10,
    marginTop:10,
    paddingBottom:10,
    marginBottom:10,
    paddingRight:20,
    flexDirection:'column',
  justifyContent:'space-around',
  color:'#fff',
},
touch:{
  backgroundColor:'#5AE0FC',
  width:'50%',
  alignItems:'center',
    marginLeft:90,
    marginTop:60,
    borderRadius:10,
},
  tick: {
flexDirection:'column',
justifyContent:'space-around',
marginLeft:20,
marginTop:10,
},
  container: {
    flex: 1,
    marginTop:50,	
    backgroundColor: '#fff',
  },
  textInput: {
    height: 120,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    width: 320,
    borderColor: 'gray',
    borderWidth: 1,
  },
  toTextInput:{
  	height: 50,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    width: 320,
    borderColor: 'gray',
    borderWidth: 1,
  },
  paragraph: {
    alignItems:'center',
    justifyContent:'center',
    width:'70%',
    marginLeft:30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
  }
});


