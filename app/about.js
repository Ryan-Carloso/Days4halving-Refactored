import React from 'react';
import { View, Text, StyleSheet, ScrollView,StatusBar, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SocialMedia from '../Componentes/social/social';
import SkiaComponent from '../assets/animations/SkiaComponent';

export default function AboutScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SkiaComponent />
      <StatusBar barStyle="light-content" />

      <ScrollView style={styles.containerAbout}>
        <SafeAreaView style={styles.safeareview}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>About BTC Tracker</Text>
            <Text style={styles.description}>
              BTC Tracker provides real-time Bitcoin price updates and information on the next Bitcoin halving event. Stay informed about the latest BTC price trends and prepare for upcoming milestones in the Bitcoin network.
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Features:</Text>
            <Text style={styles.description}>
              - Real-time Bitcoin price updates
              {'\n'}- Countdown to the next Bitcoin halving
              {'\n'}- User-friendly interface
              {'\n'}- Powered by CoinGecko API
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Creator:</Text>
            <Text style={styles.description}>
              Developed by an independent developer, BTC Tracker aims to provide accurate and timely information about Bitcoin.
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Contact Us:</Text>
            <Text style={styles.description}>
              For support, email me at: support@makedbyryan.tech
            </Text>
            <Text style={styles.description}>
            {'\n'}Contact by the socials:
            </Text>
            <SocialMedia />
          </View>


          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>API Information:</Text>
            <Text style={styles.description}>
              This app uses the CoinGecko API to fetch real-time Bitcoin data. For more information about CoinGecko, visit their official website at{' '}
              <TouchableOpacity onPress={() => openLink('https://www.coingecko.com')}>
                <Text style={styles.link}>CoinGecko.com</Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.sectionTitle}>Disclaimer:</Text>
            <Text style={styles.disclaimer}>
              The information provided by BTC Tracker is for informational purposes only and should not be considered as financial advice. I am not responsible for any financial decisions or losses.
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
  },
  containerAbout: {
    flex: 1,
    paddingHorizontal: 20, // Adiciona padding lateral ao ScrollView
  },
  safeareview: {
    padding: 10,
  },
  textContainer: {
    backgroundColor: 'rgba(61, 61, 61, 1)',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  disclaimer: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
  },
  link: {
    color: 'lightblue',
    fontWeight: '900',
    fontSize: 16,
  },
});