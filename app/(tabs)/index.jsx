import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bgImage from '@/assets/images/loginbg.png';
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImage}
        resizeMode='cover'
        style={styles.img}
      >
        <Text style={styles.text}>App Component</Text>

        <Link href='contact' style={{marginHorizontal: 'auto'}} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>

      </ImageBackground>
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