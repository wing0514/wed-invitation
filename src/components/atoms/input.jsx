import React from 'react'
import styled from '@emotion/styled';
import { fontHeding, blue, black } from '../../_style';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Container = styled.input`
      padding: 8px;
      background-color: #fff;
      box-sizing: border-box;
      width: ${this.props.isHalf ? '50%' : '100%'};
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
    return (
      <Container type={this.props.type} name={this.props.name} placeholder={this.props.placeHolder} id={this.props.id}></Container>
    );
  }
}
