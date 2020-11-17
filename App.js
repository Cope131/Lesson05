import React from 'react';
import {
  View, Text, ScrollView
} from 'react-native';

import {
  MovieList, Movie
} from './Movies';

import BoatList from './Boats';

const App: () => React$Node = () => {
  return (
      <ScrollView>
          <View style={{padding: 20}}>
            <Text>Lesson 05 Exercises</Text>
            <MovieList />
            <Text>{'\n'} Mini Project</Text>
            <BoatList />
          </View>
      </ScrollView>
  );
};

export default App;
