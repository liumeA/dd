import React from 'react';
import { Layout } from 'antd';
import Topbar from '@/components/Topbar/Topbar';
import Pcarouser from '@/components/TopCarouser/Pcarouser';
import styles from './index.css';


const { Header, Content, Footer } = Layout;


function BasicLayout(props) {


  return (

    <div>

      <Layout className={'layout'}>

        <Header className={styles.header} id={'header'}>
          <Topbar/>
        </Header>
        <Pcarouser/>
        <Content id={'content'} style={{ padding: '0 50px', minHeight: '1080px' }}>
          <div style={{
            background: '#fff',
            padding: 24,
          }}> {props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>豫ICP备19026790</Footer>
      </Layout>
    </div>

  );
}

isScale();
window.onscroll = function() {
  var h = document.getElementById('content').offsetTop;
  var so = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

  if (so > h) {
    document.getElementById('header').className = styles.header_c;
  } else {
    document.getElementById('header').className = styles.header;

  }
};

function detectZoom() {
  var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  if (ratio) {
    ratio = Math.round(ratio * 100);
  }

  return ratio;
}

document.addEventListener('DOMContentLoaded', function(event) {
  // chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
  document.body.style.zoom = 'reset';
  document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey === true || event.metaKey === true)
      && (event.which === 61 || event.which === 107
        || event.which === 173 || event.which === 109
        || event.which === 187 || event.which === 189)) {
      event.preventDefault();
    }
  }, false);
  document.addEventListener('mousewheel DOMMouseScroll', function(event) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }
  }, false);
}, false);

//判断PC端浏览器缩放比例不是100%时的情况
function isScale() {
  var rate = detectZoom();
  // if (rate !== 100 ) {
  //如何让页面的缩放比例自动为100,'transform':'scale(1,1)'没有用，又无法自动条用键盘事件，目前只能提示让用户如果想使用100%的比例手动去触发按ctrl+0
  console.log(1);
  // alert('当前页面不是100%显示，请按键盘ctrl+0恢复100%显示标准，以防页面显示错乱！');
  set();
  // }
}

window.onresize = function() {
  isScale();
};

function set() {
  var size = detectZoom();
  //document.body.style.cssText = document.body.style.cssText + '; -webkit-transform: scale(' + size + ');-webkit-transform-origin: 0 0;';
  //document.body.style.cssText = document.body.style.cssText + '; -webkit-transform: scale(' + size + '); ';
  //$(body).css("width","120%);
  document.body.style.zoom = 1 / (size / 100.0);
  document.body.style.cssText += '; -moz-transform: scale(' + size + ');-moz-transform-origin: 0 0; ';     //
}

export default BasicLayout;
