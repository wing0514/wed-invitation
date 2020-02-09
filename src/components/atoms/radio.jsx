import React from 'react'
import styled from '@emotion/styled';
import icon from '../../assets/img/icon-sun.svg';
import { fontHeding, blue, black } from '../../_style';

export default class Radio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Container = styled.div`
      width: 50%;
      & + & {
        margin-left: 21px;
      }
      input[type="radio"] {
        position: absolute;
        opacity: 0;
        + label {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;
          height: 80px;
          font-size: 21px;
          line-height: 1;
          &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url(${icon});
            background-size: contain;
            background-position: center;
            transition: opacity 0.6s ease;
            opacity: 0;
          }
          span {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            font-weight: bold;
          }
        }
        &:checked {
          + label {
            &:before {
              opacity: 1;
            }
          }
        }
        &:focus {
          + label {
            &:before {
              outline: none;
            }
          }
        }
        + label {
          &:empty {
            &:before {
              margin-right: 0;
            }
          }
        }
      }
    `
    return (
      <Container>
        <input id={this.props.id} name={this.props.name} type="radio" defaultChecked={this.props.defaultChecked}/>
        <label htmlFor={this.props.id}><span>{this.props.children}</span></label>
      </Container>
    );
  }
}
