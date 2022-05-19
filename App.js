import React from 'react';
import { Text, View, ImageBackground, Button, StyleSheet, CheckBox} from 'react-native';
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

      if (view === "mapPicker")
      return (
        <View style={{width: "100vw", height: "100vh" }}>
          <ImageBackground source={require("./assets/img/background-mc2.jpg")} style={{width: "100%", height: "100%"}}>
            <TextInput style={styles.input1}
                       placeholder="Enter number of kilometers"
                       placeholderTextColor="#FFF" 
                       type='off'/>
            <View style={styles.buttonContainer3}>
              <Button onPress={() => this.setState({ "view": "mapAccept" })} 
                      title="Submit" />
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

      if (view === "mapAccept")
      return (
        <View style={{width: "100vw", height: "100vh "}}>
            <div style="width: 100%">
              <iframe width="100%"
                      height="600" 
                      frameborder="0" 
                      scrolling="no" 
                      marginheight="0" 
                      marginwidth="0" 
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                      <a href="https://www.gps.ie/wearable-gps/">wearable trackers</a>
              </iframe>
            </div>
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
              <Button onPress={() => this.setState({ "view": "option" })} title="Submit" />
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
              <Button onPress={() => this.setState({ "view": "option" })} title="Submit" />
            </View>   
          </ImageBackground>
        </View>
      )

      if (view === "option")
      return (
        <View style={{width: "100vw", height: "100vh "}}>
          <ImageBackground source={require("./assets/img/background-mc2.jpg")} style={{width: "100%", height: "100%"}}>
            <View style={styles.container}>
              <View style={styles.checkboxContainer}>
                <Text style={styles.label}>     Pick walking mode!</Text>
                <Text style={styles.label}>           Free roam</Text>
                <CheckBox style={styles.checkbox}/>
                <Text style={styles.label}>           Dog walking</Text>
                <CheckBox style={styles.checkbox}/>
                <Text style={styles.label}>         Promoted content</Text>
                <CheckBox style={styles.checkbox}/>
                <Text style={styles.label}>           Tourist mode</Text>
                <CheckBox style={styles.checkbox}/>
                <Text style={styles.label}>             Jogging</Text>
                <CheckBox style={styles.checkbox}/>
                <Text style={styles.label}>             Custom</Text>
                <CheckBox style={styles.checkbox}/>
                <View style={styles.submitButton2}>
                  <Button onPress={() => this.setState({ "view": "mapPicker" })} title="Submit" />
                </View>  
              </View>
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
  buttonContainer3 : {
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
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "column",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  submitButton2 : {
    position:'absolute',
    top: "100%",
    left : "30%"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
