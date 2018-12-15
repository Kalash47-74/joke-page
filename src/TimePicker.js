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
    width: 110,
  },
});

function TimePickers(props) {
  const { classes, handleChangeTime } = props;

  return (
      <TextField
        id="time"
        label='Time'
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        onChange={event => handleChangeTime(event.target.value)}
      />
  );
}

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);