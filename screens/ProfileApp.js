import React , {useState} from 'react';
import styles from '../assets/style/profileStyles';
import { TouchableOpacity, useColorScheme, Image, Text, View , StatusBar, Linking, ScrollView} from 'react-native';

const ProfileApp = ({ isDarkMode }) => {
  
  const buttonbackgroundcolor = isDarkMode 
  ? styles.buttonDarkBackground 
  : styles.buttonLightBackground;
  
  const backgroundColor = isDarkMode 
  ? styles.darkBackground 
  : styles.lightBackground;
  
  const textColor = isDarkMode 
  ? styles.lightText 
  : styles.darkText;

  const iconImage = isDarkMode
  ? require('../assets/images/darkmode.png')
  : require('../assets/images/lightmode.png');

  const handleLinkPress1 = () => {
    Linking.openURL('https://www.instagram.com/mayur.mudoi'); 
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
      <ScrollView>
        <View style={styles.headItems}>
          <Image 
            source={require('../assets/images/profile.jpeg')}
            style={styles.profileImage}/>
          <Text style={[styles.nameText, textColor]}>
            MAYUR MUDOI
          </Text>
          <View style={styles.biobox}><Text style={[styles.bioText, textColor]}>
            Learning React Native!
          </Text></View>
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
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};
export default ProfileApp; 