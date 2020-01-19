import React from 'react'

import styled from '@emotion/styled';
import { TweenMax, Power1 } from 'gsap';
import { InView } from 'react-intersection-observer';
import { black, blue, text } from '../../_style';

const Container = styled.div`
  & + & {
    margin-top: 1px;
  }
`
const Btn = styled.button`
  position: relative;
  width: 100%;
  padding: 21px;
  background: ${blue};
  font-size: 15px;
  text-align: left;
  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: ${black};
  }
  &::before {
    right: 21px;
    width: 21px;
    height: 1px;
  }
  &::after {
    right: 31px;
    width: 1px;
    height: 21px;
    transition: transform 0.5s ease;
  }
  &.is-open {
    &::after {
      transform: scale3d(1, 0, 1);
    }
  }
`
const Content = styled.div`
  height: 0;
  overflow: hidden;
  background-color: #fff;
`

const Inner = styled.div`
  padding: 21px;
  dl {
    dt, dd {
      ${text('13px', 1.4)}
    }
    dt {
      font-weight: bold;
      padding-bottom: 13px;
    }
    dd {
      & + dt {
        margin-top: 21px;
      }
      a {
        text-decoration: underline;
      }
    }
  }
`

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false}
  }

  componentDidMount() {
  }

  toggle() {
    if(this.state.isOpen) {
      this.setState({isOpen: false});
      TweenMax.to(this.content, 0.5, { height: 0 });
    } else {
      this.setState({isOpen: true});
      TweenMax.to(this.content, 0.5, { height: this.inner.clientHeight });
    }
  }

  render() {
    return (
      <Container>
        <Btn onClick={() => this.toggle()} className={this.state.isOpen ? 'is-open' : null}>{this.props.title}</Btn>
        <Content ref={div => (this.content = div)}>
          <Inner ref={div => (this.inner = div)}>
            {this.props.children}
          </Inner>
        </Content>
      </Container>
    )
  }
}
