import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BitcoinPrice = ({ bitcoinPrice }) => {
  return (
    <View style={styles.countdownContainer}>
      <Text style={styles.text}>Days4Halving</Text>
      {bitcoinPrice && (
        <Text style={styles.textBTC}>
          Bitcoin Price: {bitcoinPrice.price} {bitcoinPrice.currency.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  countdownContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(61, 61, 61, 1)',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: 'bold',
  },
  textBTC: {
    fontSize: 20,
    color: "white",
    fontWeight: 'bold',
  },
});

export default BitcoinPrice;