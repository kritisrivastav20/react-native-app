/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useState, Component } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  DrawerLayoutAndroid,
  Linking
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { StackNavigator } from 'react-navigation';
import {Home} from './home';


// export default class App extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     title: 'Hi! How are you?',
  //     list: [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
  //   }
  //   this.clickMethod = this.clickMethod.bind(this)
  // }

  // clickMethod(value) {
  //   if(!this.state.title.includes(value)) {
  //   this.setState({
  //     title: this.state.title + ' ' + value
  //   })
  // } else {
  //      this.setState({
  //     title: 'Hi! How are you?'
  //   })
  // }
  // }
 const App = () =>{
    console.log('render called')
    // const { navigate } = this.props.navigation;
    
    const renderItem = ({ item }) => (
      <View style={styles.buttonStyle}>
      <Text>{item}</Text>
  </View>
  );

  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

//   const SimpleApp = StackNavigator({
//   Home: { screen: Home },
// });

  // const goToHome =() => {
  //  navigation.navigate(Home);
  // }

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <TouchableOpacity onPress={() => Linking.openURL('Home')}>
        <Text>Some text</Text>
      </TouchableOpacity>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
//   <View style = {{flex: 1}}> 
//   <View style = {[styles.sectionContainer, styles.container]}>
//     <Text style = {styles.text}>
//     {this.state.title}
//     </Text>
//     <Button 
//     onPress = {() => this.clickMethod('Everythings good')} 
//     title="Press Me"
//     color = "red"
//     style = {styles.buttonStyle}
//     >
//     </Button>
// </View>
// <View style = {{flex: 2}}>
//     <FlatList
//        data={this.state.list}
//        renderItem={renderItem}
//         // keyExtractor={item => item.id}
//     ></FlatList>
// </View>
// <View style = {[styles.sectionContainer, styles.container]}>
//    <TouchableOpacity
//         style={{color: 'red', backgroundColor: 'green', padding: 16}}
//         onPress={() => this.clickMethod('Everythings good')}
//       >
//         <Text>Opacity</Text>
//       </TouchableOpacity>
// </View>
// </View>
   <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
          <Image
        style={styles.tinyLogo}
        source={require('./assets/taskspur-icon.png')}
      />
      </View>
    </DrawerLayoutAndroid>
  );
  }

// const App = StackNavigator({
//    Home: { screen: HomeScreen },
//   About: { screen: Home },
// });
export default App;


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    color: 'green',
     fontWeight: '700',
     paddingRight: 10,
  },
  container: {
    backgroundColor: 'yellow'
  },
  buttonStyle: {
    color: 'red',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  }
});