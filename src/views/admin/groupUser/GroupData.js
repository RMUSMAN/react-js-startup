/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import CircularProgress from '@material-ui/core/CircularProgress';
// import Dialog from '../../components/index';
import { userDataStyles } from './styles';
// import UpdatUserView from './UpdateUserView';
// import { inviteActions } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  Card,
  Table,
  Button,
  Popover,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
const invitess = [
  {
    _id: 3222,
    groupName: 'wq',
    groupSite: 'aaaa',
    users: ['a@gmail.com', 'b@gmail.com', 'c@gmail.com']
  },
  {
    _id: 3244422,
    groupName: 'sswwq',
    groupSite: 'aaaa',
    users: [
      'aqqq@gmail.com',
      'bss@gmail.com',
      'casa@gmail.com',
      'aqqqqq@gmail.com'
      //   'bsaqs@gmail.com',
      //   'caaasaqa@gmail.com',
      //   'aqssqq@gmail.com'
      //   'bdss@gmail.com',
      //   'csaasa@gmail.com',
      //   'aqqsaqqq@gmail.com',
      //   'bsaqsas@gmail.com',
      //   'caddsaqa@gmail.com'
    ]
  },
  {
    _id: 322332,
    groupName: 'wwwq',
    groupSite: 'aaaa',
    users: ['aaaa@gmail.com', 'bbbb@gmail.com', 'cccc@gmail.com']
  }
];

const UsersData = ({ className, loading, groups, ...rest }) => {
  const classes = userDataStyles();
  //   console.log('invites', invites);
  const dispatch = useDispatch();

  // DElete Modal
  let textDetail = {
    title: 'Delete User',
    subTitle: 'Are you sure you want to delete this User?'
  };
  const [visible, setvisible] = useState(false);
  const handleCloseDialog = () => {
    setvisible(false);
  };
  const handleYes = data => {
    dispatch(
      inviteActions.updateInvite({ id: data._id, user: { deleted: true } })
    );
    handleCloseDialog();
  };
  // DElete Modal End

  // popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  // popoverend

  // Update Modal
  const [openUpdate, setopenUpdate] = useState(false);
  const handleCloseUpdate = () => {
    setopenUpdate(false);
  };
  // Update Modal end

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell>Group_Name</TableCell>
                <TableCell>Site</TableCell>
                <TableCell>Members</TableCell>
                <TableCell>{/* Phone */}</TableCell>
                {/* <TableCell>InviteStatus</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {groups?.[0]
                ? groups.map(group => (
                    <TableRow hover key={group._id}>
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell>
                        <Box alignItems="center" display="flex">
                          {/* <Avatar
                            className={classes.avatar}
                            src="/static/images/avatars/user.png"
                          ></Avatar> */}
                          <Typography color="textPrimary" variant="body1">
                            {group.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{group.site?.name}</TableCell>
                      <TableCell>
                        {/* {invite.users.map(d => d)} {invite.users.join()} */}
                        {group?.members.map(member => (
                          <span>
                            {member.firstName} {member.lastName},
                          </span>
                        ))}
                      </TableCell>
                      <TableCell>
                        <h1
                          aria-describedby={id}
                          variant="contained"
                          color=""
                          onClick={event => setAnchorEl(event.currentTarget)}
                          style={{ cursor: 'pointer' }}
                        >
                          ...
                        </h1>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                          }}
                        >
                          <Typography
                            className={classes.typography}
                            onClick={() => setopenUpdate(true)}
                          >
                            Edit
                          </Typography>
                          <Typography
                            className={classes.typography}
                            onClick={() => setvisible(true)}
                          >
                            Delete
                          </Typography>
                          {/* <Dialog
                            visible={visible}
                            handleClose={handleCloseDialog}
                            handleYes={handleYes}
                            data={invite}
                            text={textDetail}
                          /> */}
                        </Popover>

                        {/* <UpdatUserView
                          invite={invite}
                          sites={sites}
                          open={openUpdate}
                          handleClose={handleCloseUpdate}
                        /> */}
                      </TableCell>
                    </TableRow>
                  ))
                : !loading && (
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>
                        <h3 className={classes.noInvite}>No Groups found</h3>
                      </TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      {loading && (
        <Box width="100%" style={{ textAlign: 'center', margin: '10px' }}>
          <CircularProgress disableShrink />
        </Box>
      )}
    </Card>
  );
};

export default UsersData;
