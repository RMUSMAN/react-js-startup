/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';

import Page from 'src/components/Page';

import { useDispatch, useSelector } from 'react-redux';
// import { siteActions, inviteActions } from '../../redux';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const user = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {}, []);

  return (
    <Page className={classes.root} title="User">
      <Container maxWidth={false}>
        <h1>User Tasks</h1>
        <Box mt={3}></Box>
      </Container>
    </Page>
  );
};

export default user;
