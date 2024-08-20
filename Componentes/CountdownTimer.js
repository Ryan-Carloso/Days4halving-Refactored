import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.centeredContainer}>
        <View style={styles.containerNumber}>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>{days}</Text>
            <Text style={styles.labelText}>Days</Text>
          </View>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>{hours}</Text>
            <Text style={styles.labelText}>Hours</Text>
          </View>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>{minutes}</Text>
            <Text style={styles.labelText}>Minutes</Text>
          </View>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>{seconds}</Text>
            <Text style={styles.labelText}>Seconds</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  containerNumber: {
    backgroundColor: 'rgba(61, 61, 61, 1)',
    padding: 30,
    width: 300,
    borderRadius: 20,
    alignItems: 'center',
  },
  countdownContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  countdownText: {
    fontSize: 36,
    color: 'white',
  },
  labelText: {
    fontSize: 18,
    color: 'white',
  },
});

export default CountdownTimer;