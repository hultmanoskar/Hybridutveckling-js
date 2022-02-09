import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, View, Button, Alert, TouchableOpacity } from "react-native";




const SignUpTextInput = () => {
  const [name, onChangeText1] = React.useState("Name:");
  const [email, onChangeText2] = React.useState("Email:");
  const [password, onChangeText3] = React.useState("Password:");
  
 
  

  return (
   
    <View style={main.topTopContainer}>
   <SafeAreaView style={main.topContainer}> 
   <Text style={main.topText}> Welcome! </Text> 
    <Text style={main.topText1}> Join the community down below </Text>
    <View style={main.inputBox}>
      <TextInput
        style={main.textBox}
        onChangeText={onChangeText1}
        value={name}
      />
      </View>

      <View style={main.inputBox}>
      <TextInput
        style={main.textBox}
        onChangeText={onChangeText2}
        value={email} />
        </View>

        <View style={main.inputBox}>
        <TextInput
        style={main.textBox}
        onChangeText={onChangeText3}
        value={password} />
          </View>

<TouchableOpacity style={main.signUpButton}>
<Button color= "#c7e295"  
        title="Sign Up"
        onPress={() => Alert.alert('You have submitted to our site!')}
        onPress={() => console.log ("Submit button was pressed")} />
        </TouchableOpacity>
     
     
    </SafeAreaView>
    </View>


  );
};

const main = StyleSheet.create({
  textBox: {
    flex: 1,
    color: "white",
    },

  topContainer: {
    flex: 1,
    alignItems: "center",
    margin: 50
      
  },
  topText: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center",
    
  },
  topText1:{
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 30
  },
  image: {
    flex:1, 
    justifyContent: "center",
    alignItems: "center"
  },
  topTopContainer:{
    flex: 1,
    
  },
  signUpButton: {
    width: 230,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
    backgroundColor: "#c7e295",

  },
  inputBox: {
    width: 230,
      height: 50,
      backgroundColor: 'black',
      padding: 10,
      fontSize: 14,
      fontWeight: 'bold',
      borderRadius: 25,
      alignItems: "center",
      margin: 10

  }
  

  
  
});

export default SignUpTextInput;
    