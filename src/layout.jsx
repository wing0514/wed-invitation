import React from 'react'
import Helmet from 'react-helmet'

import { Global, css } from '@emotion/core'
import { black } from './_style'
import Loader from './components/organisms/loader';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.classList.add('is-loaded');
  }
  render() {
    const { children, location } = this.props;
    return(
      <>
        <Global styles={css`
          body {
            color: ${black};
            font-size: 13px;
          }
        `}>
        </Global>
        <Helmet>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>結婚式・披露宴・二次会案内</title>
          <meta name="description" content="永井 翼・茜の結婚式の案内です。" />
          <link href="https://fonts.googleapis.com/css?family=Oswald|Sawarabi+Gothic&display=swap" rel="stylesheet" />
          <script src="https://zipaddr.github.io/zipaddrj.js" charSet="UTF-8"></script>
        </Helmet>
        {children}
      </>
    )
  }
}
