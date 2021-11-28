import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Image, YellowBox } from "react-native";
export default function App() {
  
  // All Functions
  var textInputValue = "<answer goes here>"; // String variable
  const handlePress = () => console.log(textInputValue); // const arrow function
  const handleChangeText = () => console.log(textInputValue); // const arrow function
  return (
    
    <View style={main.topContainer}>
      

      <View style={main.smartHomeContainer}>
        <Image
            style={main.houseImage}
            source={require("./assets/house.png")}
          /> <Text style={main.toptext}>
          SmartHome
        </Text>
      </View>
      

      <Text style={main.roomText}> Rooms </Text>

     


           <View style={main.roomContainer}> 
           <View style={main.roomIconsContainerNew}>
        <Image style={{width: 120, height: 120}} source={require("./assets/living-room.png")}/>
          <Text style={{textAlign: "center",fontWeight: "bold"}}>Livingroom</Text>
          </View>

          <View style={main.roomIconsContainerNew}>
        <Image style={{width: 120, height: 120}} source={require("./assets/bed.png")}/>
          <Text style={{textAlign: "center",fontWeight: "bold"}}>Bedroom</Text>
          </View>

          <View style={main.roomIconsContainerNew}>
        <Image style={{width: 120, height: 120}} source={require("./assets/kitchen.png")}/>
          <Text style={{textAlign: "center", fontWeight: "bold"}}>kitchen</Text>
          </View>
          </View>

          <Text style={main.roomText}> Devices </Text>

          
          <View style={main.devices}>
          <View style={main.deviceButton}>
        <View style={[main.box, { backgroundColor: "green" }]} />
        <Text style={main.deviceText}>Living Room Lamp</Text>
        <View style={main.onOfButton}>
          <Text style={main.onOfText}>ON</Text>
          <Text style={main.onOfText}>OFF</Text>
        </View>
      </View>
<View style={main.deviceButton}>
        <View style={[main.box, { backgroundColor: "red" }]} />
        <Text style={main.deviceText}>Heater</Text>
        <View style={main.onOfButton}>
          <Text style={main.onOfText}>ON</Text>
          <Text style={main.onOfText}>OFF</Text>
        </View>
      </View>
      <View style={main.deviceButton}>
        <View style={[main.box, { backgroundColor: "red" }]} />
        <Text style={main.deviceText}>TV</Text>
        <View style={main.onOfButton}>
          <Text style={main.onOfText}>ON</Text>
          <Text style={main.onOfText}>OFF</Text>
        </View>
      </View>
    </View>
    <View style={main.footer}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total devices on: 1</Text>
    </View>


<StatusBar style="auto" />
    </View>
  );
};

const main = StyleSheet.create({
    toptext: {
    fontWeight: "bold",
    color: "green",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20
  },
  


    houseImage: { 
    width: 70, height: 70
   },
  
  topContainer: {
    justifyContent: "space-between",
    top: 20,
    backgroundColor: "white",
  
  },


  
roomText:{
fontSize: 30,
fontWeight: "bold",
marginTop: 25
},

    smartHomeContainer: {
    flexDirection: "row",
    marginRight: 0,
    marginLeft: 10,
    backgroundColor: "white",
    marginTop:10,
    },
    
    
    roomIconsContainerNew:{
    backgroundColor: "#5CAACB",
    width: 150,
    height: 150,
    margin: 5,
    alignItems: "center",
    
    
    },
    roomContainer:{
      flexDirection: "row",
      backgroundColor: "white"
    },
    
    devicebody: {
backgroundColor: "yellow",
height: 100,
width: 700,
justifyContent: "center",

    },
    deviceButton: {
      flex: 1,
      flexDirection: "row",
      backgroundColor: "#EEF296",
      marginBottom: 20,
      alignItems: "center",
      paddingHorizontal: 20,
      justifyContent: "space-between",
    },
    deviceText: {
      marginLeft: 20,
      fontSize: 20,
      width: "70%",
    },
    box: {
      width: 20,
      height: 20,
    },
    onOfButton: {
      width: 60,
      height: "80%",
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    onOfText: {
      fontSize: 15,
      height: "50%",
      textAlignVertical: "center",
      color: "blue",
    },
    footer: {
      paddingHorizontal: 10,
      height: 60,
    },
  });
    