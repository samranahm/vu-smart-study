import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Handouts from './Handouts';
import BookMark from './Bookmark';
import Header from '../components/Header';

function HomeScreen() {
  const [activePage, setActivePage] = useState('HANDOUTS');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <Header activePage={activePage} setActivePage={setActivePage} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.container}>
          {activePage === 'HANDOUTS' ?
           <Handouts /> 
           :
           <BookMark />}
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
  
});

export default HomeScreen;
