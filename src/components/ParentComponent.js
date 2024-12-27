import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) {
        Alert.alert('Pemenang', 'Tim A menang!');
      }
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) {
        Alert.alert('Pemenang', 'Tim B menang!');
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && teamAScore > 0) {
      setTeamAScore(teamAScore - 1);
    } else if (team === 'B' && teamBScore > 0) {
      setTeamBScore(teamBScore - 1);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <ChildComponent
        teamName="Tim A"
        score={teamAScore}
        onIncrease={() => increaseScore('A')}
        onDecrease={() => decreaseScore('A')}
      />
      <ChildComponent
        teamName="Tim B"
        score={teamBScore}
        onIncrease={() => increaseScore('B')}
        onDecrease={() => decreaseScore('B')}
      />
      <View style={styles.resetContainer}>
        <Button title="Reset Pertandingan" onPress={resetScores} color="#ff6347" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  resetContainer: {
    marginTop: 40,
  },
});

export default ParentComponent;
