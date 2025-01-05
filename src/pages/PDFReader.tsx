import React, { useState } from 'react';
import { View, Button, StyleSheet, Animated } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Pdf from 'react-native-pdf'; 
import { RootStackParamList } from '../App';

type PDFReaderProps = {
  navigation: StackNavigationProp<RootStackParamList, 'PDF'>;
  route: RouteProp<RootStackParamList, 'PDF'>; 
};

const PDFReader: React.FC<PDFReaderProps> = ({ route, navigation }) => {
  const { pdfUrl } = route.params;
  const [loading, setLoading] = useState(true);
  const progress = new Animated.Value(0);

  
  const startLoadingAnimation = (progressValue: number) => {
    Animated.timing(progress, {
      toValue: progressValue,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const resetLoadingAnimation = () => {
    progress.setValue(0);
  };

  return (
    <View style={styles.container}>

      {loading && (
        <View style={{ width: '100%', height: 5, backgroundColor: 'transparent' }}>
          <Animated.View style={{
            height: '100%',
            width: progress.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            backgroundColor: 'blue'
          }} />
        </View>
      )}

      <Pdf
        trustAllCerts={false}
        source={{ uri: pdfUrl, cache: true }}
        style={styles.pdf}
        onLoadProgress={(progressValue) => {
        
          startLoadingAnimation(progressValue);
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
          setLoading(false);
          resetLoadingAnimation(); 
        }}
        onError={(error) => {
          console.error(error);
          setLoading(false);
          resetLoadingAnimation();
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
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default PDFReader;
