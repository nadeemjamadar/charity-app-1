import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  UIManager,
  TouchableOpacity,
  LayoutAnimation
} from "react-native";

import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
import CharityItem from "../components/CharityItem";
import { icons } from "../constants/Images";
import DATA from "../data/Charities";
// console.log('charities', charities);

// const DATA = [
//   {
//     id: 1,
//     title: 'St. Loueis Welfare Org.',
//     image: charities.loueis,
//   },
//   {
//     id: 2,
//     title: 'St. Loueis Welfare Org.',
//     image: charities.loueis,
//   }
// ];

export default function HomeScreen() {
  const [expanded, setExpanded] = useState(true);
  const [updatedHeight, setUpdatedHeight] = useState(200);

  useEffect(() => {
    if (Platform.OS === "android") {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  useEffect(() => {
    if (!expanded && updatedHeight) {
      setUpdatedHeight(0);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    if (expanded && updatedHeight == 0) {
      setUpdatedHeight(200);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  }, [expanded]);

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View
        style={[
          styles.headerStyle,
          expanded ? {} : { borderBottomWidth: 0, paddingBottom: 0 }
        ]}
      >
        <View style={styles.userIconContainerStyle}>
          <TouchableOpacity
            style={styles.accordionBtnStyle}
            onPress={() => setExpanded(!expanded)}
          >
            <Text style={styles.accordionBtnTextStyle}>San Francisco</Text>
            <FontAwesome
              size={15}
              name={expanded ? "chevron-up" : "chevron-down"}
              style={{
                color: "#27282B",
                marginLeft: 19,
                marginTop: 7
              }}
            />
          </TouchableOpacity>
          <Image source={icons.user} />
        </View>
        <View style={{ height: updatedHeight, overflow: "hidden" }}>
          <Text style={styles.greetingTextStyle}>Welcome</Text>
          <Text style={styles.userNameTextStyle}>Matthew Anderson</Text>
          <Text style={styles.noticeTextStyle}>
            Let’s get started by adding more information {"\n"} to your profile.
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
      <View style={styles.charitiesListContainerStyle}>
        <Text style={styles.titleStyle}>Trending Charities</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <CharityItem id={item.id} title={item.title} image={item.image} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  },
  charitiesListContainerStyle: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 30
  },
  titleStyle: {
    fontFamily: "OpenSans-Regular",
    fontSize: 11,
    textAlign: "left",
    color: "#757E90",
    lineHeight: 13,
    marginVertical: 24
  },
  headerStyle: {
    borderBottomColor: "#757E90",
    borderBottomWidth: 1,
    padding: 30
  },
  userIconContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  accordionBtnStyle: {
    flexDirection: "row",
    height: 27
  },
  accordionBtnTextStyle: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 20,
    lineHeight: 27,
    color: "#27282B",
    letterSpacing: 0
  },
  greetingTextStyle: {
    fontFamily: "OpenSans-Light",
    fontSize: 28,
    lineHeight: 38,
    color: "#27282B",
    letterSpacing: 0,
    height: 38,
    marginRight: 11,
    marginBottom: 5
  },
  userNameTextStyle: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 28,
    lineHeight: 38,
    color: "#27282B",
    letterSpacing: 0,
    height: 38,
    marginRight: 11,
    marginBottom: 20
  },
  noticeTextStyle: {
    fontFamily: "OpenSans-Light",
    fontSize: 14,
    lineHeight: 19,
    color: "#757E90",
    height: 38,
    marginRight: 8,
    marginBottom: 20
  },
  goToProfileContainerStyle: {
    flexDirection: "row"
  },
  goToProfileBtnStyle: {
    width: 158,
    height: 36,
    borderRadius: 6,
    backgroundColor: "#0D65D8"
  },
  goToProfileBtnTextStyle: {
    fontFamily: "OpenSans-Bold",
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
    color: "#FFFFFF",
    height: 17,
    marginTop: 10,
    marginBottom: 9,
    marginHorizontal: 34
  },
  dismissBtnStyle: {
    width: 105,
    height: 36,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 9,
    marginHorizontal: 30
  },
  dismissBtnTextStyle: {
    height: 17,
    fontFamily: "OpenSans-Bold",
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
    color: "#27282B"
  }
});
