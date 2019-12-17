import React from 'react'
import styled from '@emotion/styled';
import { InView } from 'react-intersection-observer';

export default class ActionText extends React.Component {
  constructor(props) {
    super(props);
    this.letters = null;
  }

  render() {
    const Container = styled.div`
      position: relative;
      & > div {
          &:first-of-type {
              opacity: 0;
          }
          &:last-of-type {
              position: absolute;
              top: 0;
              left: 0;
              white-space: nowrap;
          }
      }
    `
    return (
      <InView as={Container} onChange={(inView, entry) => {
        if (inView) { this.letters.node.classList.add('is-shown'); }
      }} ref={span => (this.letters = span)}>
        <div><div>{this.props.children}</div></div>
        <div><div>{this.props.children}</div></div>
      </InView>
    );
  }
}
