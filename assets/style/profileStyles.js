import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //styles for Profile App
  container: {
    flex: 1,
  },
  modeButton:{
    padding:10, 
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'flex-end',
    // backgroundColor:'lightblue'
  },
  lightApp: {
    backgroundColor: '#ffffff',
  },
  darkApp: {
    backgroundColor: '#000000',
  },
  iconButton: {
    marginLeft: 10,
    borderRadius: 5,
    width: 35,
    height: 35,
    justifyContent:'center',
    alignItems:'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  previewIcon: {
    width: 27,
    height: 27,
  },
  headItems:{
    marginRight:20,
    marginLeft:20,
    justifyContent:'center',
    alignItems:'center',
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
    letterSpacing:2,
    marginVertical:5,
  },
  biobox:{
    height:75,
    width:'80%',
    alignItems:'center'
  },
  bioText:{
    fontSize:18,
    fontWeight:300,
  },
  bottomItems:{
    flex:1,
    alignItems:'center',
    marginRight:20,
    marginLeft:20,
  },

  button:{
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width:'80%',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  buttonText:{
    fontSize:15,
    letterSpacing:2,
    fontWeight:400,
  },
  buttonDarkBackground: {
    borderColor:'lightgray',

  },
  buttonLightBackground: {
    borderColor:'#111',

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
  // styles for StartApp
  appContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Align content to the bottom
    alignItems: 'center', // Align content to the left
    // margin: 20,
    backgroundColor:'#111'
  },
  textContainer:{
    marginBottom:100,
    width:'100%',    
    alignItems:'center'
  },
  appNameText:{
    fontSize:40, 
    fontWeight:500,
    letterSpacing:4,
    marginVertical:5,
    color: '#f5f5f5',
  },
  appSubText:{
    fontSize:15,
    fontWeight:300,
    letterSpacing:2,
    color: '#f5f5f5',
  },
  appButton:{
    padding: 10,
    borderRadius: 5,
    width:'80%',
    height:46,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'lightgray',
    margin:30,
  },
  appButtonText:{
    fontSize:20,
    letterSpacing:2,
    fontWeight:500,
    color: '#f5f5f5',
  },
  // styles from CurrentWork
  profileBox:{ 
  margin:20, 
  justifyContent:'center', 
  alignItems:'center'
},
  editBox:{ 
  margin:20, 
  padding:10,
  borderRadius:10,
  borderColor:'lightgray'
},
  innerEditBox:{
  borderRadius:10,
  borderWidth:1,
  margin:5, 
  borderColor:'black'
},
  textInputStyle:{ 
  fontSize: 15, 
  color: 'black' , 
  marginLeft:10, 
  marginBottom:2
},
  linkButton:{
  padding: 10,
  borderRadius: 20,
  marginTop: 10,
  marginBottom: 15,
  width:'80%',
  height:40,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderColor:'lightgray'
},
  editBoxHeader:{
  fontSize:17, 
  fontWeight:500, 
  letterSpacing:1, 
  marginLeft:10, 
  marginTop:5,
},
  saveButton:{ 
  alignItems:'center',
  marginTop:30
},

modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  alignItems: 'center',
},
modalHeader: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
modalTextInput: {
  width: '100%',
  height: 40,
  borderWidth: 1,
  borderColor: 'gray',
  marginBottom: 10,
  paddingHorizontal: 10,
},
modalButton: {
  backgroundColor: 'lightblue',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginBottom: 10,
},
modalButtonText: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
});

export default styles;