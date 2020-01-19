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
          <title>招待状</title>
          <meta name="description" content="招待状" />
          <meta property="og:site_name" content="招待状" />
          <meta property="og:title" content="招待状" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="サムネイル画像のURLをお願い致します" />
          <meta property="og:description" content="招待状"/>
          <meta property="og:locale" content="ja_JP" />
          <link href="https://fonts.googleapis.com/css?family=Oswald|Sawarabi+Gothic&display=swap" rel="stylesheet" />
        </Helmet>
        {children}
      </>
    )
  }
}
