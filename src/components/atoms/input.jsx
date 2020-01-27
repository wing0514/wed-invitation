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
    `
    return (
      <Container type={this.props.type} name={this.props.name} placeholder={this.props.placeHolder}></Container>
    );
  }
}
