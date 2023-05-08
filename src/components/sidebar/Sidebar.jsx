import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import * as RiIcons from 'react-icons/ri';
import { UserContext } from '../../UserContext';
const Nav = styled.div`
  background: #FFFFFF;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right:10vw;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: white;
  width: 80vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y: scroll; /* add scrollbar */
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { 
    filteredCategorieshr,
     filteredCategoriesnf,
    filteredCategoriesff,
      filteredCategories, 
  } = useContext(UserContext);
  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
      iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
    },
    {
      title: 'Foods',
      path: '/',
      iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
      iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
      subNav: filteredCategories.length > 0 ? filteredCategories.map(category => ({
        title: category.name,
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
        iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
        subNav: category.subcategories.map(subcategory => ({
          title: subcategory,
          path: `/shop/${subcategory}`,
        })),
      })) : 'loading'
    },
    {
      title: 'Frozen Food',
      path: '/',
      iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
      iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
      subNav: filteredCategoriesff.length > 0 ? filteredCategoriesff.map(category => ({
        title: category.name,
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
        iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
        subNav: category.subcategories.map(subcategory => ({
          title: subcategory,
          path: `/shop/${subcategory}`,
        })),
      })) : 'loading'
    },
    {
      title: 'Non Food',
      path: '/',
      iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
      iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
      subNav: filteredCategoriesnf.length > 0 ? filteredCategoriesnf.map(category => ({
        title: category.name,
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
        iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
        subNav: category.subcategories.map(subcategory => ({
          title: subcategory,
          path: `/shop/${subcategory}`,
        })),
      })) : 'loading'
    },
    {
      title: 'Hair And Cosmetic',
      path: '/',
      iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
      iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
      subNav: filteredCategorieshr.length > 0 ? filteredCategorieshr.map(category => ({
        title: category.name,
        path: '/',
        iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
        iconOpened: <RiIcons.RiArrowUpSFill color='black'/>,
        subNav: category.subcategories.map(subcategory => ({
          title: subcategory,
          path: `/shop/${subcategory}`,
        })),
      })) : 'loading'
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Brands',
      path: '/brands',
    },
  ];

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }} style={{ overflowY: 'scroll' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} color="black"/>
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} color="Black"/>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} className="color-black"/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      
    </>
  );
};

export default Sidebar ;
