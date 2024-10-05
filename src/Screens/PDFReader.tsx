import React from 'react';
import { View, Text, Button } from 'react-native';

const PDFReader: React.FC<{ pdfUrl: string; onClose: () => void }> = ({ pdfUrl, onClose }) => {
  return (
    <View>
      <Text>Reading PDF from: {pdfUrl}</Text>
      <Button title="Close" onPress={onClose} />
    </View>
  );
};

export default PDFReader;
