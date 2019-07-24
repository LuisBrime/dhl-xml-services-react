// React Imports
import React, { Component } from 'react';

// Material-UI Imports
import withRoot from '../withRoot';
import { withStyles } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/WarningRounded';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => ({
    snackbar: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    }
});

class Error extends Component {
    render() {
        const { classes, message, open, ...other } = this.props;

        return(
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={open}
                autoHideDuration={2000}
            >
                <SnackbarContent
                    className={classes.snackbar}
                    aria-describedby="client-snackbar"
                    message={
                        <span id="client-snackbar" className={classes.message}>
                            <WarningIcon className={classes.icon} />
                            {message}
                        </span>
                    }
                    {...other}
                />
            </Snackbar>
        )
    }
}

export default withRoot(withStyles(styles)(Error));