import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class Menu extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">DHL XML Services</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Menu));
