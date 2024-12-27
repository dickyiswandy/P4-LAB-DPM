import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildComponent = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonRow}>
        <Button title="+" onPress={onIncrease} />
        <View style={{ width: 10 }} /> {/* Spacer */}
        <Button title="-" onPress={onDecrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 48,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChildComponent;
