/* eslint-disable */
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@material-ui/core';
import Page from 'src/components/Page';
import { successViewStyles } from './styles';

const LeaderSite = () => {
  const classes = successViewStyles();
  return (
    <Page className={classes.root} title="Success">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="md">
          <Typography align="center" color="textPrimary" variant="h3">
            Here is the Site of Leader
          </Typography>
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          ></Typography>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.grid}
          >
            {/* <Button variant="contained" className={classes.buttons}>
              Get From Play Store
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.buttons}
            >
              Get From App Store
            </Button> */}
          </Grid>
          <Box textAlign="center">
            <img
              alt="Under development"
              className={classes.image}
              src="/static/images/naplozz01.png"
            />
          </Box>
        </Container>
      </Box>
    </Page>
  );
};

export default LeaderSite;
