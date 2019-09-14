import React, { useState, useEffect } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import { SafeAreaView } from 'react-navigation';
import Button from '../components/Button';
import { icons } from '../constants/Images';

export default function HomeScreen() {
  const [dismiss, setDismiss] = useState(false);
  const [animationValue] = useState(new Animated.Value(0));

  const interpolateHeight = animationValue
                        .interpolate({
                          inputRange:[0, 1],
                          outputRange:[200, 5],
                        });

  useEffect(() => {
    if(dismiss) {
      animatedTransition = Animated.spring(animationValue,{toValue:1});
      animatedTransition.start();
    }
  }, [dismiss]);

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View 
        style={[styles.headerStyle, dismiss ? {borderBottomWidth: 0} : {}]}>
        <View style={styles.userIconContainerStyle}>
          <Image source={icons.user} />
        </View>
        <Animated.View style={{height: interpolateHeight}}>
          {!dismiss && (
            <View>
              <Text style={styles.greetingTextStyle}>Welcome,</Text>
              <Text style={styles.userNameTextStyle}>Matthew Anderson</Text>
              <Text style={styles.noticeTextStyle}>
                Let’s get started by adding more information {'\n'} to your profile.
              </Text>
              <View style={styles.goToProfileContainerStyle}>
                <Button
                  title="GO TO PROFILE"
                  style={styles.goToProfileBtnStyle}
                  textStyle={styles.goToProfileBtnTextStyle}
                  onPress={()=>{}}
                />
                <Button
                  title="DISMISS"
                  style={styles.dismissBtnStyle}
                  textStyle={styles.dismissBtnTextStyle}
                  onPress={() => setDismiss(!dismiss)}
                />
              </View>
            </View>
          )}
        </Animated.View>
      </View>
        <ScrollView 
        contentContainerStyle={{
          padding: 16
        }}>
          <Text style={styles.titleStyle}>This is Title</Text>
        </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  headerStyle: {
    borderBottomColor: '#757E90',
    borderBottomWidth: 1,
    padding: 30,
  }, 
  titleStyle: {
    fontSize: 24,
    marginVertical: 16
  },
  userIconContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  greetingTextStyle: {
    fontFamily: 'OpenSans-Light',
    fontSize: 28,
    lineHeight: 38,
    color: '#27282B',
    letterSpacing: 0,
    height: 38,
    marginRight: 11,
    marginBottom: 5,
  },
  userNameTextStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 28,
    lineHeight: 38,
    color: '#27282B',
    letterSpacing: 0,
    height: 38,
    marginRight: 11,
    marginBottom: 20,
  },
  noticeTextStyle: {
    fontFamily: 'OpenSans-Light', 
    fontSize: 14,
    lineHeight: 19,
    color: '#757E90',
    height: 38,
    marginRight: 8,
    marginBottom: 20,
  },
  goToProfileContainerStyle: {
    flexDirection: 'row',
  }, 
  goToProfileBtnStyle: {
    width: 158,
    height: 36,
    borderRadius: 6,
    backgroundColor: '#0D65D8',
  },
  goToProfileBtnTextStyle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#FFFFFF',
    height: 17,
    marginTop: 10,
    marginBottom: 9,
    marginHorizontal: 34,
  },
  dismissBtnStyle: {
    width: 105,
    height: 36,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 9,
    marginHorizontal: 30,
  },
  dismissBtnTextStyle: {
    height: 17,
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    lineHeight: 17,
    textAlign: 'center',
    color: '#27282B',
  }
});
