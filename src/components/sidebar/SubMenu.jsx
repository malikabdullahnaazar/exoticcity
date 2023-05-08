import React, { useState, useEffect } from 'react';
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
  const [subnavvIndex, setSubnavvIndex] = useState(null);

function showSubnavv(index) {
  setSubnavv(!subnavv);
  setSubnavvIndex(index);
}
  useEffect(() => {


    return () => {
      console.log(item);
    }
  }, [item])

  return (
    <>
    <div className="sidebar-container overflow-auto" style={{ maxHeight: "calc(100vh - 60px)" }}></div>
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
          return (
            <div key={index}>
              <DropdownLink to={item.path} onClick={() => showSubnavv(index)}>
                <SidebarLabel className='text-black mx-3'>{item.title}</SidebarLabel>
                {item.subNav && subnavv && index===subnavvIndex
                  ? item.iconOpened
                  : item.subNav
                    ? item.iconClosed
                    : null}
              </DropdownLink>
              {subnavv && index === subnavvIndex &&
                item.subNav.map((item, index) => {
                  return (
                    <DropdownLink to={item.path} key={index}>
                      <SidebarLabel className='text-black mx-3'>{item.title}</SidebarLabel>
                    </DropdownLink>
                  );
                })}
            </div>
          );
        })}
    </>
  );
};

export default SubMenu;
