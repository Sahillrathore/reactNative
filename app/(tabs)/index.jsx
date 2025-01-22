import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bgImage from '@/assets/images/loginbg.png';
import { Link } from 'expo-router';
import Users from '../home';
import Home from '../home';

const app = () => {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  link: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  button: {
    // height: ,
    borderRadius: 20,
    backgroundColor: '#fff',
    padding: 6,
    border: '1px solid black',
  },
  buttonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
    // textDecorationLine: 'underline',
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

})