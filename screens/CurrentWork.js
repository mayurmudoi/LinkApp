//still working not completed 

import React , {useState} from 'react';
import styles from '../assets/style/profileStyles';
import { TouchableOpacity, useColorScheme, Image, Text, View , StatusBar, Linking, ScrollView, StyleSheet, TextInput} from 'react-native';
import ProfileApp from './ProfileApp';

export default function CurrentWork() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const buttonbackgroundcolor = isDarkMode 
  ? styles.buttonDarkBackground 
  : styles.buttonLightBackground;
  
  const backgroundColor = isDarkMode 
  ? styles.darkBackground 
  : styles.lightBackground;

  const iconImage = isDarkMode
  ? require('../assets/images/darkmode.png')
  : require('../assets/images/lightmode.png');

  const [isPreviewClosed, setIsPreviewClosed] = useState(true);
  const previewIconImage = isDarkMode
    ? isPreviewClosed
      ? require('../assets/images/previewlightmodeClosed.png')
      : require('../assets/images/previewlightmode.png')
    : isPreviewClosed
    ? require('../assets/images/previewdarkmodeClosed.png')
    : require('../assets/images/previewdarkmode.png');

  const handlePreviewButtonPress = () => {
    setIsProfileAppOpen(!isProfileAppOpen);
    setIsPreviewClosed(!isPreviewClosed);
  };

  const [isProfileAppOpen, setIsProfileAppOpen] = useState(false);

  const [username, setUsername] = useState('')
  const [userBio, setUserBio] = useState('')
  const [userLinks, setUserLinks] = useState('')
  const [userTitle, setUserTitle] = useState('')

  return (
    <View style={[styles.container, backgroundColor]}>
      <ScrollView>
        <View style={styles.modeButton}>
          <TouchableOpacity onPress={handleToggleDarkMode} style={[styles.iconButton, buttonbackgroundcolor]}>
            <Image source={iconImage} style={styles.icon}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviewButtonPress} style={[styles.iconButton, buttonbackgroundcolor]}>
            <Image source={previewIconImage} style={styles.previewIcon} />
          </TouchableOpacity>
        </View>
        {/* {isProfileAppOpen && (
          <ProfileApp isDarkMode={isDarkMode} handleToggleDarkMode={handleToggleDarkMode} />
        )}  */}
        <View style={styles.container}>
          <View style={styles.profileBox}>
            <Text style={styles.nameText}>Profile</Text>
            <Text style={styles.appSubText}>Customize your LinkLibrary profile.</Text> 
          </View>
        </View>
        <View style={styles.editBox}>
          <View style={styles.innerEditBox}>
            <Text style={styles.editBoxHeader}>Name</Text>
            <TextInput
              value={username}
              style={styles.textInputStyle}
              placeholder="+ Your name"
              onChangeText={(username) => {
                setUsername(username)
              }}
            />
          </View>
          <View style={styles.innerEditBox}>
            <Text style={styles.editBoxHeader}>Bio</Text>
            <TextInput
              value={userBio}
              style={styles.textInputStyle}
              placeholder="+ Write bio"
              onChangeText={(userBio) => {
                setUserBio(userBio)
              }}
            />
          </View>
          <View  style={styles.innerEditBox}>
            <Text style={styles.editBoxHeader}>Link</Text>
            <View style={{alignItems:'center'}}>
              <TouchableOpacity style={styles.linkButton}>
                <Text style={styles.buttonText}>+ Add Link</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.saveButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};