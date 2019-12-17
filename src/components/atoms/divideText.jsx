import React from 'react'
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { InView } from 'react-intersection-observer';

export default class DivideText extends React.Component {
  constructor(props) {
    super(props);
    this.letters = null;
  }

  createCSS() {
    let styles = '';
    for (let i = 0; i < this.props.children.split('').length; i += 1) {
      const x = Math.floor( Math.random() * ( 15 ) - 5);
      const y = Math.floor( Math.random() * ( 80 - 40 ) + 40);
      const rotate = Math.floor( Math.random() * ( 15 ) - 5);
      styles += `
        &:nth-of-type(${i + 1}) {
          transform: translate3d(${x}px, -${y}px, 0) rotate3d(0, 0, 1, ${rotate}deg);
        }
      `
    }
    return css`${styles}`;
  }

  render() {
    const Letter = styled.span`
      display: inline-block;
      ${this.createCSS()};
      opacity: 0;
      transition: transform 2s ease 0.5s, opacity 1.6s ease 0.5s;
      .is-shown & {
        opacity: 1;
        transform: translate3d(0, 0 ,0) rotate3d(0, 0, 0, 0deg)
      }
    `
    return (
      <InView onChange={(inView, entry) => {
        if (inView) { this.letters.node.classList.add('is-shown'); }
      }} ref={span => (this.letters = span)}>
        {this.props.children.split('').map((val, i) => {
          return (<Letter key={i}>{val}</Letter>);
        })}
      </InView>
    );
  }
}
