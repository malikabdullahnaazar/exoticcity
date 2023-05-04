import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;


 
  &:hover {
    color: #2BC0FA;
    border-left: 4px solid #2BC0FA;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  
`;

const DropdownLink = styled(Link)`

display: flex;
color: #e1e9fc;
justify-content: space-between;
align-items: center;
padding: 20px;
list-style: none;
height: 60px;
text-decoration: none;
font-size: 18px;



&:hover {
  color: #2BC0FA;
  border-left: 4px solid #2BC0FA;
  cursor: pointer;
}
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [subnavv, setSubnavv] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const showSubnavv = () => setSubnavv(!subnavv);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel className='text-black'>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (<>
            <DropdownLink to={item.path} key={index} onClick={item.subNav && showSubnavv}>
              <SidebarLabel className='text-black mx-3'>{item.title}</SidebarLabel>
              {item.subNav && subnavv
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </DropdownLink>
            {subnavv &&
              item.subNav.map((item, index) => {
                return (<>
                  <DropdownLink to={item.path} key={index} >
                    <SidebarLabel className='text-black mx-3'>{item.title}</SidebarLabel>
                  </DropdownLink>
                </>
                );
              })}


          </>
          );
        })}
    </>
  );
};

export default SubMenu;
