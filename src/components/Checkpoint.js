import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

const styles = theme => ({
    card: {
        minWidth: 800,
        margin: theme.spacing(2),
    },
    item: {
        margin: theme.spacing(1),
    },
    title: {
        padding: theme.spacing(1),
    },
});

class Checkpoint extends Component {
    render() {
        const { classes,
            awb,
            shipmentDate,
            originAC,
            originDesc,
            destinationAC,
            destinationDesc,
            shipperName,
            shipperAN,
            consigneeName
        } = this.props;

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} align="left" variant="body1" color="secondary">{awb}</Typography>
                    <Typography className={classes.title} align="center" variant="h6" color="inherit"> {shipmentDate} </Typography>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
                        <Grid className={classes.item} item xs={4}>
                            <Typography className={classes.title} align="center" variant="body1" color="secondary">Origen: {originAC}–<Typography variant="body2" color="primary">{originDesc}</Typography></Typography>
                        </Grid>
                        <Grid className={classes.item} item xs={4}>
                            <Typography className={classes.title} align="center" variant="body1" color="secondary">Destino: {destinationAC}–<Typography variant="body2" color="primary">{destinationDesc}</Typography></Typography>
                        </Grid>
                    </Grid>
                    <Typography className={classes.title} align="center" variant="body1" color="secondary">Shipper Name: {shipperName}</Typography>
                    <Typography className={classes.title} align="center" variant="body2" color="secondary">Account Number: {shipperAN}</Typography>
                    <Typography className={classes.title} align="center" variant="body1" color="secondary">Consignee: {consigneeName}</Typography>
                </CardContent>
            </Card>
        );
    }
}

export default withRoot(withStyles(styles)(Checkpoint));