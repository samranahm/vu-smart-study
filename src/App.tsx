import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  Platform,
  // Image,
  TouchableOpacity,
} from 'react-native';

// import SplashScreen from './components/SplashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
function App() {
  // const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  // useEffect(() => {
  //   // const timer = setTimeout(() => {
  //   //   setIsLoading(false);
  //   // }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  // if (isLoading) {
  //   return <SplashScreen />;
  // }

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
              <View style={styles.iconHome}>
                <Icon name="search" size={20} color="#fff" />
                <Entypo name="dots-three-vertical" size={20} color="#fff" />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={addItem}>
                <Text style={styles.buttonText}>HANDOUTS</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={addItem}>
                <Text style={styles.buttonText}>BOOKMARK</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Body from here */}

          <View style={styles.body}>
            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>

            <Text style={styles.title}>ACC311 - Fundamentals of Auditing</Text>
            <View style={styles.downloadReadCon}>
              <Button title="Download" />
              <Button title="Read" />
            </View>
            <View style={styles.bookIcon}>
              <View style={styles.detailButton}>
                <Button title="Book Details" />
              </View>
              {/* <Icon name="menu" size={40} color="#000" /> */}
            </View>
          </View>
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
    flex: 1,
    backgroundColor: 'darkblue',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: 'blue',
    borderTopLeftRadius: Platform.OS === 'ios' ? 30 : 0,
    borderTopRightRadius: Platform.OS === 'ios' ? 30 : 0,
  },

  headerUpper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  iconHome: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    alignSelf: 'center',
    marginLeft: 15,
  },

  headingTitle: {
    fontSize: 25,
    color: '#fff',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingLeft: 25,
  },
  button:{
   marginTop:8,
    
    
   
  },
  buttonText:{
    fontSize:16,
    color:'#fff',
  },

  body: {display: 'flex', flexDirection: 'column'},

  img: {
    alignSelf: 'center',
    width: 70,
    height: 70,
    borderRadius: 100 / 2,
  },

  title: {
    fontSize: 19,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
    padding: 20,
  },

  downloadReadCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    gap: 80,
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
