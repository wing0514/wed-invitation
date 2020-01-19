import React from 'react'
import styled from '@emotion/styled';

import { fontHeding, white, text, black } from '../../_style'
import imgMain01 from '../../assets/img/img-main-01.jpg'
import imgMain02 from '../../assets/img/img-main-02.jpg'
import imgMain03 from '../../assets/img/img-main-03.jpg'
import imgMain04 from '../../assets/img/img-main-04.jpg'
import imgMain05 from '../../assets/img/img-main-05.jpg'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  & + div {
    margin: 89px 0;
  }
`
const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: auto;
  height: 100%;
  margin: auto;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease;
  &.is-active {
    opacity: 1;
  }
  &.is-active, &.is-after {
    animation: zoom 6s linear 0.5s both;
  }
  @keyframes zoom {
    0% {
      transform: scale3d(1, 1, 1);
    }
    100% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }
`

export default class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 0}
    this.once = false;
  }
  componentDidUpdate() {
    if(this.props.isLoadEnd) {
        if(this.once) return;
        this.once = true;
        this.setState({active: 1});
        setInterval(() => {
            const activeNum = this.state.active;
            this.setState({active: activeNum === 5 ? 1 : activeNum + 1});
        }, 6000);
    }
  }
  render() {
    return (
      <Container ref={div => (this.loader = div)}>
        <Inner src={imgMain01} className={this.state.active === 1 ? 'is-active' : this.state.active === 2 ? 'is-after' : null}></Inner>
        <Inner src={imgMain02} className={this.state.active === 2 ? 'is-active' : this.state.active === 3 ? 'is-after' : null}></Inner>
        <Inner src={imgMain03} className={this.state.active === 3 ? 'is-active' : this.state.active === 4 ? 'is-after' : null}></Inner>
        <Inner src={imgMain04} className={this.state.active === 4 ? 'is-active' : this.state.active === 5 ? 'is-after' : null}></Inner>
        <Inner src={imgMain05} className={this.state.active === 5 ? 'is-active' : this.state.active === 1 ? 'is-after' : null}></Inner>
      </Container>
    );
  }
}
