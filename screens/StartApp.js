import React from 'react';
import styles from '../assets/style/profileStyles';
import { TouchableOpacity, Text, View , StatusBar} from 'react-native';

export default function StartApp({navigation}) {

const handleStartButtonPress = () => {
    navigation.navigate('PreviewApp');
};
    
  return (
    <View style={styles.appContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.appNameText}>LinkLibrary</Text>
        <Text style={styles.appSubText}>One Link to all your socials.</Text>
      <TouchableOpacity onPress={handleStartButtonPress} style={styles.appButton}>
        <Text style={styles.appButtonText}>Get Started</Text>
      </TouchableOpacity>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
};