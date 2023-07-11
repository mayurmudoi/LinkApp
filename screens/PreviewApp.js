import React , {useState, useEffect} from 'react';
import styles from '../assets/style/profileStyles';
import { TouchableOpacity, useColorScheme, TextInput, Image, Text, View , StatusBar, Linking, ScrollView, StyleSheet} from 'react-native';
import ProfileApp from './ProfileApp';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function PreviewApp() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      const storedBio = await AsyncStorage.getItem('bio');
      const storedLinks = await AsyncStorage.getItem('links');

      if (storedName !== null) {
        setName(storedName);
      }
      if (storedBio !== null) {
        setBio(storedBio);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('bio', bio);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleBioChange = (text) => {
    setBio(text);
  };

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
        {isProfileAppOpen && (
          <ProfileApp name={name} bio={bio} isDarkMode={isDarkMode} handleToggleDarkMode={handleToggleDarkMode} />
        )} 
        {!isProfileAppOpen && (
          <View style={styles.container}>
            <View style={styles.profileBox}>
              <Text style={styles.nameText}>Profile</Text>
              <Text style={styles.appSubText}>Customize your LinkLibrary profile.</Text> 
            </View>
            <View style={styles.editBox}>
              <View style={styles.innerEditBox}>
                <Text style={styles.editBoxHeader}>Name</Text>
                <TextInput
                  value={name}
                  style={styles.textInputStyle}
                  placeholder="+ Your name"
                  onChangeText={handleNameChange}
                />
              </View>
              <View style={styles.innerEditBox}>
                <Text style={styles.editBoxHeader}>Bio</Text>
                <TextInput
                  value={bio}
                  style={styles.textInputStyle}
                  placeholder="+ Write bio"
                  onChangeText={handleBioChange}
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
              <TouchableOpacity onPress={saveData}style={styles.button}>
                <Text style={styles.buttonText}>Save Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};