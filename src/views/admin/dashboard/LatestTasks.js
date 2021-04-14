/* eslint-disable */
import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { taskActions } from 'src/redux';

const data = [
  {
    id: uuid(),
    name: 'Task1',
    ref: 'CDD1049',
    amount: 30.5,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    name: 'Task2',
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    name: 'Task3  ',
    status: 'delivered'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  },
  text: {
    height: '50px',
    width: '100%',
    border: 'none',
    padding: '20px'
  },
  addTaskBtn: {
    height: '50px',
    float: 'right',
    border: '1px solid grey',
    padding: '20px'
  },
  textField: {
    width: '100%',
    padding: '9px'
  },
  focused: { borderBottom: '1px solid grey' }
}));
const EditInput = ({ task }) => {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [updatetask, setUpdateTask] = useState({ name: task.name, id: '' });
  const handleChange = e =>
    setUpdateTask({ ...updatetask, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    setIsEdit(false);
  };

  return (
    <TableRow
      hover
      key={task.id}
      // onClick={() => alert(task.name)}
    >
      {isEdit ? (
        <TableCell style={{ padding: '0px' }}>
          <TextField
            InputProps={{
              classes: {
                focused: classes.focused,
                root: classes.textField
              },
              disableUnderline: true
            }}
            style={{ width: '100%' }}
            type="text"
            placeholder="Add Task"
            name="name"
            value={updatetask.name}
            onChange={handleChange}
            onBlur={handleSubmit}
          />
        </TableCell>
      ) : (
        <TableCell>
          {updatetask.name ? updatetask.name : task.name}
          <span>
            <EditIcon onClick={() => setIsEdit(!isEdit)} />
          </span>
        </TableCell>
      )}
      <TableCell>Status</TableCell>
      <TableCell>priority</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const [tasks, setTasks] = useState(data);
  const [newtask, setNewTask] = useState({ name: '', id: '' });

  const handleChange = e =>
    setNewTask({ ...newtask, [e.target.name]: e.target.value });
  const onSubmit = () => {
    if (newtask.name === '') return;
    setTasks([...tasks, newtask]);
    setNewTask({ name: '' });
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="TASKS" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableBody>
              {tasks.map(task => (
                <EditInput task={task} />
              ))}
              <TableRow hover key={1212}>
                <TableCell style={{ padding: '0px' }}>
                  <TextField
                    InputProps={{
                      classes: {
                        focused: classes.focused,
                        root: classes.textField
                      },
                      disableUnderline: true
                    }}
                    style={{ width: '100%' }}
                    type="text"
                    placeholder="Add Task"
                    name="name"
                    value={newtask.name}
                    onChange={handleChange}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell style={{ padding: '0px', width: '10%' }}>
                  <Button className={classes.addTaskBtn} onClick={onSubmit}>
                    Add
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
