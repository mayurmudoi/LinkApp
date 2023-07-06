import React , {useState} from 'react';
import { TouchableOpacity, useColorScheme, StyleSheet, Image, Text, View , StatusBar, Linking} from 'react-native';

export default function App() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const buttonbackgroundcolor = isDarkMode ? styles.buttonDarkBackground : styles.buttonLightBackground;
  const backgroundColor = isDarkMode ? styles.darkBackground : styles.lightBackground;
  const textColor = isDarkMode ? styles.lightText : styles.darkText;
  

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
    <View style={[styles.container, backgroundColor]}>
      <View style={styles.headItems}>
        <Image 
          source={require('./assets/images/profile.jpeg')}
          style={styles.profileImage}/>
        <Text style={[styles.nameText, textColor]}>
          MAYUR MUDOI
        </Text>
        <Text style={[styles.bioText, textColor]}>
          Learning React Native!
        </Text>
      </View>
      <View style={styles.bottomItems}>
        <TouchableOpacity onPress={handleLinkPress1} style={[styles.button, buttonbackgroundcolor]}>
          <Text style={[styles.buttonText, textColor]}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkPress2} style={[styles.button, buttonbackgroundcolor]}>
          <Text style={[styles.buttonText, textColor]}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkPress3} style={[styles.button, buttonbackgroundcolor]}>
          <Text style={[styles.buttonText, textColor]}>Dribbble</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkPress4} style={[styles.button, buttonbackgroundcolor]}>
          <Text style={[styles.buttonText, textColor]}>Github</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleToggleDarkMode} style={[styles.button, buttonbackgroundcolor]}>
          <Text style={[styles.buttonText, textColor]}>Toggle Dark Mode</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  buttonDarkBackground: {
    borderColor:'lightgray',
    borderWidth:1
  },
  buttonLightBackground: {
    borderColor:'#111',
    borderWidth:1
  },
  darkBackground: {
    backgroundColor: '#111',
  },
  lightBackground: {
    backgroundColor: '#f5f5f5',
  },
  darkText: {
    color: '#111',
  },
  lightText: {
    color: '#f5f5f5',
  },
});
