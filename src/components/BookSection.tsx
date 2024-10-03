import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookSection = ({title}) => {
  const [iconColor, setIconColor] = useState('#fff');
  const iconPress = () => {
    setIconColor(prevColor => (prevColor === '#fff' ? 'red' : '#fff'));
  };
  return (
    <View style={styles.bookSection}>
      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>
      <View style={styles.downloadReadCon}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DOWNLOAD</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>READ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bookIcon}>
        <View style={styles.detailButton}>
          <Button title="Book Details" color={'#1a70d5'} />
        </View>
        <View style={styles.customIcon}>
          <TouchableOpacity onPress={iconPress}>
            <Icon name="bookmark" size={21} color={iconColor} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookSection: {
    marginBottom: 20, // Add some spacing between sections
  },
  title: {
    fontSize: 17,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 15,
  },
  downloadReadCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    marginTop: 20,
  },
  bookIcon: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  detailButton: {
    flex: 1,
    marginRight: 10,
  },
  customIcon: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: '#123457',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});

export default BookSection;
