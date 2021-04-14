/* eslint-disable */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { sitesCardStyles } from './styles';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// import Dialog from './Dialoag';
import UpdateTask from './UpdateTask';
// import { siteActions } from '../../redux';
import { useDispatch } from 'react-redux';

const TaskData = ({
  className,
  task,
  invites,
  sites,
  loading,
  success,
  ...rest
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = site => {
    // dispatch(siteActions.updateSite({ id: site._id, site: { deleted: true } }));
    handleClose();
  };

  const classes = sitesCardStyles();
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        {/* <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="site"
            src={
              site.logo ? site.logo : '/static/images/products/product_1.png'
            }
            variant="square"
            className={classes.logoStyle}
          />
        </Box> */}
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {task.name}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {task.description}
        </Typography>
        {/* <div
          contentEditable="true"
          onInput={e =>
            console.log('Text inside div', e.currentTarget.textContent)
          }
          // onBlur={() => alert('a')}
        >
          Text inside div
        </div> */}
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <EditIcon
              className={classes.statsIcon}
              color="action"
              style={{ cursor: 'pointer' }}
              onClick={() => setOpen(true)}
            />
            <UpdateTask
              open={open}
              handleClose={handleClose}
              task={task}
              sites={sites}
              invites={invites}
              loading={loading}
              success={success}
            />
          </Grid>
          <Grid className={classes.statsItem} item>
            <DeleteIcon
              className={classes.statsIcon}
              style={{ cursor: 'pointer' }}
              color="action"
              onClick={() => setOpen(true)}
            />
            {/* <Dialog
              open={open}
              handleClose={handleClose}
              handleYes={handleYes}
              site={site}
            /> */}
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default TaskData;
