import styles from '@/components/TopCarouser/myInfo.css';
import { Avatar, Icon } from 'antd';
import qq from '@/assets/carouser/qq.png';
import myQq from '@/assets/carouser/myQq.jpg';
import wechat from '@/assets/carouser/wechat.png';
import myWechat from '@/assets/carouser/myWechat.jpg';
import sina from '@/assets/carouser/sina.png';
import github from '@/assets/carouser/github.png';
import mygithub from '@/assets/carouser/mygithub.gif';
import React from 'react';
import Pcarouser from '@/components/TopCarouser/Pcarouser';


export function MyInfo() {
  const av = ['https://xiukid520-1259521586.cos.ap-shanghai.myqcloud.com/xiukid/189decca39dbb6fdb9cfe2b70024ab18962b3757.png'
    , 'https://xiukid520-1259521586.cos.ap-shanghai.myqcloud.com/xiukid/2465224b20a4462343e6a3f39122720e0cf3d73f.png'
    , 'https://xiukid520-1259521586.cos.ap-shanghai.myqcloud.com/xiukid/6734e6d5b31c87018276b5772e7f9e2f0608ff23.png'
    , 'https://xiukid520-1259521586.cos.ap-shanghai.myqcloud.com/xiukid/742a38fab2fb43162b337ceb29a4462309f7d33f.png'
    , 'https://xiukid520-1259521586.cos.ap-shanghai.myqcloud.com/xiukid/f14916ed54e736d1beee8b9992504fc2d462696e.png'
    , 'https://xiukid520-1259521586.cos.ap-shanghai.myqcloud.com/xiukid/fdc8e15594eef01f9fe91f54e9fe9925bd317d6e.png',
  ];
  const no = Math.round(Math.random() * 5);

  return (
    <div className={styles.midd}>

      <Avatar className={styles.avatar}
              src={av[no]}
              size={130}/>
      <div className={styles.logos}>
        <Icon type="left-circle" className={styles.icon} onClick={Pcarouser.prev}/>
        <div className={styles.imgs}>
          <div className={styles.qq}><img src={qq} alt={''} className={styles.img}/>
            <div className={styles.myQq}><img src={myQq} className={styles.myimg} alt={''}/></div>
          </div>
          <div className={styles.wechat}><img src={wechat} alt={''} className={styles.img}/>
            <div className={styles.myWechat}><img src={myWechat} className={styles.myimg} alt={''}/></div>
          </div>


          <div className={styles.sina}><img src={sina} className={styles.img}
                                            alt={''}/>
            <div className={styles.mysina}>
              {/*<img src={mySina} className={styles.mygif} alt={''}/>*/}
            </div>
          </div>
          <div className={styles.github}><img src={github} className={styles.img}
                                              alt={''}/>
            <div className={styles.mygit}><img src={mygithub} className={styles.mygif} alt={''}/></div>
          </div>
        </div>
        <Icon type="right-circle" className={styles.icon} onClick={Pcarouser.next}/>
      </div>
    </div>
  );
}


