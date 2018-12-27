
// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Album'}/>
    <AlbumList />
  </View>
  );


//Export App - This line solved my issue
export default App;

//Render it to the device
AppRegistry.registerComponent('AwesomeProject', () => App);




/*
import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('MyProject', () => App);
*/
