import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import * as RiIcons from 'react-icons/ri';
import { UserContext } from '../../UserContext';
import exocitcity from "../../Static/exsoticcity.png";
// import { MdOutlineArrowDropDown } from "react-icons/md";
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
  const [sidebarData, setsidebarData] = useState(null);
  
  const { filterprice ,navBarCat,setnavBarCat} = useContext(UserContext);
  const { filteredCategorieshr, setFilteredCategorieshr,filteredCategoriesnf,
    setFilteredCategoriesnf,filteredCategoriesff, setFilteredCategoriesff, filteredCategories, 
    setFilteredCategories } = useContext(UserContext);
  useEffect(() => {


    return () => {
      if (filterprice) {
        const productValues = Object.values(filterprice);
        const navbarCategories = productValues.reduce((acc, curr) => {
          const existingCategory = acc.find(cat => cat.name === curr.Category);
          if (existingCategory) {
            if (!existingCategory.subcategories.includes(curr.SubCategory)) {
              existingCategory.subcategories.push(curr.SubCategory);
            }
          } else {
            acc.push({
              name: curr.Category,
              subcategories: [curr.SubCategory]
            });
          }
          return acc;
        }, []);
        setnavBarCat(navbarCategories);
      }
      if (navBarCat) {
        const categoriesToShow = ["BEANS AND PULSES", "DRINKS", "FISH&MEAT PRESERVE", "FLOUR,OATS & CEREALS", "FRUITS & VEGETABLES", "PRESERVED FOOD"];
       const filteredCategories = navBarCat.filter(category => categoriesToShow.includes(category.name));
        setFilteredCategories(filteredCategories);
        const categoriesToShowff = ["FROZEN FOOD"];
       const filteredCategoriesff = navBarCat.filter(category => categoriesToShowff.includes(category.name));
        setFilteredCategoriesff(filteredCategoriesff);
        const categoriesToShownf = ["NON FOOD"];
       const filteredCategoriesnf = navBarCat.filter(category => categoriesToShownf.includes(category.name));
        setFilteredCategoriesnf(filteredCategoriesnf);
        const categoriesToShowhr = ["CHILD CARE","HAIR & MAKEUP","HAIR CARE PRODUCTS","SKIN CARE PRODUCTS"];
       const filteredCategorieshr = navBarCat.filter(category => categoriesToShowhr.includes(category.name));
        setFilteredCategorieshr(filteredCategorieshr);
        
      }
    }
  }, )


  useEffect(() => {
    return () => {
      
        setsidebarData([
          {
            title: 'Home',
            path: '/',
            iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
            iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
          },
          {
            title: 'Foods',
            path: '/',
            iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
            iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
            subNav: filteredCategories.length > 0 ? filteredCategories.map(category => ({
              title: category.name,
              path: '/',
              iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
              iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
              subNav: category.subcategories.map(subcategory => ({
                title: subcategory,
                path: `/shop/${subcategory}`,
              })),
            })) : []
          },
          {
            title: 'Frozen Food',
            path: '/',
            iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
            iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
            subNav: filteredCategoriesff.length > 0 ? filteredCategoriesff.map(category => ({
              title: category.name,
              path: '/',
              iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
              iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
              subNav: category.subcategories.map(subcategory => ({
                title: subcategory,
                path: `/shop/${subcategory}`,
              })),
            })) : []
          },
          {
            title: 'Non Food',
            path: '/',
            iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
            iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
            subNav: filteredCategoriesnf.length > 0 ? filteredCategoriesnf.map(category => ({
              title: category.name,
              path: '/',
              iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
              iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
              subNav: category.subcategories.map(subcategory => ({
                title: subcategory,
                path: `/shop/${subcategory}`,
              })),
            })) : []
          },
          {
            title: 'Hair And Cosmetic',
            path: '/',
            iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
            iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
            subNav: filteredCategorieshr.length > 0 ? filteredCategorieshr.map(category => ({
              title: category.name,
              path: '/',
              iconClosed: <RiIcons.RiArrowDownSFill color='black' />,
              iconOpened: <RiIcons.RiArrowUpSFill color='black' />,
              subNav: category.subcategories.map(subcategory => ({
                title: subcategory,
                path: `/shop/${subcategory}`,
              })),
            })) : []
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
        ]);

      
      
    }
  },[filteredCategories,filteredCategorieshr,filteredCategoriesff,filteredCategoriesff])
 

  //for location popup
  // function handleClick() {
  //   // Create popup
  //   const popup = document.createElement('div');
  //   popup.classList.add('popup');


  //   // Create header and header description
  //   const header = document.createElement('div');
  //   header.classList.add('header');

  //   const headerText = document.createElement('div');
  //   headerText.classList.add('header-text');
  //   headerText.classList.add('header-color');

  //   const headerDesc = document.createElement('div');
  //   headerDesc.classList.add('header-desc');

  //   const cancelButton = document.createElement('button');
  //   cancelButton.classList.add('cancel-button');
  //   cancelButton.textContent = 'X';
  //   cancelButton.addEventListener('click', () => {
  //     document.body.removeChild(popup);
  //   });

  //   headerText.textContent = 'Choose your Delivery Location';
  //   headerDesc.textContent = 'Enter your address and we will specify the offer for your area.';

  //   header.appendChild(headerText);
  //   header.appendChild(cancelButton);
  //   header.appendChild(headerDesc);
  //   popup.appendChild(header);

  //   // Add search bar to the popup
  //   const searchBar = document.createElement('input');
  //   searchBar.type = 'text';
  //   searchBar.placeholder = 'Search Your area...';
  //   popup.appendChild(searchBar);

  //   // Add five items to the popup
  //   const items = ['Select a Location', 'Belgium', 'France', 'Germeny', 'Italy'];
  //   const buttonLabels = ['Clear All', 'Min:$30', 'Min:$40', 'Min:$50', 'Min:$70'];

  //   for (let i = 0; i < items.length; i++) {
  //     const item = document.createElement('div');
  //     item.classList.add('item');

  //     const text = document.createElement('span');
  //     text.textContent = items[i];

  //     const button = document.createElement('button');
  //     button.classList.add('rounded-button');
  //     button.textContent = buttonLabels[i];

  //     item.appendChild(document.createElement('hr'));
  //     item.appendChild(text);
  //     item.appendChild(button);

  //     popup.appendChild(item);
  //   }
  //   popup.appendChild(document.createElement('hr'));

  //   // Add popup to the body
  //   const body = document.body;
  //   body.appendChild(popup);

  //   // Add overlay to the body
  //   const overlay = document.createElement('div');
  //   overlay.classList.add('popup-overlay');
  //   body.appendChild(overlay);

  //   // Add popup-open class to the body to show the popup and overlay
  //   body.classList.add('popup-open');

  //   // Remove popup and overlay when cancel icon is clicked
  //   cancelButton.addEventListener('click', () => {
  //     body.classList.remove('popup-open');
  //     popup.remove();
  //     overlay.remove();
  //   });
  // }
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <IconContext.Provider value={{ color: 'white' }} style={{ overflowY: 'scroll' }}>

        <Nav>
          <NavIcon to='#'> 
            <FaIcons.FaBars onClick={showSidebar} color="black" />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>

            <NavIcon to='#' className='text-decoration-none text-black'>
              <div class="d-flex justify-content-between align-items-center">
                <Link to="/" className="ml-1 text-decoration-none">
                  <img src={exocitcity} alt="Exocitcity" width="110vw" />
                </Link>
                <div className='mx-5 px-5'>

                  <AiIcons.AiOutlineClose onClick={showSidebar} color="Black" className="ml-auto order-last mx-5 " />
                </div>
              </div>
              <div  >
              </div>
{/*               
                <div className="border border-white  ">
                  <button className="row bg-white  border shadow rounded" onClick={handleClick}>
                    <div className="col-sm-8 text-muted small">Your location</div>
                    <div className="col-sm-9 font-weight-bold">Select location</div>
                    <div className="col-sm-2 ">
                      <MdOutlineArrowDropDown size={28} className="drop-icon current-location" />
                    </div>
                  </button>

                </div> */}
            </NavIcon>
            {sidebarData ?sidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} className="color-black" />;
            }):''}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>

    </>
  );
};

export default Sidebar;
