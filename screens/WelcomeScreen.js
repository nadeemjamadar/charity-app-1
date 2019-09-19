import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { backgrounds } from '../constants/Images';

export default function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.upperFirstText}>Acts.Of.Life</Text>
        <Text style={styles.upperSecondText}>Sharing made social.</Text>
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={backgrounds.kids} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => props.navigation.navigate('Login')}
        >
          <Text style={styles.getStartedText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 3,
    marginBottom: 5,
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperFirstText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    color: '#0D65D8',
    marginBottom: 5,
  },
  upperSecondText: {
    fontFamily: 'OpenSans-Light',
    fontSize: 18,
    color: '#757E90',
  },
  img: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
  getStartedButton: {
    width: '70%',
    height: 46,
    borderRadius: 5,
    backgroundColor: '#0D65D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  getStartedText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    lineHeight: 18,
    color: '#fff',
  },
});
