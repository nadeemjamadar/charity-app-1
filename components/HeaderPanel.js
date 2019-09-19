import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  UIManager,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import Button from './Button';
import { icons } from '../constants/Images';

const HeaderPanel = ({ initialExpanded = true }) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const [height, setHeight] = useState(200);

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!expanded && height) {
      setHeight(0);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    if (expanded && height === 0) {
      setHeight(200);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  }, [expanded]);

  return (
    <View style={[styles.headerStyle, expanded ? {} : { borderBottomWidth: 0, paddingBottom: 0 }]}>
      <View style={styles.userIconContainerStyle}>
        <TouchableOpacity style={styles.accordionBtnStyle} onPress={() => setExpanded(!expanded)}>
          <Text style={styles.accordionBtnTextStyle}>San Francisco</Text>
          <FontAwesome
            size={15}
            name={expanded ? 'chevron-up' : 'chevron-down'}
            style={{
              color: '#27282B',
              marginLeft: 19,
              marginTop: 7,
            }}
          />
        </TouchableOpacity>
        <Image source={icons.user} />
      </View>
      <View style={{ height, overflow: 'hidden' }}>
        <Text style={styles.greetingTextStyle}>Welcome</Text>
        <Text style={styles.userNameTextStyle}>Matthew Anderson</Text>
        <Text style={styles.noticeTextStyle}>
          Let’s get started by adding more information {'\n'} to your profile.
        </Text>
        <View style={styles.goToProfileContainerStyle}>
          <Button
            title="GO TO PROFILE"
            style={styles.goToProfileBtnStyle}
            textStyle={styles.goToProfileBtnTextStyle}
            onPress={() => {}}
          />
          <Button
            title="DISMISS"
            style={styles.dismissBtnStyle}
            textStyle={styles.dismissBtnTextStyle}
            onPress={() => setExpanded(!expanded)}
          />
        </View>
      </View>
    </View>
  );
};

HeaderPanel.propTypes = {
  initialExpanded: PropTypes.bool,
};

HeaderPanel.defaultProps = {
  initialExpanded: true,
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
  userIconContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  accordionBtnStyle: {
    flexDirection: 'row',
    height: 27,
  },
  accordionBtnTextStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    color: '#27282B',
    letterSpacing: 0,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
});

export default HeaderPanel;
