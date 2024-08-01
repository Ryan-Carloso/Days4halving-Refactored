import React from 'react';
import LottieView from 'lottie-react-native';

const BtcSpin = () => {
  return (
    <LottieView source={require('../../../assets/animations/BitcoinSpin.json')}
      autoPlay
      loop
      style={{
        width: 150,
        height: 150,
        marginBottom: -20,
        top: 0,
        left: 0,
      }}
    />
  );
};

export default BtcSpin;