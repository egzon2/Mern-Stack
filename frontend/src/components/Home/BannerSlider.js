import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
const BannerSlider = () => {
  const { t, i18n } = useTranslation();
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    // <div className="banner-slider">
      <Container className="h-100 pt-2">
        <Row className="h-100 align-items-center">
          <Slider {...settings}>
            <div className="banner-image-3"> 
              <div className="slide">
                <div className="slide-content">
                  <h1 className="slide-heading">{t('fashionTrens.1')}</h1>
                  <p className="slide-sub-heading">
                    {/* * only today we offer free shopping. */}
                    {t('textBanner.1')}
                  </p>
                  <div className="slide-link">
                    <Link to="/shop" className="main-btn">
                    {t('ShopNow.1')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-image-my">
              <div className="slide">
                <div className="slide-content">
                  <h1 className="slide-heading"> {t('Accessories.1')}</h1>
                  <p className="slide-sub-heading">
                  {t('textBanner.1')}
                  </p>
                  <div className="slide-link">
                    <Link to="/shop" className="main-btn">
                    {t('ShopNow.1')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-image-2">
              <div className="slide">
                <div className="slide-content">
                  <h1 className="slide-heading"> {t('bags.1')}</h1>
                  <p className="slide-sub-heading">
                  {t('textBanner.1')}
                  </p>
                  <div className="slide-link">
                    <Link to="/shop" className="main-btn">
                    {t('ShopNow.1')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </Row>
      </Container>
    // </div>
  );
};

export default BannerSlider;
