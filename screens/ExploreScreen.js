import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import HeaderPanel from '../components/HeaderPanel';
import ArrowUpRightIcon from '../assets/images/arrow-up-right.svg';
import data from '../data/Charities';

function Item({ id, title, onSelect }) {
  return (
    <TouchableOpacity onPress={() => onSelect(id)} style={styles.itemContainerStyle}>
      <Text style={styles.itemTitleStyle}>{title}</Text>
      <ArrowUpRightIcon width={10} height={10} style={{ marginTop: 10 }} />
    </TouchableOpacity>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default function ExploreScreen(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const onSelect = id => {
    const charity = data.find(item => item.id === id);
    if (charity) {
      props.navigation.navigate('CharityDetails', charity);
    }
  };

  const find = (items, text) => {
    const textArray = text.split(' ');
    return items.filter(item => {
      return textArray.every(el => {
        return item.title.indexOf(el) > -1;
      });
    });
  };

  const search = text => {
    const results = find(data, text);
    setSearchTerm(text);
    setSearchResult(text ? results : []);
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <HeaderPanel initialExpanded={false} />
      <View style={styles.searchStyle}>
        <View style={styles.searchBoxStyle}>
          <TextInput
            placeholder="search"
            style={styles.searchTextInputStyle}
            underlineColorAndroid="#fff"
            onChangeText={search}
            value={searchTerm}
          />
          <FontAwesome size={15} name="search" style={{ opacity: 0.5 }} />
        </View>
        {searchTerm ? (
          <View>
            <Text style={styles.searchedTitle}>Search Results</Text>
            {searchResult.length ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={searchResult}
                renderItem={({ item }) => (
                  <Item id={item.id} title={item.title} onSelect={onSelect} />
                )}
                keyExtractor={item => item.id.toString()}
              />
            ) : (
              <View style={{ alignItems: 'center' }}>
                <Text>No Data Found</Text>
              </View>
            )}
          </View>
        ) : (
          <View>
            <Text style={styles.searchedTitle}>Recently Searched</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item }) => (
                <Item id={item.id} title={item.title} onSelect={onSelect} />
              )}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

ExploreScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  searchStyle: {
    marginTop: 40,
    paddingHorizontal: 30,
  },
  searchBoxStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#edeef0',
    height: 46,
    padding: 15,
    borderRadius: 6,
  },
  searchTextInputStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 17,
    width: '80%',
    color: '#27282B',
    textDecorationLine: 'none',
    opacity: 1,
  },
  searchedTitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    lineHeight: 13,
    color: '#757E90',
    marginTop: 40,
    marginBottom: 34,
  },
  itemContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  itemTitleStyle: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    color: '#27282B',
  },
});
