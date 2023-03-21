import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from "./pages/Dashboard";
import Download from "./pages/Download";
import Address from "./pages/Address";
import AddressDetail from "./pages/Account_detail";
import Table from "./pages/TableOfOrder";
import {Link } from "react-router-dom"
import Layout from "./../../Layout"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Layout>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="DASHBOARD" {...a11yProps(0)} />
          <Tab label="ORDERS" {...a11yProps(1)} />
          <Tab label="DOWNLOADS" {...a11yProps(2)} />
          <Tab label="ADDRESSES" {...a11yProps(3)} />
          <Tab label="ACCOUNT DETAILS" {...a11yProps(4)} />
          <Tab label="WISHLIST" {...a11yProps(5)} />
          <Link to="/" className='text-decoration-none text-black'><Tab label="LOGOUT" {...a11yProps(6)} /></Link> 
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Dashboard/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Download/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Address/>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <AddressDetail/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6}>
        
      </TabPanel>
    </Box>
    </Layout>
  );
}