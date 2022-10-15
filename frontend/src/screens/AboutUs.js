import React from 'react';

// import styles from './../styles/scss/_aboutus.scss';
import trends from './../images/trends.jpg';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container>
      <section
        style={{
          display: 'flex',
          paddingTop: 150,
          paddingBottom: 150,
          justifyContent: 'space-between',
        }}
      >
        <div className="left-content">
          <h1> {t('aboutUsTitle.1')}</h1>
          <p
            style={{
              fontSize: 16,
              paddingRight: 30,
              textAlign: 'justify',
              marginTop: 20,
            }}
          >
           {t('aboutUsContext.1')} <br /> 
           <br/>
           {t('aboutUsContext.2')}  <br />
           {t('aboutUsContext.3')} 
            <br />
            <br />
            {t('aboutUsContext.4')} 
          </p>
        </div>
        <div className="right-content">
          <img src={trends} />
        </div>
      </section>
    </Container>
  );
};

export default AboutUs;
