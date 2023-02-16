import styled from "styled-components";

import { primaryColor,primaryBgc } from './style/variables'

export const  AppWrapper = styled.div`
  padding: 10px;
`

export const HeadWrapper = styled.div`
  .title{
    color:${props => props.color};
    font-size: ${props => props.size};
  }
  .des{
    padding: 10px 20px;
    color: ${primaryColor};
    background-color: ${primaryBgc};
    border: 1px solid skyblue;
  }
`