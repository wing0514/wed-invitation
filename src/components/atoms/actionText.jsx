import React from 'react'
import styled from '@emotion/styled';
import { InView } from 'react-intersection-observer';
import { fontHeding, blue, black } from '../../_style';

export default class ActionText extends React.Component {
  constructor(props) {
    super(props);
    this.letters = null;
  }

  render() {
    const COLOR = this.props.isBlack ? `${black}` : '#fff';
    const Container = styled.div`
      display: inline-block;
      position: relative;
      font-family: ${fontHeding};
      font-size: 34px;
      letter-spacing: 0.13em;
      line-height: 1;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: ${blue};
        will-change: transform;
        transform-origin: right;
        transition: transform 0.9s linear 0.3s;
      }
      & > div {
        position: relative;
        margin-right: -0.1em;
        margin-top: -0.05em;
        background: linear-gradient(to right, ${COLOR} 0%, ${COLOR} 33.3333%, transparent 33.3333%, transparent 66.6666% ,${blue} 66.6666%, ${blue} 100%);
        background-size: 300% 100%;
        background-position: 100% 0;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        transition: background-position 1.2s linear;

      }
      &.is-shown {
        &::before {
          transform: scale3d(0, 1, 1);
        }
        & > div {
          background-position: 0 0;
        }
      }
    `
    return (
      <InView as={Container} onChange={(inView, entry) => {
        if (inView) { this.letters.node.classList.add('is-shown'); }
      }} ref={span => (this.letters = span)}>
        <div>{this.props.children}</div>
      </InView>
    );
  }
}
