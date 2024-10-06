import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Pdf from 'react-native-pdf'; 
import { RootStackParamList } from '../App'; // Import the RootStackParamList type

type PDFReaderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PDF'>;
  route: RouteProp<RootStackParamList, 'PDF'>; // Define the expected route prop
};

const PDFReader: React.FC<PDFReaderProps> = ({ route, navigation }) => {
  const { pdfUrl } = route.params; // Access pdfUrl from the route parameters

  return (
    <View style={styles.container}>
      
      <Pdf
      trustAllCerts={false}
        source={{ uri: pdfUrl, cache: true }} // Load the PDF from the provided URL
        style={styles.pdf} // Apply styles to the PDF component
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.error(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
      />
      <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdf: {
    flex: 1, // Make the PDF component fill the available space
    width: '100%',
    height: '100%',
  },
});

export default PDFReader;
