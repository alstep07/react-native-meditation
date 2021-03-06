import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from '../Card/Card';
import styles from './style';

const CarouselCards = ({listData, openModal}) => {
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={listData}
        activeSlideAlignment="center"
        renderItem={({item, index}) => (
          <CarouselCardItem item={item} index={index} openModal={openModal} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default CarouselCards;
