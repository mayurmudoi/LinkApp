// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity,  StyleSheet, Image, Text, View , StatusBar, Linking} from 'react-native';

export default function App() {
  const handleLinkPress = () => {
    Linking.openURL('https://www.instagram.com/mayurmudoi'); // Open the provided URL
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('./assets/images/profile.jpeg')} style={styles.profileImage}/>
      <View style={{margin:20, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30, fontWeight:500}}>MAYUR MUDOI</Text>
        <Text style={{fontSize:20,fontWeight:500}}>21 . TU</Text>
      </View>
      </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <TouchableOpacity onPress={handleLinkPress} style={styles.button}><Text>Instagram</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>LinkedIn</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Dribble</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Github</Text></TouchableOpacity>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE7CE',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  profileImage:{
    height:100,
    width:100,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
  button:{
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width:'80%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
  }
});
