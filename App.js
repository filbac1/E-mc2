import React from 'react';
import { render } from 'react-dom';
import { Text, View, ImageBackground, Button, StyleSheet } from 'react-native';

class App extends React.Component
{
  render()
  {
    let view = (this.state || {}).view || "main";

    if (view === "main")
      return (
        <View style={{width: "100vw", height: "100vh" }}>
          <ImageBackground source={require("./assets/img/background-mc2.jpg")} style={{width: "100%", height: "100%"}}>
            <Text style={styles.titleText}>2mc = E</Text>
            <View style={styles.buttonContainer1}>
              <Button onPress={() => this.setState({ "view": "other" })} 
                      title="Log in" />
            </View>
            <View style={styles.buttonContainer2}>
              <Button onPress={() => this.setState({ "view": "other" })} 
                      title="Sign up" />
            </View>
          </ImageBackground>
        </View> 
      )

    if (view === "other")
      return (
        <View style={{width: "100vw", height: "100vh "}}>
          <ImageBackground source={require("./assets/img/background-mc2.jpg")} style={{width: "100%", height: "100%"}}>
            <Text>Nesto</Text>
            <Button onPress={() => this.setState({ "view": "main" })} title="natrag" />
          </ImageBackground>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  buttonContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom : "30%",
    left : "45%",
  },
  buttonContainer2 : {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom : "20%",
    left : "45%",
  },
  titleText : {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top : "20%",
    left : "32%",
    fontSize: 50,
    fontWeight: "bold",
  }
});


export default App;
