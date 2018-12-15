import React, { Component } from 'react';
import './App.css';
import TabContainer from '../TabContainer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import styles from '../CardStyles';

class App extends Component {
  render() {
    return (
      <div>
        <Card style={{
            margin: '3%',
            height: 1000,
          }}>
          <CardContent> 
            <TabContainer />
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(App);
