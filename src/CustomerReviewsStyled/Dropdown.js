import React, { useState } from "react";
import styled from "styled-components";
import './../index.css'

const Main = styled.div`
    display: flex;
    flex-direction: row;
    background:white;
    color: #5C5C5C;
    border: 1px solid #EAEAEA; 
    font-size: 14px; 
    font-family: Roboto-Medium;
    text-transform: none;
`;

const DropDownContainer = styled.div`

`;

const DropDownHeader = styled.div`
   color: #5C5C5C;
   border: 1px solid #EAEAEA;
   font-size: 14px;
   font-family: Roboto-Regular; 
   text-transform: none; 
   padding: 0.5em 1em;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  box-sizing: border-box;
  color: #5C5C5C;
 border: 1px solid #EAEAEA; 
 font-size: 14px; 
 font-family: Roboto-Medium;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>All Reviews
        <img width="10px" style={{ marginLeft: '0.75rem' }} src={require('./../assets/Reviews/Icon_material-navigate-next.svg')} />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem>Mangoes</ListItem>
              <ListItem>Apples</ListItem>
              <ListItem>Oranges</ListItem>
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  );
}
