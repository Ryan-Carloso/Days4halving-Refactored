import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import BtcSpin from '../Componentes/animation/BtcSpin/BtcSpin';
import CountdownTimer from '../Componentes/CountdownTimer';
import BitcoinPrice from '../Componentes/BitcoinPrice';
import CurrencyModal from '../Componentes/CurrencyModal';
import SkiaComponent from '../assets/animations/SkiaComponent';

const App = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('eur'); // Padrão: EUR
  const [modalVisible, setModalVisible] = useState(false);

  const updateCountdown = async () => {
    const targetDate = new Date('2028-04-22T00:00:00Z').getTime();
    const currentTime = new Date().getTime();
    const timeDifferenceInSeconds = Math.floor((targetDate - currentTime) / 1000);

    if (timeDifferenceInSeconds > 0) {
      const daysRemaining = Math.floor(timeDifferenceInSeconds / (24 * 60 * 60));
      const hoursRemaining = Math.floor((timeDifferenceInSeconds % (24 * 60 * 60)) / (60 * 60));
      const minutesRemaining = Math.floor((timeDifferenceInSeconds % (60 * 60)) / 60);
      const secondsRemaining = timeDifferenceInSeconds % 60;

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    } else {
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() + 4);

      const newTargetDate = currentDate.getTime();
      const newTimeDifferenceInSeconds = Math.floor((newTargetDate - currentTime) / 1000);

      const newDaysRemaining = Math.floor(newTimeDifferenceInSeconds / (24 * 60 * 60));
      const newHoursRemaining = Math.floor((newTimeDifferenceInSeconds % (24 * 60 * 60)) / (60 * 60));
      const newMinutesRemaining = Math.floor((newTimeDifferenceInSeconds % (60 * 60)) / 60);
      const newSecondsRemaining = newTimeDifferenceInSeconds % 60;

      setDays(newDaysRemaining);
      setHours(newHoursRemaining);
      setMinutes(newMinutesRemaining);
      setSeconds(newSecondsRemaining);
    }

    // Atualizar o estado do preço do Bitcoin a cada 30 segundos
    if (Math.floor(new Date().getTime() / 1000) % 30 === 0) {
      await fetchBitcoinPrice(selectedCurrency);
    }
  };

  const fetchBitcoinPrice = async (currency) => {
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
      const price = response.data.bitcoin[currency];
      setBitcoinPrice({ currency, price });
    } catch (error) {
      console.error('Erro ao obter o preço do Bitcoin:', error.message);
    }
  };

  const handleCurrencyChange = async (currency) => {
    setSelectedCurrency(currency);
    await fetchBitcoinPrice(currency);
    setModalVisible(false);
  };

  useEffect(() => {
    updateCountdown();

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, [selectedCurrency]);

  return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />


  <SkiaComponent />
  <SafeAreaView style={styles.content}>

      <SafeAreaView style={styles.container}>
        <BtcSpin/>  
        <BitcoinPrice bitcoinPrice={bitcoinPrice} />
  
        <CountdownTimer 
          days={days} 
          hours={hours} 
          minutes={minutes} 
          seconds={seconds} 
        />

        <TouchableOpacity style={styles.currencyButtonContainer} onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>Select coin for BTC</Text>
        </TouchableOpacity>

        <CurrencyModal 
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleCurrencyChange={handleCurrencyChange}
        />
      </SafeAreaView>
    </SafeAreaView>
</View>  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',

  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  currencyButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(61, 61, 61, 1)',
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    color: "white",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;