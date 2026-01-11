import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

// Import slick styles (required by react-slick)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DotInactive from './assets/carousel/not_selected_dot.svg';
import DotActive from './assets/carousel/selected_dot.svg';

type SponsorsCarouselProps = {
  slides: string[];
  autoplay?: boolean;
  autoplaySpeed?: number;
};

const CarouselContainer = styled.section`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0 10px;

  .slick-slider {
    width: 90%;
  }

  .slick-slide {
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .slick-slide img {
    max-height: 60px;
    width: auto;
  }

  /* Reset default dot button */
  .slick-dots li button:before {
    content: '';
  }

  .slick-dots.custom-dots {
    margin-top: 12px;
  }

  .slick-dots.custom-dots li {
    width: auto;
    height: auto;
    margin: 0 4px;
  }

  .dot-wrapper {
    position: relative;
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .dot {
    position: absolute;
    inset: 0;
    width: 10px;
    height: 10px;
  }

  /* Show inactive by default */
  .dot--active {
    display: none;
  }

  /* Toggle images based on active dot */
  .slick-dots li.slick-active .dot--active {
    display: block;
  }

  .slick-dots li.slick-active .dot--inactive {
    display: none;
  }

  @media (min-width: 481px) {
    padding: 30px 0 15px;

    .slick-slider {
      width: 85%;
    }

    .slick-slide img {
      max-height: 70px;
    }

    .dot-wrapper {
      width: 24px;
      height: 24px;
    }

    .dot {
      width: 11px;
      height: 11px;
    }

    .slick-dots.custom-dots li {
      margin: 0 6px;
    }
  }

  @media (min-width: 769px) {
    padding: 40px 0 20px;

    .slick-slider {
      width: 80%;
    }

    .slick-slide img {
      max-height: 90px;
    }

    .slick-dots.custom-dots {
      margin-top: 16px;
    }

    .slick-dots.custom-dots li {
      margin: 0 8px;
    }

    .dot-wrapper {
      width: 28px;
      height: 28px;
    }

    .dot {
      width: 12px;
      height: 12px;
    }
  }
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

const SponsorsCarousel: React.FC<SponsorsCarouselProps> = ({ slides, autoplay = true, autoplaySpeed = 2500 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <ul className="slick-dots custom-dots">{dots}</ul>
    ),
    customPaging: () => (
      <div className="dot-wrapper">
        <img className="dot dot--inactive" src={DotInactive} alt="dot" />
        <img className="dot dot--active" src={DotActive} alt="active dot" />
      </div>
    ),
  } as const;

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {slides.map((src, idx) => (
          <Slide key={idx}>
            <img src={src} alt={`slide-${idx + 1}`} />
          </Slide>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default SponsorsCarousel;

