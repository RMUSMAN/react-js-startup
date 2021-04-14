/* eslint-disable */
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { toast } from 'react-toastify';
import { createSiteViewStyles } from './styles';
import { useDispatch } from 'react-redux';
import { taskActions } from '../../../redux';
import Fade from '@material-ui/core/Fade';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  MenuItem
} from '@material-ui/core';
import Calender from './Calender';
const getAcceptedUser = invites => {
  return invites.filter(invite => invite.inviteStatus === 'accepted');
};

const UpdateTask = ({
  open,
  handleClose,
  task,
  sites,
  invites,
  loading,
  success
}) => {
  const [selectedDate, setSelectedDate] = useState(
    task.dueDate ? task.dueDate : ''
  );
  if (!loading && success) {
    handleClose(false);
  }

  const classes = createSiteViewStyles();
  const dispatch = useDispatch();
  const runTimeChange = (e, handleChange) => {
    // console.log('e is ', state);
    handleChange(e);
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Container maxWidth="sm">
              <Formik
                initialValues={{
                  title: task ? task.title : '',
                  description: task ? task.description : '',
                  site: '',
                  assignee: ''
                }}
                validationSchema={Yup.object().shape({
                  title: Yup.string()
                    .max(255)
                    .required('Name is required'),
                  site: Yup.string()
                    .max(255)
                    .required('site is required'),
                  assignee: Yup.string()
                    .max(255)
                    .required('assignee is required'),
                  description: Yup.string()
                    .max(255)
                    .required('Description is required')
                })}
                onChange={async value => {
                  console.log('changing', value);
                }}
                onSubmit={async value => {
                  console.log('uodaet valeu', value);
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  touched,
                  values
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box mb={3} style={{ textAlign: 'center' }}>
                      <Typography
                        gutterBottom
                        variant="body2"
                        style={{ color: 'white' }}
                      >
                        you can add your sites by adding their detail, Please
                        add sites data carefully.
                      </Typography>
                      <Typography color="textPrimary" variant="h2">
                        update Task
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        you can Update task
                      </Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.title && errors.title)}
                      fullWidth
                      helperText={touched.title && errors.title}
                      label="title"
                      margin="normal"
                      //   disabled={true}

                      name="title"
                      onBlur={handleBlur}
                      onChange={e => runTimeChange(e, handleChange)}
                      value={values.title}
                      variant="outlined"
                    />

                    <TextField
                      error={Boolean(touched.site && errors.site)}
                      fullWidth
                      helperText={touched.site && errors.site}
                      label="Add site"
                      margin="normal"
                      name="site"
                      select
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="select"
                      value={values.site}
                      variant="outlined"
                    >
                      {sites &&
                        sites.map(site => (
                          <MenuItem key={site._id} value={site._id}>
                            {site.name}
                          </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                      error={Boolean(touched.assignee && errors.assignee)}
                      fullWidth
                      helperText={touched.assignee && errors.assignee}
                      label="assignee"
                      margin="normal"
                      name="assignee"
                      select
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="select"
                      value={values.assignee}
                      variant="outlined"
                    >
                      {invites &&
                        getAcceptedUser(invites).map(invite => (
                          <MenuItem key={invite._id} value={invite._id}>
                            {invite.firstName}
                          </MenuItem>
                        ))}
                    </TextField>
                    <Calender
                      selectedDate={selectedDate}
                      setSelectedDate={setSelectedDate}
                    />

                    <TextField
                      error={Boolean(touched.description && errors.description)}
                      rows={10}
                      className={classes.textarea}
                      helperText={touched.description && errors.description}
                      label="description"
                      placeholder="Add Your Description"
                      margin="normal"
                      name="description"
                      onBlur={handleBlur}
                      onChange={e => runTimeChange(e, handleChange)}
                      value={values.description}
                      variant="outlined"
                    />

                    <Box my={2}>
                      <Button
                        color="primary"
                        disabled={false}
                        fullWidth
                        disabled={loading}
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Update Task
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Container>
            {loading && (
              <Box width="100%" style={{ textAlign: 'center', margin: '10px' }}>
                <CircularProgress disableShrink />
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default UpdateTask;
