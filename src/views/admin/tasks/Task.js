/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { indexStyles } from './styles';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';

import CreatTask from './CreateTask';
import TaskData from './TaskData';
import { useDispatch, useSelector } from 'react-redux';
import {
  siteActions,
  groupActions,
  inviteActions,
  taskActions
} from '../../../redux';

const taskss = [
  { _id: 1122, name: 'task1', description: 'task description' },
  { _id: 121122, name: 'task2', description: 'task2 description' },
  { _id: 11232, name: 'task13', description: 'task3 description' }
];

const Task = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(groupActions.getUserGroup());
    dispatch(siteActions.getSites());
    dispatch(taskActions.getTasks());
    dispatch(inviteActions.getInvites());
    // dispatch(taskActions.getTasks());
  }, []);
  const { sites } = useSelector(state => state.site);
  const { invites } = useSelector(state => state.invite);
  const { groups } = useSelector(state => state.group);
  const { tasks, loading, success } = useSelector(state => state.task);
  // console.log('invites ', invites);
  // console.log('tasks ', tasks);

  const classes = indexStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Page className={classes.root} title="Tasks">
      <Container maxWidth={false}>
        <Toolbar handleOpen={handleOpen} />
        <CreatTask
          open={open}
          handleClose={handleClose}
          sites={sites}
          invites={invites}
          loading={loading}
          success={success}
        />

        <Box mt={3}>
          <Grid container spacing={3}>
            {tasks?.[0]
              ? tasks.map(task => {
                  return (
                    <Grid item key={task._id} lg={4} md={6} xs={12}>
                      {
                        <TaskData
                          className={classes.siteCard}
                          task={task}
                          sites={sites}
                          invites={invites}
                          loading={loading}
                          success={success}
                        />
                      }
                    </Grid>
                  );
                })
              : !loading && <h2 className={classes.notfound}>No task found</h2>}
            {loading && (
              <Box width="100%" style={{ textAlign: 'center', margin: '10px' }}>
                <CircularProgress disableShrink />
              </Box>
            )}
          </Grid>
        </Box>
      </Container>
    </Page>
  );
};
export default Task;
