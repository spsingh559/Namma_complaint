/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Router,Stack,Scene} from "react-native-router-flux";
import Welcome from './components/Welcome';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
import CameraPage from './components/CameraPage';
import RaiseComplaint from './components/RaiseComplaint';

const App = () => (

     
  <Router>
    <Stack key="root">
      <Scene key="welcome" component={Welcome} type='push' title='Namma Complaints'/>
        <Scene key="home" component={Home} title='Complaints Box'/>
        <Scene key="raiseComplaint" component={RaiseComplaint} title='Fill Complaints'/>
         <Scene key="cameraPage" component={CameraPage} title='Take Snippet'/>
         <Scene key="thankYou" component={ThankYou} title='ThankYou'/>
    </Stack>
  </Router>
);
export default App;
