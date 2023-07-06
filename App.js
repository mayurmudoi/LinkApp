import React from 'react';
import { TouchableOpacity,  StyleSheet, Image, Text, View , StatusBar, Linking} from 'react-native';

export default function App() {

  const handleLinkPress1 = () => {
    Linking.openURL('https://www.instagram.com/mayurmudoi'); 
  };
  const handleLinkPress2 = () => {
    Linking.openURL('https://www.linkedin.com/in/mayurmudoi/');
  };
  const handleLinkPress3 = () => {
    Linking.openURL('https://dribbble.com/mayurmudoi'); 
  };
  const handleLinkPress4 = () => {
    Linking.openURL('https://github.com/mayurmudoi'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.headItems}>
        <Image 
          source={require('./assets/images/profile.jpeg')}
          style={styles.profileImage}/>
        <Text style={styles.nameText}>
          MAYUR MUDOI
        </Text>
        <Text style={styles.bioText}>
          Learning React Native!
        </Text>
      </View>
      <View style={styles.bottomItems}>
        <TouchableOpacity onPress={handleLinkPress1} style={styles.button}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkPress2} style={styles.button}>
          <Text style={styles.buttonText}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkPress3} style={styles.button}>
          <Text style={styles.buttonText}>Dribbble</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkPress4} style={styles.button}>
          <Text style={styles.buttonText}>Github</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headItems:{
    margin:20, 
    justifyContent:'center',
    alignItems:'center'
  },
  profileImage:{
    height:100,
    width:100,
    borderRadius:50,
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
  nameText:{
    fontSize:30, 
    fontWeight:500,
    marginVertical:5
  },
  bioText:{
    fontSize:18,
    fontWeight:300
  },
  bottomItems:{
    flex:1,
    alignItems:'center',
    marginTop:60
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
  },
  buttonText:{
    fontSize:15,
    fontWeight:400
  }
});
