/* eslint-disable */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: '100%',
    maxWidth: 300
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

const names = [
  'ali@gmail.com',
  'hassan2111@gmail.com',
  'faizan323@gmail.com',
  'al11i@gmail.com',
  'hassan32@gmail.com',
  'azan43@gmail.com',
  'fahad3@gmail.com',
  'arbaz2@gmail.com',
  'maaz2@gmail.com',
  'hassan1@gmail.com',
  'azan1@gmail.com',
  'fahad1@gmail.com',
  'arbaz1@gmail.com',
  'maaz1@gmail.com'
];

export default function MultipleSelect({ invites, groupUser, setGroupUser }) {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = event => {
    const members = [];
    const valueIs = [];
    for (const member of event.target.value) {
      members.push(member._id);
    }
    setGroupUser(members);
    for (const v of event.target.value) {
      valueIs.push(v.firstName);
    }

    setPersonName(valueIs);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Add users</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => {
            return (
              <div className={classes.chips}>
                {console.log('selected', selected)}
                {selected.map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            );
          }}
          MenuProps={MenuProps}
        >
          {invites.map(invite => (
            <MenuItem
              key={invite._id}
              value={invite}
              style={getStyles(invite, groupUser, theme)}
            >
              {`${invite.firstName}  ${invite.lastName}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
