import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
    card: {
        minWidth: 900,
        maxWidth: 1000,
        margin: theme.spacing(2),
    },
    item: {
        margin: theme.spacing(1),
    },
    title: {
        padding: theme.spacing(1),
    },
    pdf: {
        width: '100%',
    },
});

class PDF extends Component {
    render() {
        const {
            classes,
            pdf,
            guia
        } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} align="left" variant="body1" color="secondary">{guia}</Typography>
                    <Grid container direction="column" alignItems="center" spacing={10}>
                        <Grid item xs={12}>
                            <object className={classes.pdf} type="application/pdf" data={`data:application/pdf;base64,${pdf}`} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default withRoot(withStyles(styles)(PDF));