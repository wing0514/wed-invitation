import React from 'react'
import InView from 'react-intersection-observer';
import styled from '@emotion/styled';
import { fontHeding, white, text, black, blue, fontOswald } from '../_style'

import imgMain from '../assets/img/img-main-01.jpg'
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
import Input from '../components/atoms/input';

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
  padding: 89px 34px;
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
  ${props => props.schedule && `margin: 89px -34px 55px;`}
  ${props => props.schedule && `padding: 0;`}
  ${props => props.schedule && `background-image: url(${imgschedule});`}
  ${props => props.schedule && `background-size: cover;`}
  ${props => props.schedule && `& > div { padding: 89px 34px };`}
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
  margin: 21px auto;
  & > div {
    position: relative;
  }
`
const ProfileName = styled.div`
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
`

export default class Top extends React.Component {
  constructor(props) {
    super(props);
    this.mainTxtGrp = null;
    this.state = {isLoadEnd: false};
  }
  loadEnd() {
    this.setState({isLoadEnd: true});
  }
  render() {
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

                </div>
              </ProfileTxts>

            </ProfileBlock>
            <ProfileBlock>
              <ProfileImg src={imgProfile02}></ProfileImg>
              <ProfileTxts>
                <div>
                  <ProfileName>茜<span>AKANE</span></ProfileName>
                </div>
              </ProfileTxts>
            </ProfileBlock>
          </Section>
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
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12961.821516322088!2d139.782024!3d35.69041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbb7d8f1b6ba409fb!2z5p2x5Lqs44Ki44OV44Ot44OH44Kj44OG!5e0!3m2!1sja!2sjp!4v1579433285832!5m2!1sja!2sjp" width="600" height="450" frameBorder="0" allowFullScreen=""></iframe>
            </InfoMap>
          </Section>
          <Section>
            <SectionTitle><ActionText>ENTRY</ActionText></SectionTitle>
            <Form>
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <h4>名前</h4>
                <p>
                  <label><Input type="text" name="last-name" placeHolder="姓"/></label>
                  <label>名<Input type="text" name="first-name" /></label>
                </p>
                <h4>ふりがな</h4>
                <p>
                  <label>せい<Input type="text" name="last-name-kana" /></label>
                  <label>めい<Input type="text" name="first-name-kana" /></label>
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
            </Form>
          </Section>
        </Body>
      </Container>
    )
  }
}

