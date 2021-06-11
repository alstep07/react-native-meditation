import React from 'react';
import {View, Text, Pressable, ImageBackground} from 'react-native';
import styles from './style';
import backgroundImage from '../../assets/images/modal_bg.png';
import ModalHeader from './ModalHeader';

const ModalScreen = ({meditation, modalClose}) => {
  const {title, subtitle, duration, sound} = meditation;

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode="stretch">
      <ModalHeader title={title} subtitle={subtitle} modalClose={modalClose} />
    </ImageBackground>
  );
};

export default ModalScreen;