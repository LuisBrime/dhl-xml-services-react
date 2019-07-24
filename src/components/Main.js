import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Tracking from './Tracking';
import Validation from './Validation';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    item: {
        margin: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(4, 2),
    },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box bgcolor="background.default" p={3}>{children}</Box>
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabValue: 0,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({ tabValue: newValue });
    }

    render() {
        const { classes } = this.props;
        const { tabValue } = this.state;

        return (
            <Grid className={classes.root} container spacing={10}>
                <Grid className={classes.item} item xs={12}>
                    <AppBar position="static">
                        <Tabs value={tabValue} onChange={this.handleChange} aria-label="Services tabs">
                            <Tab label="Tracking" {...a11yProps(0)} />
                            <Tab label="Validation" {...a11yProps(1)} />
                            <Tab label="Pickup" {...a11yProps(2)} />
                            <Tab label="Routing" {...a11yProps(3)} />
                            <Tab label="Capability and Quote" {...a11yProps(4)} />
                        </Tabs>
                        <TabPanel value={tabValue} index={0}>
                            <Tracking />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <Validation />
                        </TabPanel>
                    </AppBar>
                </Grid>
            </Grid>
        );
    }
}

export default withRoot(withStyles(styles)(Main));