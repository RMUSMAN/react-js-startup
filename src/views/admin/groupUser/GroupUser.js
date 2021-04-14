/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Container, makeStyles, Grid } from '@material-ui/core';

import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import InviteUserViewModal from './InviteUserGroup';
import GroupData from './GroupData';

import { useDispatch, useSelector } from 'react-redux';
import { groupActions, siteActions, inviteActions } from '../../../redux';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const admin = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(groupActions.getUserGroup());
    dispatch(siteActions.getSites());
    dispatch(inviteActions.getInvites());
  }, []);
  const { sites } = useSelector(state => state.site);
  const { invites } = useSelector(state => state.invite);
  const { groups, loading } = useSelector(state => state.group);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Page className={classes.root} title="User Group">
      {console.log('invites', invites)}
      {console.log('sites', sites)}
      {console.log('getgroups', groups)}
      <Container maxWidth={false}>
        <Toolbar handleOpen={handleOpen} />
        <InviteUserViewModal
          open={open}
          handleClose={handleClose}
          sites={sites && sites}
          invites={invites && invites}
        />

        <Box mt={3}>
          <GroupData groups={groups} loading={loading} />
        </Box>
      </Container>
    </Page>
  );
};

export default admin;
