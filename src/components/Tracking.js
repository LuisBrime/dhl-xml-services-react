import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Checkpoint from './Checkpoint';
import Error from './Error';

import { connect } from 'react-redux';
import { searchWaybill } from '../actions';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    item: {
        margin: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(7, 2),
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: 200,
        color: theme.secondary,
    },
    button: {
        margin: theme.spacing(1),
    },
    progress: {
        margin: theme.spacing(2),
    },
});

class Tracking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            waybill: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.search(this.state.waybill);
    }

    render() {
        const { classes,
            checkpoints,
            searching,
            done,
            stopped
        } = this.props;

        const { waybill } = this.state;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" color="secondary">Tracking</Typography>
                    <form onSubmit={this.handleSubmit}>
                    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={10}>
                        <Grid item xs={2}>
                            <TextField
                                id="tracking-awb"
                                name="waybill"
                                value={waybill}
                                onChange={this.handleChange}
                                label="Waybill"
                                className={classes.textField}
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button type="submit" variant="contained" color="secondary" className={classes.button}>Track</Button>
                        </Grid>
                    </Grid>
                    </form>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
                        {searching && <CircularProgress className={classes.progress} />}
                        {done && Array.isArray(checkpoints) && checkpoints.map((c, index) => (
                            <Checkpoint key={index} awb={c.awbNumber} shipmentDate={c.shipmentDate} originAC={c.originAC} originDesc={c.originDesc} destinationAC={c.destinationAC} destinationDesc={c.destinationDesc} shipperName={c.shipperName} shipperAN={c.shipperAN} consigneeName={c.consigneeName} />
                        ))}
                    </Grid>
                    <Error message={"Error. AWB not found"} open={stopped} />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    checkpoints: state.waybill.checkpoints,
    error: state.waybill.error,
    searching: state.waybill.searching,
    done: state.waybill.done,
    stopped: state.waybill.stopped
});

const mapDispatchToProps = dispatch => ({
    search: (waybill) => {
        dispatch(searchWaybill(waybill));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRoot(withStyles(styles)(Tracking)));