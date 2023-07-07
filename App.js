// import React from 'react';
// import ProfileApp from '../PortfolioApp/screrns/ProfileApp';
// const App = () => {
//   return <ProfileApp/>
// }

// export default App;

import React , {useState} from 'react';
import styles from './assets/style/profileStyles';
import { TouchableOpacity, useColorScheme, Image, Text, View , StatusBar, Linking, ScrollView, StyleSheet} from 'react-native';
import ProfileApp from './screens/ProfileApp';

export default function App() {
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
  ? require('./assets/images/darkmode.png')
  : require('./assets/images/lightmode.png');

  const [isPreviewClosed, setIsPreviewClosed] = useState(true);
  const previewIconImage = isDarkMode
    ? isPreviewClosed
      ? require('./assets/images/previewlightmodeClosed.png')
      : require('./assets/images/previewlightmode.png')
    : isPreviewClosed
    ? require('./assets/images/previewdarkmodeClosed.png')
    : require('./assets/images/previewdarkmode.png');

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
          <ProfileApp isDarkMode={isDarkMode} handleToggleDarkMode={handleToggleDarkMode} />
        )} 
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
};