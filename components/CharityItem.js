import React from "react";
import { View, Text, Image, StyleSheet, ProgressViewIOS } from "react-native";

const CharityItem = ({ id, title, image }) => (
  <View style={{ marginBottom: 30 }}>
    <Image source={image} style={styles.imageStyle} />
    <View style={{marginTop: 20}}>
      <Text style={styles.titleStyle}>{title}</Text>
      <ProgressViewIOS
        progress={0.5}
        progressTintColor="#0D65D8"
        style={{ marginVertical: 14 }}
      />
      <View style={styles.amountRaisedContainerStyle}>
        <Text style={styles.totalRaisedStyle}>TOTAL RAISED</Text>
        <View style={styles.amountContainerStyle}>
          <Text style={styles.oldAmountStyle}>$10,000</Text>
          <Text style={styles.newAmountStyle}> $12,500</Text>
        </View>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  imageStyle: {
    width: undefined,
    height: 200,
    borderRadius: 6,
    resizeMode: "cover"
  },
  titleStyle: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    lineHeight: 27,
    textAlign: "left",
    color: "#27282B",
  },
  amountRaisedContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  totalRaisedStyle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 11,
    lineHeight: 13,
    textAlign: "left",
    color: "#757E90"
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
    opacity: 0.5
  },
  newAmountStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    lineHeight: 27,
    textAlign: 'left',
    color: '#0D65D8',
  }
});

export default CharityItem;
