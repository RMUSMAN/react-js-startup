/* eslint-disable */
import React, { useState } from 'react';
import { toast, Flip } from 'react-toastify';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Constants } from '../../../utils';
import { inviteUserViewStyles } from './styles';
import Fade from '@material-ui/core/Fade';
import MultiSelect from './MultiSelect';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core';
import { groupActions } from '../../../redux';
import { useDispatch, useSelector } from 'react-redux';

const InviteUserModal = ({ open, handleClose, invites, sites }) => {
  const dispatch = useDispatch();

  const { loading, success } = useSelector(state => state.group);
  const [groupUser, setGroupUser] = React.useState([]);
  const classes = inviteUserViewStyles();

  if (success) {
    handleClose();
  }

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
                  name: '',
                  site: ''
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string()
                    .max(255)
                    .required('First name is required'),
                  site: Yup.string()
                    .max(255)
                    .required('site is required')
                })}
                onSubmit={values => {
                  console.log('grop user', groupUser);
                  if (groupUser.length == 0) return toast('Please Add Users');
                  console.log('value', values);
                  dispatch(
                    groupActions.createUserGroup({
                      ...values,
                      members: groupUser
                    })
                  );
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
                      <Typography color="textPrimary" variant="h2">
                        Create User Group
                      </Typography>
                      <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        You can Create Users Group
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        style={{ color: 'white' }}
                      >
                        you can invite yours by adding their detail, Please add
                        user email and site carefully.
                      </Typography>
                    </Box>
                    <TextField
                      error={Boolean(touched.name && errors.name)}
                      fullWidth
                      helperText={touched.name && errors.name}
                      label=" Add Group name"
                      margin="normal"
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
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
                    <MultiSelect
                      groupUser={groupUser}
                      setGroupUser={setGroupUser}
                      invites={invites}
                    />

                    <Box my={2}>
                      <Button
                        color="primary"
                        disabled={loading}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Create Group
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

export default InviteUserModal;
