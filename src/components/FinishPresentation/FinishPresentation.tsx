import { Carousel } from '@mantine/carousel';
import { FirstSlide } from './components/FirtsSlide';
import { SecondSlide } from './components/SecondSlide';
import { ThirdSlide } from './components/ThirdSlide';

export function FinishPresentation() {
  return (
    <Carousel
      slideSize="70%"
      slideGap="sm"
      controlsOffset="xs"
      controlSize={27}
      draggable={false}
      withIndicators
    >
      <Carousel.Slide>
        <FirstSlide />
      </Carousel.Slide>
      <Carousel.Slide>
        <SecondSlide />
      </Carousel.Slide>
      <Carousel.Slide>
        <ThirdSlide />
      </Carousel.Slide>
    </Carousel>
  );
}
