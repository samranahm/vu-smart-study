import React, { useState } from 'react';
import { View, Button, StyleSheet, Animated } from 'react-native';
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
  const [loading, setLoading] = useState(true);
  const progress = new Animated.Value(0); // Loading line progress

  // Start loading animation (can be used based on actual load progress)
  const startLoadingAnimation = (progressValue: number) => {
    Animated.timing(progress, {
      toValue: progressValue, // Use actual loading progress here
      duration: 100, // Small duration to smoothly update the bar
      useNativeDriver: false,
    }).start();
  };

  const resetLoadingAnimation = () => {
    progress.setValue(0); // Reset the progress
  };

  return (
    <View style={styles.container}>
      {/* Horizontal loading line */}
      {loading && (
        <View style={{ width: '100%', height: 5, backgroundColor: 'transparent' }}>
          <Animated.View style={{
            height: '100%',
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'], // Animate width
            }),
            backgroundColor: 'blue', // Change the color of the loading line
          }} />
        </View>
      )}

      <Pdf
        trustAllCerts={false}
        source={{ uri: pdfUrl, cache: true }} // Load the PDF from the provided URL
        style={styles.pdf} // Apply styles to the PDF component
        onLoadProgress={(progressValue) => {
          // This function gives the progress as a decimal (e.g., 0.5 = 50%)
          startLoadingAnimation(progressValue); // Update loading animation
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
          setLoading(false);
          resetLoadingAnimation(); // Reset after loading completes
        }}
        onError={(error) => {
          console.error(error);
          setLoading(false);
          resetLoadingAnimation(); // Reset on error
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
