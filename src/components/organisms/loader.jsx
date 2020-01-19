import React from 'react'
import styled from '@emotion/styled';
import InView from 'react-intersection-observer';
import { fontHeding, white, text, black } from '../../_style'
import iconLoader01 from '../../assets/img/icon-loader-01.svg'
import iconLoader02 from '../../assets/img/icon-loader-02.svg'
import iconLoader03 from '../../assets/img/icon-loader-03.svg'
import { TweenMax } from 'gsap';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
`

const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(141,206,202,1) 0%, rgba(89,183,209,1) 79%);
  -webkit-mask-size: 100% 200%;
  -webkit-mask-position: 0 50%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(to bottom,rgba(255,255,255,0) 0,#fff 20%,#fff 80%,rgba(255,255,255,0) 100%);
  will-change: -webkit-mask-position;
`
const LoaderInner = styled.div`
  position: absolute;
  top: -13%;
  bottom: 0;
  right: 0;
  left: 0;
  width: 80px;
  height: 80px;
  margin: auto;
  img {
    display: block;
    opacity: 0;
    transform: translate3d(0, 10px, 0);
    &:first-of-type {
      width: 40px;
      margin-left: auto;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    &:nth-of-type(2) {
      margin-bottom: 4px;
    }
    &:nth-of-type(3) {

    }
    &:nth-of-type(2), &:nth-of-type(3) {
      width: 100%;
    }
  }
`
const LorderText = styled.div`
  position: absolute;
  top: -6.1vh;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0;
  margin: auto;
  font-family: ${fontHeding};
  font-size: 34px;
  color: #fff;
  text-align: center;
  overflow: hidden;
  &.is-loadend {
    transition: font-size 1s ease;
    font-size: 21px;
  }
  & > span {
    display: block;
    position: absolute;
    top: -3px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1em;
    margin: auto;
    line-height: 1;
    letter-spacing: 0.02em;
  }
`


export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.loader = null;
    this.loaderText = null;
    this.loaderIcon01 = null;
    this.loaderIcon02 = null;
    this.loaderIcon03 = null;
    this.bg = null;
    disableBodyScroll();
  }
  componentDidMount() {
    this.windowH = window.innerHeight;
    TweenMax.to(this.loaderIcon03, 0.5, {opacity: 1, y: 0});
    TweenMax.to(this.loaderIcon02, 0.5, {opacity: 1, y: 0, delay: 0.3});
    TweenMax.to(this.loaderIcon01, 0.5, {opacity: 1, y: 0, delay: 0.6, onComplete:
      () => {
        TweenMax.to(this.loaderIcon01, 0.5, {opacity: 0, x: '-20px', y: '-20px', delay: 0.2, onComplete:
        () => {
          TweenMax.to(this.loaderText, 0.5, {height: '29px'});
          TweenMax.to(this.loaderIcon03, 0.5, {y: `${30 / 667 * 100}vh`});
          TweenMax.to(this.loaderIcon02, 0.5, {y: `${-32 / 667 * 100}vh`, onComplete:
            () => {
              TweenMax.to(this.bg, 1, {WebkitMaskPosition: '0 -100%', opacity: 0});
              TweenMax.to(this.loaderText.getElementsByTagName('span'), 1, {letterSpacing: '0.1em'});
              enableBodyScroll();
              this.props.changeState();
            }
          });
        }
      })}
    });
  }

  render() {
    return (
      <Container ref={div => (this.loader = div)}>
        <Bg ref={div => (this.bg = div)}></Bg>
        <LoaderInner>
          <img src={iconLoader01} ref={div => (this.loaderIcon01 = div)}/>
          <img src={iconLoader02} ref={div => (this.loaderIcon02 = div)}/>
          <img src={iconLoader03} ref={div => (this.loaderIcon03 = div)}/>
        </LoaderInner>
        <LorderText ref={div => (this.loaderText = div)}>
          <span>WEDDING INVITATION</span>
        </LorderText>
      </Container>
    );
  }
}
