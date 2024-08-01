import React from 'react';
import LottieView from 'lottie-react-native';

const LottieBtcMining = () => {
  return (
    <LottieView
      source={require('../../../assets/animations/BitcoinMining.json')}
      autoPlay
      loop
      style={{
        width: 200,
        height: 200,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default LottieBtcMining;