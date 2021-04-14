/* eslint-disable */
import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

export default function MaterialUIPickers({ selectedDate, setSelectedDate }) {
  // The first commit of Material-UI
  //   const [selectedDate, setSelectedDate] = React.useState(
  //     new Date('2014-08-18T21:11:54')
  //   );
  const today = new Date();

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          style={{ width: '98%' }}
          margin="normal"
          id="date-picker-dialog"
          label="Select Due Date"
          format="MM/dd/yyyy"
          minDate={today}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
