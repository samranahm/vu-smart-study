import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

function Header ({ activePage, setActivePage }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerUpper}>
        <View style={styles.iconHome}>
          <TouchableOpacity>
            <Octicons name="three-bars" size={25} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headingTitle}>Home</Text>
        </View>
        <View style={styles.searchDots}>
          <TouchableOpacity>
            <Icon name="search" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActivePage('HANDOUTS')}
          delayPressIn={0}>
          <Text style={styles.buttonText}>HANDOUTS</Text>
          {activePage === 'HANDOUTS' && <View style={styles.activeUnderline} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setActivePage('BOOKMARK')}
          delayPressIn={0}>
          <Text style={styles.buttonText}>BOOKMARK</Text>
          {activePage === 'BOOKMARK' && <View style={styles.activeUnderline} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  headingTitle: {
    fontSize: 25,
    color: '#fff',
  },
  searchDots: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    margin: 8,
    position: 'relative',
    padding: 2,
  },
  activeUnderline: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -7,
    height: 3,
    backgroundColor: '#fff',
  },
});

export default Header;
