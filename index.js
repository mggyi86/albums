//Import a library to help create a component
// import 'react-devtools';
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// import { AppRegistry } from 'react-native';
// import App from './App';


// AppRegistry.registerComponent('albums', () => App);

// Create a component
const App = () => (
        <View style={{ flex: 1 }}>
          <Header headerText={'Albums'} />
          <AlbumList />
        </View>
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
// echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
// echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
// echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
// watchman shutdown-server
//adb shell input keyevent 82
