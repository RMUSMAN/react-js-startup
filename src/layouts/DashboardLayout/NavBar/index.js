/* eslint-disable */
import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import NavItem from './NavItem';
import { Constants, SideBarItems } from '../../../utils';

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const { user } = useSelector(state => state.auth);
  const role = user?.role ? user.role : null;
  const { roles } = Constants;
  const classes = useStyles();
  const location = useLocation();
  const {
    leaderSideBar,
    guestSideBar,
    siteManagerSideBar,
    userSideBar,
    adminSideBar
  } = SideBarItems;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const getSideBar = role => {
    switch (role) {
      case roles[0].key:
        return leaderSideBar;
        break;
      case roles[1].key:
        return siteManagerSideBar;
        break;
      case roles[2].key:
        return userSideBar;
        break;
      case roles[3].key:
        return guestSideBar;
        break;
      case roles[4].key:
        return adminSideBar;
        break;

      default:
        return guestSideBar;
    }
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user?.avatar ? user.avatar : '/static/images/avatars/user.png'}
          to="/app/account"
        />
        <Typography className={classes.name} color="textPrimary" variant="h5">
          {`${user?.firstName} ${user?.lastName}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user?.role}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {getSideBar(role).map(item => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box p={2} m={2} bgcolor="background.dark">
        <Box display="flex" justifyContent="center" mt={2}></Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

export default NavBar;
