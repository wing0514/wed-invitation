export default class WindowManager {
  constructor() {
    this.getUa = navigator.userAgent.toLowerCase();
    this.bodyClass = document.body.classList;
    this.ua = {
      device: '',
      browser: ''
    };
    this.init();

    window.addEventListener('resize', () => {
      this.init();
    });
  }

  init() {
    this.device();
    this.browser();
    if (this.ua.device === 'tablet') {
      document
        .querySelector('meta[name="viewport"]')
        .setAttribute('content', 'width=1280,shrink-to-fit=yes');
    }
    if(window.innerWidth < 375) {
      document
        .querySelector('meta[name="viewport"]')
        .setAttribute('content', 'width=375,shrink-to-fit=yes');
    }
  }

  device() {
    if (this.getUa.indexOf('iphone') > 0 || (this.getUa.indexOf('android') > 0 && this.getUa.indexOf('mobile') > 0)) {
      // Smart Phone
      this.bodyClass.add('is-sp');
      this.ua.device = 'sp';

      if (this.getUa.indexOf('iphone') > 0) this.bodyClass.add('is-iphone'); // iPhone
      if (this.getUa.indexOf('android') > 0) this.bodyClass.add('is-android'); // Android
    } else if (this.getUa.indexOf('ipad') > 0 || this.getUa.indexOf('android') > 0) {
      // Tablet
      this.bodyClass.add('is-tablet');
      this.ua.device = 'tablet';
      if (this.getUa.indexOf('ipad') > 0) this.bodyClass.add('is-ipad'); // iPad
      if (this.getUa.indexOf('android') > 0) this.bodyClass.add('is-android'); // Android
    } else {
      // PC
      this.bodyClass.add('is-pc');
      this.ua.device = 'pc';
    }
  }

  browser() {
    if (this.getUa.indexOf('edge') !== -1) {
      this.bodyClass.add('is-edge');
      this.ua.browser = 'edge';
    } else if (this.getUa.indexOf('iemobile') !== -1) {
      this.bodyClass.add('is-iemobile');
      this.ua.browser = 'iemobile';
    } else if (this.getUa.indexOf('trident/7') !== -1) {
      this.bodyClass.add('is-ie11');
      this.ua.browser = 'ie11';
    } else if (this.getUa.indexOf('chrome') !== -1 && this.getUa.indexOf('edge') === -1) {
      this.bodyClass.add('is-chrome');
      this.ua.browser = 'chrome';
    } else if (this.getUa.indexOf('safari') !== -1 && this.getUa.indexOf('chrome') === -1) {
      this.bodyClass.add('is-safari');
      this.ua.browser = 'safari';
    } else if (this.getUa.indexOf('opera') !== -1) {
      this.bodyClass.add('is-opera');
      this.ua.browser = 'opera';
    } else if (this.getUa.indexOf('firefox') !== -1) {
      this.bodyClass.add('is-firefox');
      this.ua.browser = 'firefox';
    } else this.bodyClass.add('is-unknown_browser');
  }
}
