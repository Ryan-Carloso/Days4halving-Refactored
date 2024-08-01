import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  SocialMedia  from '../Componentes/social/social'
export default function AboutScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ImageBackground 
      style={styles.imageBackground} 
      source={require('../assets/animations/japanese.png')}
    >
      <ScrollView style={styles.containerAbout}>
        <SafeAreaView style={styles.safeareview} >
          <Text style={styles.title}>About BTC Tracker</Text>
          <Text style={styles.description}>
            BTC Tracker provides real-time Bitcoin price updates and information on the next Bitcoin halving event. Stay informed about the latest BTC price trends and prepare for upcoming milestones in the Bitcoin network.
          </Text>
          <Text style={styles.sectionTitle}>Features:</Text>
          <Text style={styles.description}>
            - Real-time Bitcoin price updates
            {'\n'}- Countdown to the next Bitcoin halving
            {'\n'}- User-friendly interface
            {'\n'}- Powered by CoinGecko API
          </Text>
          <Text style={styles.sectionTitle}>Creator:</Text>
          <Text style={styles.description}>
            Developed by an independent developer, BTC Tracker aims to provide accurate and timely information about Bitcoin.
          </Text>
          <Text style={styles.sectionTitle}>Contact Us:</Text>
          <Text style={styles.description}>
            For support, email me at: support@makedbyryan.tech
          </Text>
          <SocialMedia/>
   
          <Text style={styles.sectionTitle}>API Information:</Text>
          <Text style={styles.description}>
            This app uses the CoinGecko API to fetch real-time Bitcoin data. For more information about CoinGecko, visit their official website at {' '}
            <TouchableOpacity onPress={() => openLink('https://www.coingecko.com')}>
              <Text style={styles.link}>CoinGecko.com</Text>
            </TouchableOpacity>
          </Text>
          <Text style={styles.sectionTitle}>Disclaimer:</Text>
          <Text style={styles.disclaimer}>
            The information provided by BTC Tracker is for informational purposes only and should not be considered as financial advice. I am not responsible for any financial decisions or losses.
          </Text>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAbout: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-transparent background to make text readable

  },
  safeareview: {
    padding: 10,
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
    marginBottom: 16,
    fontWeight: '600'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
  },
  disclaimer: {
    fontSize: 14,
    color: 'white',
    fontWeight: '600',
    marginVertical: 16,
  },
  link: {
    color: 'lightblue',
    fontWeight: '900',
    fontSize: 16,
  },

});
