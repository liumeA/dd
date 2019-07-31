import React, { Component } from 'react';
import { Carousel } from 'antd';
import styles from './index.css';
import { MyInfo } from '@/components/TopCarouser/MyInfo';

class Pcarouser extends Component {


  static next() {
    Pcarouser.slider.slick.slickNext();
  }

  static prev() {
    Pcarouser.slider.slick.slickPrev();
  }

  render() {
    const lunboSetting = {
      dots: false,
      lazyLoad: true,
      autoplay: false,
      effect: 'fade',
    };
    return (
      <div className={styles.top}>
        <Carousel {...lunboSetting} ref={el => (Pcarouser.slider = el)}>
          <div key={1} className={styles.carousel1}>
            {MyInfo()}
          </div>
          <div key={2} className={styles.carousel2}>
            {MyInfo()}
          </div>
          <div key={3} className={styles.carousel1}>
            {MyInfo()}
          </div>


        </Carousel>
      </div>
    );
  }
}

export default Pcarouser;





