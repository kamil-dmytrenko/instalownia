import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import Icon from "antd/es/icon"

const Dropdown = ({className, label, items}) => {
  const [itemsVisible, setItemsVisible] = useState(false);

  return (
      <Menu>
        <DropdownButton onClick={() => setItemsVisible(!itemsVisible)}>
          {label}<Icon type={itemsVisible ? "up" : "down"} />
        </DropdownButton>
        <DropdownList visible={itemsVisible}>
          {items && items.map((item, index) => (
            <Link className={`dropdown-item ${index}`}>
              {item}
            </Link>
          ))}
        </DropdownList>
      </Menu>
    )
};

const StyledDropdown = styled(Dropdown)`
  display: flex;
  flex-direction: row;
`;
const Menu = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 700px) {
    padding-top: 0;
    flex-direction: row;
    justify-content: space-evenly;
  };
`;
const DropdownButton = styled('div')`
  cursor: pointer;
  font-family: 'Slabo 27px', serif;
  font-size: larger;
  text-transform: uppercase;
  color: black;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const DropdownList = styled('ul')`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  overflow: hidden;
  ${props => props.visible && css`
display: block;
    max-height: 500px;
    transition: max-height 0.25s ease-in;
  `}
`;
const Link = styled('li')`
display:block;/*make the link a block element...*/
width:150px;/*...with a fixed width...*/
line-height:30px;/*...and set the line-height to vertically centre the text*/
text-align:center;/*horizontally centre the text...*/
background-color:#EA9531;/*give the link an orange background...*/
border:1px solid white/*...and a white border...*/
  font-family: 'Slabo 27px', serif;
  font-size: larger;
  color: black;
  text-decoration: none;
  padding: 0.3em 0.3em 0;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0 1px;
  transition: background-size .3s;
  
  &:hover {
    color: black;
    cursor: pointer;
    background-size: 100% 1px;
  };
  @media screen and (min-width: 350px) and (max-width: 700px) {
    padding: 10px;
  };
`;

export {StyledDropdown as Dropdown};
