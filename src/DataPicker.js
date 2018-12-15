import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginTop: 30,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 170,
  },
});

function DatePickers(props) {
  const { classes, handleChangeDate } = props;

  return (
      <TextField
        id="date"
        label="Date"
        type="date"
        defaultValue="2018-01-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        onChange={event => handleChangeDate(event.target.value)}
      />
  );
}

DatePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatePickers);