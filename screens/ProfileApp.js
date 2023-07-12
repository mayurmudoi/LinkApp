import React , {useState} from 'react';
import styles from '../assets/style/profileStyles';
import { TouchableOpacity, useColorScheme, Image, Text, View , StatusBar, Linking, ScrollView} from 'react-native';

const ProfileApp = ({ isDarkMode, name, bio }) => {
  
  const buttonbackgroundcolor = isDarkMode 
  ? styles.buttonLightBackground 
  : styles.buttonDarkBackground;
  
  const backgroundColor = isDarkMode 
  ? styles.lightBackground 
  : styles.darkBackground;

  const textColor = isDarkMode 
  ? styles.darkText
  : styles.lightText;

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
            {name}
          </Text>
          <View style={styles.biobox}><Text style={[styles.bioText, textColor]}>
            {bio}
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
