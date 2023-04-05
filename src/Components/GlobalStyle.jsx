import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: '양진체';
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


    body{
        font-family : '양진체', cursive;
        padding-top : 1em;
        white-space : pre-wrap;
    }

    ul, ol{
        list-style : none;
        padding-left : 0px;
    }
`;

export default GlobalStyle;
