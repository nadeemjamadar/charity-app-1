import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  ProgressBarAndroid,
  ProgressViewIOS,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import MeganHuntImage from '../assets/images/megan-hunt.svg';

const CharityDetailsScreen = props => {
  const { params } = props.navigation.state;

  return (
    <SafeAreaView style={styles.containerStyle}>
      <TouchableOpacity style={styles.supportBtnStyle}>
        <View style={styles.supportTextContainerStyle}>
          <Text style={styles.supportTextStyle}>SUPPORT THIS PROJECT</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.detailsStyle}>
        <Image source={params.image} style={styles.imageStyle} />
        <Text style={styles.categoryTextStyle}>Under Basic Amenities</Text>
        <Text style={styles.titleStyle}>{params.title}</Text>
        {Platform.OS === 'android' ? (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
            style={{
              marginTop: 30,
              marginBottom: 20,
              marginHorizontal: 15,
              color: '#0D65D8',
              height: 3,
            }}
          />
        ) : (
          <ProgressViewIOS
            progress={0.5}
            progressTintColor="#0D65D8"
            style={{
              marginTop: 30,
              marginBottom: 20,
              marginHorizontal: 15,
              height: 3,
            }}
          />
        )}
        <View style={styles.amountRaisedContainerStyle}>
          <Text style={styles.totalRaisedStyle}>TOTAL RAISED</Text>
          <View style={styles.amountContainerStyle}>
            <Text style={styles.oldAmountStyle}>{params.oldAmount}</Text>
            <Text style={styles.newAmountStyle}> {params.newAmount}</Text>
          </View>
        </View>
        <View style={styles.nameIconContainerStyle}>
          <MeganHuntImage width={30} height={30} />
          <Text style={styles.nameStyle}>Megan Hunt</Text>
        </View>
        <Text>
          Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend
          lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices.
          Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur
          fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam
          condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique,
          elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue.
          Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  detailsStyle: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  imageStyle: {
    width: undefined,
    height: 200,
    borderRadius: 6,
    resizeMode: 'cover',
  },
  nameIconContainerStyle: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 20,
  },
  nameStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#27282B',
    marginLeft: 10,
  },
  categoryTextStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: '#757E90',
    marginTop: 30,
    marginBottom: 14,
    marginHorizontal: 15,
  },
  titleStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'left',
    color: '#27282B',
    marginHorizontal: 15,
  },
  amountRaisedContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
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
  supportBtnStyle: {
    position: 'absolute',
    bottom: 20,
    left: '15%',
    width: '70%',
    height: 46,
    backgroundColor: '#0D65D8',
    borderRadius: 6,
    zIndex: 1,
  },
  supportTextContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportTextStyle: {
    color: '#FFF',
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    lineHeight: 18,
  },
});

export default CharityDetailsScreen;
