import React from 'react'
import InView from 'react-intersection-observer';
import styled from '@emotion/styled';
import { fontHeding, white, text, black } from '../_style'

import imgMain from '../assets/img/img-main.jpg'
import iconLoader01 from '../assets/img/icon-loader-01.svg'
import iconLoader02 from '../assets/img/icon-loader-02.svg'
import iconLoader03 from '../assets/img/icon-loader-03.svg'
import ActionText from '../components/atoms/actionText';
import { TweenMax } from 'gsap';

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg, rgba(141,206,202,1) 0%, rgba(89,183,209,1) 79%);
  z-index: 999;
`

const LoaderInner = styled.div`
  position: absolute;
  top: -43px;
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
  top: 3px;
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
    top: -1px;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1em;
    margin: auto;
    line-height: 1;
  }
`

const Main = styled.div`
  position: relative;
  &::before, &::after {
    content: "";
    display: block;
  }
  &::before {
    padding-top: 100vh;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${black};
    opacity: 0;
    z-index: 1;
  }

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 40px 30px 0;
    z-index: 2;
  }
`
const MainImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${imgMain});
  background-size: cover;
`
const MainTitle = styled.h1`
  margin-bottom: 89px;
  color: ${white};
  font-size: 55px;
  font-family: ${fontHeding};
  font-weight: 300;
  letter-spacing: 0.02em;
  mix-blend-mode: color-dodge;
`
const MainTxtGrp = styled.div`
  position: absolute;
`
const MainTxt = styled.p`
  font-weight: bold;
  ${text('13px', 2)}
  & + & {
    padding-top: 34px;
  }
`

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.loader = null;
    this.loaderText = null;
    this.loaderIcon01 = null;
    this.loaderIcon02 = null;
    this.loaderIcon03 = null;
    this.state = {loadEnd: false}
  }
  componentDidMount() {
    TweenMax.to(this.loaderIcon03, 0.5, {opacity: 1, y: 0});
    TweenMax.to(this.loaderIcon02, 0.5, {opacity: 1, y: 0, delay: 0.3});
    TweenMax.to(this.loaderIcon01, 0.5, {opacity: 1, y: 0, delay: 0.6, onComplete:
      () => {
        TweenMax.to(this.loaderIcon01, 0.5, {opacity: 0, x: '-20px', y: '-20px', delay: 0.2, onComplete:
        () => {
          TweenMax.to(this.loaderText, 0.5, {height: '30px'});
          TweenMax.to(this.loaderIcon03, 0.5, {y: 30});
          TweenMax.to(this.loaderIcon02, 0.5, {y: -30, onComplete:
            () => {
              this.setState({loadEnd: true});
              TweenMax.to(this.loader, 0.8, {height: '80px'});
              TweenMax.to(this.loaderIcon02, 0.5, {y: -15, scaleX: 0.6, scaleY: 0.8});
              TweenMax.to(this.loaderIcon03, 0.5, {y: 15, scaleX: 0.6, scaleY: 0.8});
            }
          });
        }
      })}
    });
  }
  render() {
    return(
      <>
        <Loader ref={div => (this.loader = div)}>
          <LoaderInner>
            <img src={iconLoader01} ref={div => (this.loaderIcon01 = div)}/>
            <img src={iconLoader02} ref={div => (this.loaderIcon02 = div)}/>
            <img src={iconLoader03} ref={div => (this.loaderIcon03 = div)}/>
          </LoaderInner>
          <LorderText ref={div => (this.loaderText = div)} className={this.state.loadEnd ? 'is-loadend' : null}>
            <span>WEDDING INVITATION</span>
          </LorderText>
        </Loader>
        <Main>
          <MainImg></MainImg>
          <div>
            <MainTitle><ActionText>WEDDING</ActionText><ActionText>INVITATION</ActionText></MainTitle>
            <MainTxtGrp>
              <MainTxt>皆様いかがお過ごしでしょうか<br />私たちは令和元年11月23日に入籍し、<br />このたび、結婚式を執り行うこととなりました</MainTxt>
              <MainTxt>日頃お世話になっております<br />みなさまに私どもの門出を<br />お見守りいただきたくささやかながら<br />小宴を催したく存じます</MainTxt>
              <MainTxt>ご多用中、誠に恐縮ではございますが、<br />ぜひご出席いただきたく<br />ご案内申し上げます</MainTxt>
            </MainTxtGrp>
          </div>
        </Main>
        <form name="contact" method="POST" netlify='true'>
          <p>
            <label>Your Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </>
    )
  }
}

