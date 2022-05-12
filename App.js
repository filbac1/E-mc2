import React from 'react';
import { Text, View, ImageBackground, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-web';


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
              <Button onPress={() => this.setState({ "view": "login" })} 
                      title="Log in" />
            </View>
            <View style={styles.buttonContainer2}>
              <Button onPress={() => this.setState({ "view": "signup" })} 
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

    if (view === "login")
      return (
        <View style={{width: "100vw", height: "100vh "}}>
          <ImageBackground source={require("./assets/img/background-mc2.jpg")} style={{width: "100%", height: "100%"}}>
            <TextInput style={styles.input1}
                       placeholder="Enter E-mail"
                       placeholderTextColor="#FFF" 
                       type='email'
            />
            <TextInput style={styles.input2}
                       placeholder="Enter password"
                       placeholderTextColor="#FFF" 
                       secureTextEntry
            />
            <View style={styles.backButton}>
              <Button onPress={() => this.setState({ "view": "main" })} title="Back" />
            </View>
            <View style={styles.submitButton}>
              <Button onPress={() => this.setState({ "view": "other" })} title="Submit" />
            </View>
          </ImageBackground>
        </View>
      )
    if (view === "signup")
      return (
        <View style={{width: "100vw", height: "100vh "}}>
          <ImageBackground source={require("./assets/img/background-mc2.jpg")} style={{width: "100%", height: "100%"}}>
            <TextInput style={styles.input1}
                       placeholder="Enter name"
                       placeholderTextColor="#FFF" 
            />
            <TextInput style={styles.input2}
                       placeholder="Enter surname"
                       placeholderTextColor="#FFF" 
            />
            <TextInput style={styles.input3}
                       placeholder="Enter E-mail"
                       placeholderTextColor="#FFF" 
                       type='email'
            />
            <TextInput style={styles.input4}
                       placeholder="Enter password"
                       placeholderTextColor="#FFF" 
                       secureTextEntry
            />
            <View style={styles.backButton}>
              <Button onPress={() => this.setState({ "view": "main" })} title="Back" />
            </View>
            <View style={styles.submitButton}>
              <Button onPress={() => this.setState({ "view": "other" })} title="Submit" />
            </View>   
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
  },
  input1 : {
    position: 'absolute',
    left : "25%",
    top : "50%",
    height: 40,
    width: '50%',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    color: 'white'
  },
  input2 : {
    position: 'absolute',
    left : "25%",
    top : "60%",
    height: 40,
    width:'50%',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius:20,
    borderColor:'white',
    borderWidth:2,
    padding:10,
    margin: 10,
    color: 'white'
  },
  input3 : {
    position: 'absolute',
    left : "25%",
    top : "70%",
    height: 40,
    width: '50%',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    margin: 10,
    color: 'white'
  },
  input4 : {
    position: 'absolute',
    left : "25%",
    top : "80%",
    height: 40,
    width:'50%',
    justifyContent:'center',
    textAlign: 'center',
    borderRadius:20,
    borderColor:'white',
    borderWidth:2,
    padding:10,
    margin: 10,
    color: 'white'
  },
  backButton : {
    position:'absolute',
    bottom: "5%",
    left : "38%"
  },
  submitButton : {
    position:'absolute',
    bottom: "5%",
    left : "52%"
  }
});


export default App;
