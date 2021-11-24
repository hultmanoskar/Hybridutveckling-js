import { StatusBar } from 'expo-status-bar';
import { builtinModules } from 'module';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';

export default function App() {
  var textInputValue = "<answer goes here>"; // String variable
  const handlePress = () => console.log(textInputValue); // const arrow function
  
  return (
   <View style={main.container}>
      
      <Text style={{ fontWeight: "bold", fontSize: 100, marginTop:10, backgroundColor:"lightblue", }}>Hello World! </Text>
      <Text style={{fontSize:20, fontWeight: 'bold', backgroundColor:"lightblue"}}>First React Native app </Text>
      <Text style={{backgroundColor: "lightblue", marginTop: 10}}>"This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.</Text>

<Text style={{fontWeight: "bold", fontSize: 20, marginTop: 50}} >What would you like to get out of this course? </Text>
<Text style={{backgroundColor: "grey"}}> To get much better than this app-example :) </Text>
<Text style={{fontWeight: "bold", fontSize: 20, marginTop:200}} >An emoji describing how you are feeling about the course: </Text>
      
<Image
        style={{ width: 200, height: 200, }}
        source={{
          uri: "https://www.meme-arsenal.com/memes/4866b1d397aa1a22a2254d5a35801bfd.jpg",
        }}
      />
      

      
      <Button  
      
      title="Submit" onPress={() => console.log("Button tapped")} />
      
      <StatusBar style="auto" />
    </View>


  );
}

const main = StyleSheet.create({
  container: {
  
  },
 
  },

);
