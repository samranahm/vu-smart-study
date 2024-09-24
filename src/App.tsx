import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, Button, View } from 'react-native';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to My Simple App!</Text>
        </View>
        <View style={styles.body}>
          <Button title="Add Item" onPress={addItem} />
          <Text style={styles.listTitle}>Items:</Text>
          {items.map((item, index) => (
            <Text key={index} style={styles.item}>
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  header: {
    padding: 25,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  body: {
    padding: 20,
  },
  listTitle: {
    fontSize: 20,
    marginVertical: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default App;
