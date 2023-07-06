import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modeButton:{
    padding:10, 
    alignItems:'flex-end',
    flexDirection:'row',
    justifyContent:'flex-end',
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
    fontWeight:400
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
});

export default styles;