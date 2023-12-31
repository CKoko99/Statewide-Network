import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Modal } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavbarItem from './NavbarItem';
import LogoImg from '../../public/assets/images/statewide_logo.png';
import { styled } from '@mui/system';
import { Collapse } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from "next/image";
import MainNavbarItem from './MainNavbarItem';
import PATHCONSTANTS from '../../constants/sitemap';
import ReturnHome from '../Modals/ReturnHome';




const drawerWidth = 280;
const navItems = [
  {
    label: 'Get a Quote',
    link: '/quote',
    main: true,
    menuItems: [

    ],
    bold: true
  },
  {
    label: 'Our Products',
    link: '/products',
    menuItems: [
      { title: "Auto Insurance", link: PATHCONSTANTS.PRODUCTS.AUTO.INDEX },
      { title: "Home Insurance", link: PATHCONSTANTS.PRODUCTS.HOME.INDEX },
      { title: "Renters Insurance", link: PATHCONSTANTS.PRODUCTS.RENTERS.INDEX },
      { title: "Motorcycle Insurance", link: PATHCONSTANTS.PRODUCTS.MOTORCYCLE.INDEX },

    ]
  },
  {
    label: 'About Statewide',
    link: PATHCONSTANTS.ABOUT.INDEX,
    menuItems: [
      { title: "About Us", link: PATHCONSTANTS.ABOUT.INDEX },
      { title: "Contact Us", link: PATHCONSTANTS.ABOUT.CONTACT },
      { title: "Careers", link: PATHCONSTANTS.ABOUT.CAREERS },
      { title: "Reviews", link: PATHCONSTANTS.ABOUT.REVIEWS },
    ]
  },
];

function DrawerAppBar(props: any) {
  const router = useRouter();
  const { drawerWindow } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [onQuotePage, setOnQuotePage] = React.useState(false);
  const [openReturnHome, setOpenReturnHome] = React.useState(false);
  React.useEffect(() => {
    //if window location pathname starts with /quotes/ then set onQuotePage to true

    setOnQuotePage(router.asPath.startsWith("/quotes/"));

  }, [router.asPath]);
  //const history = useHistory();

  const [openItem, setOpenItem] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setOpenItem(null);
  };

  const handleReturnHome = () => {
    setOpenReturnHome((prevState) => !prevState);
  }
  const handleLogoClick = () => {
    //history.push('/');
    router.push('/'); // Replace '/new-page' with the actual URL of the new page
    //drawerWindow scroll to top
    window.scrollTo(0, 0);
  }


  // Function to toggle the menu item's open/close state
  const handleMenuItemToggle = (label: any, event: any) => {
    event.stopPropagation();
    setOpenItem((prevOpenItem) => (prevOpenItem === label ? null : label));
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography onClick={handleLogoClick} variant="h6" sx={{ my: 2 }}>
        Get Insured Today!
      </Typography>
      <Divider />
      <List sx={{ textAlign: "left" }}>
        {navItems.map(
          (item, index) => {

            return <React.Fragment key={index}>{
              item.main ? (
                <Box
                  sx={{
                    textAlign: "center", margin: "1rem auto",
                  }}
                > <MainNavbarItem item={item} /></Box>
              ) : <>
                {item.menuItems.length === 0 ? (
                  <Link key={item.label} href={item.link || ""} style={{ color: "inherit", textDecoration: "none" }}>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={(event) => handleMenuItemToggle(item.label, event)}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              style={{ display: "flex", fontWeight: "700" }}
                            >
                              {item.label}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ) : (
                  <React.Fragment key={item.label}>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{ textAlign: "center" }}
                        onClick={(event) => handleMenuItemToggle(item.label, event)}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              style={{ display: "flex", fontWeight: "700" }}
                            >
                              {item.label} {item.menuItems.length > 0 ? openItem === item.label ? <ExpandLessIcon /> : <ExpandMoreIcon /> : ""}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={openItem === item.label} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {item.menuItems.map((menu) => (
                          <Link key={menu.title} href={menu.link || ""} style={{ color: "inherit", textDecoration: "none" }}>
                            <ListItem >
                              <ListItemText
                                primary={
                                  <Typography>
                                    •{" "}
                                    {menu.title}
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </Link>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                )}
              </>}</React.Fragment>
          }
        )}



      </List>

    </Box >
  );

  const container = drawerWindow !== undefined ? () => drawerWindow().document.body : undefined;



  return (<>
    {onQuotePage ? <Box sx={{
      textAlign: "center",
      width: "100%",
    }}>
      <Box
        sx={{
          maxWidth: '14rem', // Set the maximum width for the image
          minHeight: '5rem',   // Automatically adjust height to maintain aspect ratio
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          margin: "auto"
        }}
      >

        <Image onClick={handleReturnHome}
          //style={{ maxWidth: '120px', height: 'auto', cursor: 'pointer' }}
          src={LogoImg}
          alt="Statewide Insurance" />
        {openReturnHome &&
          <Modal open={openReturnHome}
            onClose={() => setOpenReturnHome(false)}
          >
            <ReturnHome
              onClose={() => setOpenReturnHome(false)}
            />
          </Modal>}
      </Box>

    </Box> :
      <>
        <Box
          sx={{
            bgcolor: "white", position: "fixed", width: "100%", zIndex: 999,
            borderBottom: "1px solid #e0e0e0"
          }}
        >
          <Box sx={{
            display: 'flex',
            width: { xs: "92%", sm: "95%", md: "90%", lg: "80%" },
            maxWidth: "1800px",
            flexDirection: "row", justifyContent: "space-between", alignItems: "center",
            margin: "auto"
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: "black",
                mr: 2, "@media (min-width: 880px)": {
                  display: "none",
                },
              }}
            >
              <MenuIcon sx={{ height: "3rem", width: "3rem", color: "primary.main" }} />

            </IconButton>
            <Box
              sx={{
                maxWidth: '14rem', // Set the maximum width for the image
                minHeight: '5rem',   // Automatically adjust height to maintain aspect ratio
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >

              <Image onClick={handleLogoClick}
                //style={{ maxWidth: '120px', height: 'auto', cursor: 'pointer' }}
                src={LogoImg}
                alt="Statewide Insurance" />
            </Box>
            <Box sx={{
              "@media (min-width: 880px)": {
                display: "flex",
              },
              "@media (max-width: 880px)": {
                display: "none",
              }
              , alignItems: 'center',
              gap: "1.5rem"
            }}>
              {navItems.map((item, index) => (
                <React.Fragment key={index}>{
                  item.main ? (<MainNavbarItem item={item} />) : (
                    <NavbarItem
                      item={item}
                    />)
                }</React.Fragment>
              ))}
            </Box>

            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                "@media (min-width: 880px)": {
                  display: "none",
                },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
          </Box >
        </Box >
        <Box sx={{ height: "5rem" }}
        ></Box >
      </>}
  </>
  );
}

export default DrawerAppBar;