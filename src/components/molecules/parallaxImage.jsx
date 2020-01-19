import React from 'react'

import styled from '@emotion/styled';
import { TweenMax, Power1 } from 'gsap';
import { InView } from 'react-intersection-observer';

export default class ParallaxImage extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
    this.handler = this.fun.bind(this);
    this.img = null;
    this.bg = null;
    this.mask = null;
  }

  componentDidMount() {
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handler);
  }

  fun() {
    const ele = this.el;
    const level = this.props.level * 0.01;
    const t_height = ele.clientHeight;
    const screenHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;
    const offsetY = ele.getBoundingClientRect().top;
    const t_top = offsetY + scrollTop;
    const t_position = offsetY - screenHeight;
    const t_bottom = t_position + t_height;
    const moveDis = this.props.fixed ? Math.floor(scrollTop * level * 100) / 100 : Math.floor((scrollTop - t_top + (screenHeight - t_height) / 2) * level * 100) / 100;
    const direction = this.props.down ? -1 : 1;
    let ticking = false;
    let animation;
    if (!ticking) {
      animation = window.requestAnimationFrame(() => {
        const duration = 0.4;
        ticking = false;

        if (-screenHeight <= t_bottom && t_position < 0) {
          TweenMax.to(ele, duration, {
            y: -moveDis * direction,
          });
        }
      });

      ticking = true;
    } else {
      window.cancelAnimationFrame(animation);
    }
  }

  parallax(e) {
    if(e.isIntersecting) {
      window.addEventListener('scroll', this.handler);
    } else {
      window.removeEventListener('scroll', this.handler);
    }
  }

  render() {
    const Container = styled.div`
      & > div {
        height: 100%;
        will-change: transform;
      }
    `
    return (
      <InView as={Container} onChange={(inView, entry) => {
        this.parallax(entry);
        }} className='m-parallax-image'>
        <div ref={div => this.el = div}>
          {this.props.children}
        </div>
      </InView>
    )
  }
}
