import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import HandOuts from './Screens/Handouts';
import BookMark from './Screens/Bookmark';

function App() {
  const [activePage, setActivePage] = useState('HANDOUTS');
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar hidden={true} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerUpper}>
              <View style={styles.iconHome}>
                <Octicons name="three-bars" size={25} color="#fff" />
                <Text style={styles.headingTitle}>Home</Text>
              </View>
              <View style={styles.searchDots}>
                <Icon name="search" size={20} color="#fff" />
                <Entypo name="dots-three-vertical" size={20} color="#fff" />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setActivePage('HANDOUTS')}>
                <Text style={styles.buttonText}>HANDOUTS</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => setActivePage('BOOKMARK')}>
                <Text style={styles.buttonText}>BOOKMARK</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Use the BookSection component */}
          {activePage === 'HANDOUTS' ? (
           <HandOuts />
          ) : (
            <BookMark />
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    backgroundColor: 'rgb(21, 27, 85)',
  },
  header: {
    flexDirection: 'column',
    paddingTop: 25,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: '#1a70d5',
  },
  headerUpper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconHome: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 34,
    alignSelf: 'center',
    marginLeft: 6,
  },
  searchDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    alignSelf: 'center',
  },
  headingTitle: {
    fontSize: 25,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {
    margin: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  body: {
    flexDirection: 'column',
  },
});

export default App;
