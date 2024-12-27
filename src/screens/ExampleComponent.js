import React from 'react';
import { View, StyleSheet } from 'react-native';
import ParentComponent from '../components/ParentComponent';

const ExampleComponent = () => {
  return (
    <View style={styles.screen}>
      <ParentComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ExampleComponent;
