import React from 'react';
import {View, Text, Dimensions, Image, Pressable} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../../common/theme';
import {getReadbleTime} from '../../../utils/helpers';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const CarouselCardItem = ({item, index, openModal}) => {
  const duration = getReadbleTime(item.duration);
  const onPress = () => {
    openModal(item);
  };

  return (
    <View style={{...styles.container, width: ITEM_WIDTH}}>
      <Pressable style={styles.innerContainer} key={index} onPress={onPress}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
        <Icon name="play" size={14} color={theme.colors.pinkAccent} />
      </Pressable>
    </View>
  );
};

export default CarouselCardItem;
