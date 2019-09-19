import React from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  ProgressViewIOS,
  ProgressBarAndroid,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const CharityItem = ({ id, title, image, oldAmount, newAmount, onSelect }) => (
  <TouchableOpacity style={{ marginBottom: 30 }} onPress={() => onSelect(id)}>
    <Image source={image} style={styles.imageStyle} />
    <View style={{ marginTop: 20 }}>
      <Text style={styles.titleStyle}>{title}</Text>
      {Platform.OS === 'android' ? (
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
          style={{ marginVertical: 14, color: '#0D65D8', height: 3 }}
        />
      ) : (
        <ProgressViewIOS
          progress={0.5}
          progressTintColor="#0D65D8"
          style={{ marginVertical: 14, height: 3 }}
        />
      )}
      <View style={styles.amountRaisedContainerStyle}>
        <Text style={styles.totalRaisedStyle}>TOTAL RAISED</Text>
        <View style={styles.amountContainerStyle}>
          <Text style={styles.oldAmountStyle}>{oldAmount}</Text>
          <Text style={styles.newAmountStyle}> {newAmount}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

CharityItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.number.isRequired,
  oldAmount: PropTypes.string.isRequired,
  newAmount: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

CharityItem.defaultProps = {
  onSelect: () => {},
};

const styles = StyleSheet.create({
  imageStyle: {
    width: undefined,
    height: 200,
    borderRadius: 6,
    resizeMode: 'cover',
  },
  titleStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'left',
    color: '#27282B',
  },
  amountRaisedContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalRaisedStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    lineHeight: 13,
    textAlign: 'left',
    color: '#757E90',
  },
  amountContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  oldAmountStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
    textDecorationLine: 'line-through',
    color: '#757E90',
    opacity: 0.5,
  },
  newAmountStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'left',
    color: '#0D65D8',
  },
});

export default CharityItem;
