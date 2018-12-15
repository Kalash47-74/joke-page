import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SendedForm from './SendedForm'
import TabConteinerMain from './TabConteinerMain';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3, fontSize: '26pt' }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 1,
    name: 'name',
    address: 'address', 
    time: '07:30', 
    date:'2018-01-01',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleChangeName = name => {
    this.setState({ name: name });
  };

  handleChangeAddress = address => {
    this.setState({ address: address });
  };

  handleChangeTime = time => {
    this.setState({ time: time });
  };

  handleChangeDate = date => {
    this.setState({ date: date });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab style={{fontSize: '26pt'}} label="Some form" />
            <Tab style={{fontSize: '26pt'}} label="The main" />
            <Tab style={{fontSize: '26pt'}} label="About me" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <SendedForm 
              name={this.state.name}
              address={this.state.address}
              time={this.state.time}
              date={this.state.date}
              handleChangeAddress={this.handleChangeAddress}
              handleChangeDate={this.handleChangeDate}
              handleChangeTime={this.handleChangeTime}
              handleChangeName={this.handleChangeName}/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <TabConteinerMain onClick={this.handleChangeIndex}/>
          </TabContainer>
          <TabContainer centered dir={theme.direction}>
            <p>Hi there!</p>
            <p>My name is Boris</p>
            <p>This is a joke page</p>
            <p>Just for have fun with React JS</p>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);