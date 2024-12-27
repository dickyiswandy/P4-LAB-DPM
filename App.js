import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExampleComponent from './src/screens/ExampleComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ExampleComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    backgroundColor: '#fff',
  },
});

export default App;
