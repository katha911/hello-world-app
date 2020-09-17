import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, TextInput, View ,Button,Image } from 'react-native';
import MyButton from './componensts/MyButton.js'
export default function App() {
  const [ input , setInput ] = useState('')
  const [ color , SetColor ] =useState('red')
  return (
    <View style={styles.container}>
  <Image 
  source ={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png' }}
    style={styles.logo}
    />
    <Text style = {styles.title} >Hello world</Text>
    <TextInput 
    value ={input}
    onChangeText={(text => {setInput(text)} )}
    placeholder ="input here" 
    style={styles.input} 
    />
    <Text style={{fontSize: 18 , marginTop:20, color: color}}>
      {input}
      </Text>
    <View style={styles.buttonLayout}>
       <MyButton title="Red" color="red" onChangeColor={(color) => { SetColor(color) }} />
       <MyButton title="Blue" color="blue" onChangeColor={(color) => { SetColor(color) }} />
       <MyButton title="Green" color="green" onChangeColor={(color) => { SetColor(color) }} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width : 150,
    height : 150,
  },
  title : {
    fontSize : 24 ,
    fontWeight: 'bold',
    marginTop : 20,
  },
  input : {
    height : 40,
    borderColor : 'gray',
    borderStyle: 'solid',
    borderWidth : 1,
    width : '100%',
    marginTop : 20,
  },
  buttonLayout:{
    flexDirection :'row',
    marginTop : 20,
  }
});
