import React, {useRef} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from '../Card/Card';
import styles from './style';
import {useModalContext} from '../../../context';

const CarouselCards = ({listData}) => {
  const isCarousel = useRef(null);
  const openModal = useModalContext();

  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        layoutCardOffset={10}
        ref={isCarousel}
        data={listData}
        renderItem={({item, index}) => (
          <CarouselCardItem item={item} index={index} openModal={openModal} />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
      />
    </View>
  );
};

export default CarouselCards;
