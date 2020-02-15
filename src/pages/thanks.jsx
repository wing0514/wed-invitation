import React from 'react'
import InView from 'react-intersection-observer';
import styled from '@emotion/styled';
import { fontHeding } from '../_style'
import { Link } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(0deg, rgba(141,206,202,1) 0%, rgba(89,183,209,1) 79%);
  font-family: ${fontHeding};
  color: #fff;
  overflow: hidden;
  h1 {
    font-size: 34px;
    font-weight: normal;
    margin-bottom: 89px;
    perspective: 100px;
    span {
      display: inline-block;
      min-width: 0.5em;
      transform: translate3d(100px, 0, 0) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
      transition: transform 0.6s ease, opacity 0.6s ease;
    }
    .is-shown & {
      span {
        opacity: 1;
        transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0deg);
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    left: 1px;
    font-size: 21px;
    opacity: 0;
    transition: opacity 0.6s ease;
    .is-shown & {
      opacity: 1;
    }
    &::before{
      content: "";
      display: block;
      width: 7px;
      height: 7px;
      margin-top: 3px;
      margin-right: 13px;
      border-top: 1px solid #fff;
      border-right: 1px solid #fff;
      transform: rotate(-135deg);
    }
  }
`

export default class Thanks extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      document.body.classList.add('is-shown');
    }, 500)
  }
  render() {
    return(
      <Container>
        <h1>
        {("Thank you!!!!!").split('').map((val, i) => {
          return (<span key={i} style={{'transitionDelay': `${i * 0.05}s`}}>{val}</span>);
        })}</h1>
        <Link to={'/'}>Back</Link>
      </Container>
    )
  }
}

