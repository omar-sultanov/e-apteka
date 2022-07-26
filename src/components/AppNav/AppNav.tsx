import React from "react";
import {
  AppBar,
  Box,
  Badge,
  BadgeProps,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import VaccinesTwoToneIcon from "@mui/icons-material/VaccinesTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { inject, observer } from "mobx-react";
import { ServicesNames, StoresNames } from "../../dictionary";
import { Link } from "react-router-dom";

const ResponsiveAppBar = inject(StoresNames.CardStore, ServicesNames.ProductService)(
  observer((props: any) => {
    const { cartProducts } = props.CardStore;
    const count = cartProducts.length;

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
      React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose} component={Link} to="/auth">Авторизовать</MenuItem>
      </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="cart" component={Link} to="/cart">
            <Badge badgeContent={count} >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Корзина</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Профиль</p>
        </MenuItem>
      </Menu>
    );

    return (
      <>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <VaccinesTwoToneIcon className="d-none d-md-flex me-1"
              />
              <Typography className="d-none d-md-flex"
                variant="h5"
                noWrap
                component="a"
                href="/"
              >
                ЕАПТЕКА
              </Typography>

              <VaccinesTwoToneIcon  className="d-flex d-md-none me-1"
              />
              <Typography className="d-flex d-md-none"
                variant="h5"
                noWrap
                component="a"
                href="/"
              >
                ЕАПТЕКА
              </Typography>

              <Box className="flex-grow-1"/>
              <Box className="d-none d-md-flex">
                <IconButton aria-label="cart" component={Link} to="/cart">
                  <Badge badgeContent={count}>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
              <Box className="d-flex d-md-none">
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </>
    );
  })
);
export default ResponsiveAppBar;