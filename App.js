import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React from 'react';

export default class App extends React.Component {

  state = {
    data: {
    }
  }

  constructor(props) {
    super(props);
      this.state = {
          fontsLoaded: false
      }
  }

  async useFonts() {
    await Font.loadAsync({
      'Inter': require('./assets/fonts/Inter-Regular.ttf'),
      'PoppinsBold': require('./assets/fonts/PoppinsBold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  // getProperties = () => {
  //   fetch('https://integrations.dormy.ph/api/v1/listings', {method: 'GET'})
  //     .then(response => response.json())
  //       .then((responseJson) => {
  //         console.log(responseJson);
  //         this.setState({
  //           data: responseJson
  //         })
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  // }

  componentDidMount = () => {
    //this.getProperties()
    this.useFonts();
  }

  AppHeader() {
    return(
      <View style={mainStyle.container}>
        <Text>header works!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  AppFooter() {
    return(
      <View style={mainStyle.container}>
        <Text>footer works!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  AppNavbar() {
    return(
      <View style={mainStyle.container}>
        <Text>navbar works!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  AppCard() {
    return(
      <View style={mainStyle.container}>
        <Text>card works!</Text>
        <StatusBar style="auto" />
      </View>
    )
  }

  AppMain() {
    return (
      <View style={mainStyle.container}>
          <AppHeader />
          <AppCard />
          <AppFooter />
          <AppNavbar />
      </View>
    )
  }

  render() {
    return (
      
      <View style={mainStyle.container}>
        <Text style={{ fontSize: 21 }}>Default Font</Text>
        <Text style={{ fontFamily: 'PoppinsBold', fontSize: 21 }}>Default Font</Text>
      </View>
    )
  }
}

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'PoppinsBold'
  },

  card: {

  },

  navbar: {

  },
  
  header: {

  },
  
  footer: {

  },
});

