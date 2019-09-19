import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-navigation";
import CharityItem from "../components/CharityItem";
import DATA from "../data/Charities";
import HeaderPanel from "../components/HeaderPanel";

export default function HomeScreen(props) {

  const onSelect = (id) => {
    const charity = DATA.find(charity => charity.id == id);
    if(charity) {
      props.navigation.navigate('CharityDetails', charity);
    }
  }
  
  return (
    <SafeAreaView style={styles.containerStyle}>
      <HeaderPanel />
      <View style={styles.charitiesListContainerStyle}>
        <Text style={styles.titleStyle}>Trending Charities</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({ item }) => (
            <CharityItem
              id={item.id}
              title={item.title}
              image={item.image}
              oldAmount={item.oldAmount}
              newAmount={item.newAmount}
              onSelect={onSelect}
            />
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
  
});
