import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DataPicker from './DataPicker';
import TimePicker from './TimePicker';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {

  render() {
    const { classes, ...otherProps} = this.props;

    return (
      <Grid container direction='column' style={{boxOrient: 'vertical'}}>
          <TextField
            id="standard-required"
            label="Name"
            className={classes.textField}
            margin="normal"
            onChange={event => otherProps.handleChangeName(event.target.value)}
        />
          <TextField
            id="standard-required_2"
            label="Address"
            className={classes.textField}
            margin="normal"
            onChange={event => otherProps.handleChangeAddress(event.target.value)}
          />
        <TextField
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
        />
        <span style={{display: 'inline', marginBottom: 30}}>
          <TimePicker handleChangeTime={otherProps.handleChangeTime}/>
          <DataPicker handleChangeDate={otherProps.handleChangeDate}/>
        </span>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </Grid>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);