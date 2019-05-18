import styled from 'styled-components';
import {tablet}from 'styles/mediaQueries'
export const Title= styled.h1`
  color:${props=>props.theme.textSecondary};
  font-size:1.2rem;
  margin-top :1.4rem;
  margin-bottom:1.4rem;

`;
export const Wrapper= styled.div`
  margin-right:auto;
  margin-left:auto;
  width:85%;
  overflow:hidden;
  padding-bottom:6rem;
  height: 100%;
  ${tablet}{
    width:95%
  }
`