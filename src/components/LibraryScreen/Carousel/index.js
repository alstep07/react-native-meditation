import React, {useRef} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from '../Card/Card';
import styles from './style';

const CarouselCards = ({listData}) => {
  const isCarousel = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={10}
        ref={isCarousel}
        data={listData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default CarouselCards;