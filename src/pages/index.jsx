import React from 'react'
import InView from 'react-intersection-observer';
import styled from '@emotion/styled';
import { fontHeding, green, text, black, blue, fontOswald, white } from '../_style'

import imgProfile01 from '../assets/img/img-tsu.jpg'
import imgProfile02 from '../assets/img/img-ak.jpg'
import ActionText from '../components/atoms/actionText';
import Loader from '../components/organisms/loader';
import MainSlider from '../components/organisms/mainSlide';
import Accordion from '../components/molecules/Accordion';
import iconafterparty from '../assets/img/icon-afterparty.svg'
import iconparty from '../assets/img/icon-party.svg'
import iconreseption from '../assets/img/icon-reseption.svg'
import iconwedding from '../assets/img/icon-wedding.svg'
import imgschedule from '../assets/img/img-schedule.jpg'
import imgentry from '../assets/img/img-entry.jpg'
import Radio from '../components/atoms/radio';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import imgSlide01 from '../assets/img/img-slide-01.jpg';
import imgSlide02 from '../assets/img/img-slide-02.jpg';
import imgSlide03 from '../assets/img/img-slide-03.jpg';
import imgSlide04 from '../assets/img/img-slide-04.jpg';
import imgSlide05 from '../assets/img/img-slide-05.jpg';
import imgSlide06 from '../assets/img/img-slide-06.jpg';
import imgSlide07 from '../assets/img/img-slide-07.jpg';
import imgSlide08 from '../assets/img/img-slide-08.jpg';
import imgSlide09 from '../assets/img/img-slide-09.jpg';
import imgSlide10 from '../assets/img/img-slide-10.jpg';
import * as AutoKana from 'vanilla-autokana';

let pictures = [
  imgSlide01,
  imgSlide02,
  imgSlide03,
  imgSlide04,
  imgSlide05,
  imgSlide06,
  imgSlide07,
  imgSlide08,
  imgSlide09,
  imgSlide10
]

for (let i = pictures.length - 1; i >= 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [pictures[i], pictures[j]] = [pictures[j], pictures[i]];
}

const Container = styled.div`
`
const Main = styled.div`
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 100vh;
  }
`
const MainTxtGrp = styled.div`
  margin: 55px 0;
  text-align: center;
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
const MainTxt = styled.p`
  display: block;
  ${text('13px', 2)}
  opacity: 0;
  filter: blur(0.8);
  transform: translate3d(0, 30%, 0);
  transition: opacity 0.8s ease, filter 1s ease, transform 1s ease;
  transition-delay: 0.5s;
  will-change: opacity, filter, transform;
  .is-shown & {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0);
  }
  & + & {
    padding-top: 55px;
  }
  &:nth-of-type(2) {
    transition-delay: 0.8s;
  }
  &:nth-of-type(3) {
    transition-delay: 1.1s;
  }
`

const Body = styled.div`
  position: relative;
  padding: 89px 34px 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${black};
    opacity: 0.5;
  }
`
const Section = styled.section`
  position: relative;
  padding-top: 21px;
  color: #fff;

  color: ${props => props.schedule ? `${black}` : `#fff`};
  ${props => props.schedule && `margin: 0 -34px 55px;`}
  ${props => props.entry && `margin: 89px -34px 0;`}
  ${props => (props.schedule || props.entry) && `padding: 0;`}
  ${props => props.schedule && `background-image: url(${imgschedule});`}
  ${props => props.entry && `background-image: url(${imgentry});`}
  ${props => (props.schedule || props.entry) && `background-size: cover;`}
  ${props => (props.schedule || props.entry) && `& > div { position: relative; padding: 89px 34px };`}
  ${props => props.schedule && `
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.3;
  }`}
  & + & {
    margin-top: 89px;
  }
  h3 {
    margin: 21px 0;
    font-family: ${fontHeding};
    font-size: 21px;
    font-weight: normal;
    &::before {
      content: "";
      display: inline-block;
      width: 1em;
      height: 2px;
      margin-right: 3px;
      background: linear-gradient(90deg, rgba(141,206,202,1) 0%, rgba(89,183,209,1) 79%);
    }
  }
`
const SectionTitle = styled.h2`
  margin-bottom: 34px;
  line-height: 1;
  font-weight: normal;
`

const Date = styled.div`
  font-family: ${fontHeding};
  font-size: 21px;
  span {
    color: ${blue};
  }
`
const Schedule = styled.div`
`

const ScheduleItem = styled.dl`
  font-size: 13px;
  line-height: 1;
  & + dl {
    margin-top: 21px;
  }
  dt {
    margin-bottom: 13px;
    font-family: ${fontHeding};
    font-size: 21px;
  }
  dd {
    display: flex;
    align-items: center;
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      width: 34px;
      height: 34px;
      margin-right: 13px;
      background-size: contain;
      background-image: url(${props => props.icon});
    }
    span {
      display: block;
      margin-top: 8px;
      font-family: ${fontHeding};
      font-size: 21px;
    }
  }
`

const ProfileBlock = styled.div`

`
const ProfileImg = styled.div`
  width: 100%;
  margin: auto;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  &::before {
    content: "";
    display: block;
    padding-top: ${1 / 1.618 * 100}%;
  }
`
const ProfileTxts = styled.div`
  position: relative;
  width: 100%;
  margin: 21px auto 34px;
  & > div {
    position: relative;
  }
`
const ProfileName = styled.div`
  margin-bottom: 13px;
  font-size: 21px;
  line-height: 1;
  span {
    display: inline-block;
    margin-left: 8px;
    font-size: 13px;
    font-family: ${fontOswald};
    font-weight: normal;
    line-height: 1;
  }
`

const InfoMap = styled.div`
  position: relative;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Form = styled.div`
  h4 {
    margin-bottom: 8px;
  }
  button[type="submit"] {
    display: block;
    width: 144px;
    margin: 34px auto 0;
    padding: 13px;
    background: linear-gradient(to right, ${blue}, ${green});
    font-size: 21px;
    font-family: ${fontHeding};
    line-height: 1;
    letter-spacing: 0.3em;
  }
`
const FormCol = styled.div`
  display: flex;
  ${props => props.center && `justify-content: center;`}
  & + h4 {
    margin-top: 21px;
  }
  textarea {
    width: 100%;
    padding: 8px;
    background-color: #fff;
    &:focus {
      outline: none;
    }
  }
`

const CarouselWrapper = styled.div`
  margin: 89px -34px 0;
  .carousel.carousel-slider {
    .slide {
      opacity: 0;
      transition: opacity 0.8s ease;
      &.selected {
        opacity: 1;
        transition-delay: 0.5s;
      }
    }
    .slider.animated {
      transition-timing-function: cubic-bezier(.13,.42,.35,.94);
    }
    .control-dots .dot {
      box-shadow: 0px 0px 11px ${white};
      background: linear-gradient(to right, ${blue}, ${green});
      &:focus {
        outline: none;
      }
    }
    .control-arrow {
      opacity: 1;
      &::before {
        position: relative;
        z-index: 10;
      }
      &:hover {
        background: inherit;
      }
    }
    .control-next.control-arrow:before, .control-prev.control-arrow:before {
      border-top-width: 13px;
      border-bottom-width: 13px;
    }
    .control-next.control-arrow:before {
      border-left-width: 8px;
      border-left-color: ${green};
    }
    .control-prev.control-arrow:before {
      border-right-width: 8px;
      border-right-color: ${blue};
    }
  }
`

const Input = styled.input`
  padding: 8px;
  background-color: #fff;
  box-sizing: border-box;
  width: ${props => props.isHalf ? '50%' : '100%'};
  &::placeholder {
    color: ${blue};
  }
  &:focus {
    outline: none;
  }
  & + & {
    margin-left: 8px;
  }
`

let autokana01, autokana02;
export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.mainTxtGrp = null;
    this.state = {isLoadEnd: false, name01: '' , name02: '', furigana01: '', furigana02: '',};
    this.handleNameInput = this.handleNameInput.bind(this);
  }
  componentDidMount() {
    autokana01 = AutoKana.bind('#last-name', '#last-name-kana');
    autokana02 = AutoKana.bind('#first-name', '#first-name-kana');
  }
  handleNameInput(ev) {
    if(ev.target.getAttribute('name') === 'last-name') {
      this.setState({
        name01: ev.target.value,
        furigana01: autokana01.getFurigana(),
      });
    } else if(ev.target.getAttribute('name') === 'first-name') {
      this.setState({
        name01: ev.target.value,
        furigana01: autokana02.getFurigana(),
      });
    }
  }
  loadEnd() {
    this.setState({isLoadEnd: true});
  }
  autoInput() {

  }
  render() {
    const sliderSettings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return(
      <Container>
        <Loader changeState={() => this.loadEnd()}></Loader>
        <Main>
          <MainSlider isLoadEnd={this.state.isLoadEnd}></MainSlider>
        </Main>
        <Body>
          <Section>
            <div>
              <InView as={MainTxtGrp} ref={div => this.mainTxtGrp01 = div} onChange={(inView, entry) => {if (inView) { this.mainTxtGrp01.node.classList.add('is-shown'); }}}>
                <MainTxt>皆様いかがお過ごしでしょうか<br />私たちは令和元年11月23日に入籍し、<br />このたび、結婚式を執り行うこととなりました</MainTxt>
              </InView>
              <InView as={MainTxtGrp} ref={div => this.mainTxtGrp02 = div} onChange={(inView, entry) => {if (inView) { this.mainTxtGrp02.node.classList.add('is-shown'); }}}>
                <MainTxt>日頃お世話になっております<br />みなさまに私どもの門出を<br />お見守りいただきたくささやかながら<br />小宴を催したく存じます</MainTxt>
              </InView>
              <InView as={MainTxtGrp} ref={div => this.mainTxtGrp03 = div} onChange={(inView, entry) => {if (inView) { this.mainTxtGrp03.node.classList.add('is-shown'); }}}>
                <MainTxt>ご多用中、誠に恐縮ではございますが、<br />ぜひご出席いただきたく<br />ご案内申し上げます</MainTxt>
              </InView>
            </div>
          </Section>
          <Section>
            <SectionTitle><ActionText>PROFILE</ActionText></SectionTitle>
            <ProfileBlock>
              <ProfileImg src={imgProfile01}></ProfileImg>
              <ProfileTxts>
                <div>
                  <ProfileName>翼<span>TSUBASA</span></ProfileName>
                  <p>永井翼（25歳）<br />★おうし座 ★A型 ★身長･･･170cm ★趣味･･･筋トレ・深夜ラジオを聴く ★好きな映画･･･ディズニー・マーベル・スターウォーズ ★言語･･･日本語・HTML・CSS・JavaScript ★座右の銘･･･なんとかなる</p>
                </div>
              </ProfileTxts>

            </ProfileBlock>
            <ProfileBlock>
              <ProfileImg src={imgProfile02}></ProfileImg>
              <ProfileTxts>
                <div>
                  <ProfileName>茜<span>AKANE</span></ProfileName>
                  <p>堀内茜（25際）<br />★みずがめ座　★血液型･･･O型　★身長･･･154cm　★趣味･･･海外旅行　★好きな映画･･･Seventeen Again ★言語･･･日本語・Java・JavaScript・SQL・JSP ★別名･･･デブ電車BOT</p>
                </div>
              </ProfileTxts>
            </ProfileBlock>
          </Section>
          <CarouselWrapper>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop transitionTime={800}>
              {
                pictures.map((item, i) => {
                  return(<div key={i}><img src={item} /></div>)
                })
              }
            </Carousel>
          </CarouselWrapper>
          <Section schedule>
            <div>
              <SectionTitle><ActionText isBlack>SCHEDULE</ActionText></SectionTitle>
              <h3>DATE</h3>
              <Date>2020.4.11 <span>Sat.</span></Date>
              <h3>TIMETABLE</h3>
              <Schedule>
                <ScheduleItem icon={iconreseption}>
                  <dt>14:45 ~</dt>
                  <dd><div>受付開始<span>START ACCEPTING</span></div></dd>
                </ScheduleItem>
                <ScheduleItem icon={iconwedding}>
                  <dt>15:45 ~</dt>
                  <dd><div>挙式<span>WEDDING</span></div></dd>
                </ScheduleItem>
                <ScheduleItem icon={iconparty}>
                  <dt>16:45 ~</dt>
                  <dd><div>披露宴<span>RECEPTION</span></div></dd>
                </ScheduleItem>
                <ScheduleItem icon={iconafterparty}>
                  <dt>20:00 ~</dt>
                  <dd><div>二次会<span>SECOND PARTY</span></div></dd>
                </ScheduleItem>
              </Schedule>
            </div>
          </Section>
          <Section>
            <SectionTitle><ActionText>ACCESS</ActionText></SectionTitle>
            <Accordion title={'所在地'}>
              <dl>
                <dt>施設名</dt>
                <dd>AFRODITE<br />東京 アフロディテ</dd>
                <dt>住所</dt>
                <dd>〒103-0006<br />東京都中央区日本橋富沢町12-13</dd>
                <dt>公式サイト</dt>
                <dd><a href="https://www.bestbridal.co.jp/tokyo/afrodite_nihonbashi/" target='_blank'>URL</a></dd>
              </dl>
            </Accordion>
            <Accordion title={'電車をご利用の場合'}>
              <dl>
                <dt>JR総武快速線</dt>
                <dd>馬喰町駅　西口経由A3出口　徒歩2分</dd>
                <dt>都営新宿線</dt>
                <dd>馬喰横山駅　A3出口　徒歩2分</dd>
                <dt>都営浅草線</dt>
                <dd>東日本橋駅　A3出口　徒歩2分</dd>
                <dt>日比谷線</dt>
                <dd>小伝馬町駅　1番または3番出口　徒歩5分</dd>
              </dl>
            </Accordion>
            <Accordion title={'タクシーをご利用の場合'}>
              <dl>
                <dt>東京駅八重洲中央口より乗車</dt>
                <dd>外堀通り経由江戸通りの馬喰町交差点を右折し清州橋通り3つ目の信号を右折 200m先右側</dd>
              </dl>
            </Accordion>
            <h3>MAP</h3>
            <InfoMap>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.455379885228!2d139.7798353157626!3d35.69040998019219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889528c6f796d%3A0xbb7d8f1b6ba409fb!2z5p2x5Lqs44Ki44OV44Ot44OH44Kj44OG!5e0!3m2!1sja!2sjp!4v1581252207376!5m2!1sja!2sjp" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
            </InfoMap>
          </Section>
          <Section entry>
            <div>
              <SectionTitle><ActionText bg={'#fff'}>ENTRY</ActionText></SectionTitle>
              <Form>
                <form name="contact" method="POST" data-netlify="true" action='thanks'>
                  <input type="hidden" name="form-name" value="contact" />
                  <h4>挙式・披露宴</h4>
                  <FormCol center>
                    <Radio name="wedding-attend" id="attend-01" value="出席" defaultChecked>出席</Radio>
                    <Radio name="wedding-attend" id="decline-01" value="欠席">欠席</Radio>
                  </FormCol>
                  <h4>二次会</h4>
                  <FormCol center>
                    <Radio name="party-attend" id="attend-02" value="出席" defaultChecked>出席</Radio>
                    <Radio name="party-attend" id="decline-02" value="欠席">欠席</Radio>
                  </FormCol>
                  <h4>名前</h4>
                  <FormCol>
                    <Input type="text" name="last-name" id="last-name" placeholder="姓" isHalf/>
                    <Input type="text" name="first-name" id="first-name" placeholder="名" isHalf/>
                  </FormCol>
                  <h4>ふりがな</h4>
                  <FormCol>
                    <Input type="text" name="last-name-kana" id="last-name-kana" placeholder='せい' isHalf/>
                    <Input type="text" name="first-name-kana" id="first-name-kana" placeholder='めい' isHalf/>
                  </FormCol>
                  <h4>郵便番号</h4>
                  <FormCol>
                    <Input type="text" name="zip-code" id="zip" placeholder='000-0000' isHalf/>
                  </FormCol>
                  <h4>住所</h4>
                  <FormCol>
                    <Input type="text" name="address" id="addr"/>
                  </FormCol>
                  <h4>メッセージ</h4>
                  <FormCol>
                    <textarea name="message" cols="30" rows="5"></textarea>
                  </FormCol>
                  <h4>その他（ご要望・アレルギーなど）</h4>
                  <FormCol>
                    <textarea name="other" cols="30" rows="5"></textarea>
                  </FormCol>
                  <button type="submit">SEND</button>
                </form>
              </Form>
            </div>
          </Section>
        </Body>
      </Container>
    )
  }
}

