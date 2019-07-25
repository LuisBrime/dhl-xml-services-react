import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(7, 2),
    },
});

class Pickup extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" color="secondary">Pickup</Typography>
                    <Typography variant="h6" color="inherit">El servicio no funciona o no está disponible en https://xmlpi-validation.dhl.com/serviceval/jsps/main/Main_menu.jsp</Typography>
                </Paper>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Pickup));