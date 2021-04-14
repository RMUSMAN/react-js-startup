/* eslint-disable */
import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Sites from './Sites';
import Users from './Users';
import Tasks from './Tasks';
import TasksProgress from './TasksProgress';
import LatestTasks from './LatestTasks';
import LatestSites from './LatestSites';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Sites />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Users />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <TasksProgress />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Tasks />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <LatestTasks />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <LatestSites />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            {/* <Sites /> */}
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
