import styled from "styled-components";

export const HomeWrapper = styled.div`
margin-top: 20px;
padding: 10px;
border:1px solid ${props => props.theme.primaryColor};

ul{
  list-style: none;
}
li{
  color:#333;
  font-size: ${props => props.theme.primarySize};
  font-style: italic;
}
`

export const ItemWrapper = styled.div.attrs({
  color:'purple',
  size:'50px'
})`

  font-size:${props => props.size};
  color:${props => props.color};
  font-weight:bolder;

`