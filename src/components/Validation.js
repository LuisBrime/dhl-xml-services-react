import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Error from './Error';
import PDF from './PDF';

import { connect } from 'react-redux';
import { createWaybill } from '../actions';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 800,
        margin: theme.spacing(2),
        padding: theme.spacing(2),
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

class Validation extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.create();
    }

    render() {
        const { classes,
            xml,
            guia,
            pdf,
            searching,
            done,
            stopped
        } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" color="secondary">Validation</Typography>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container direction="column" justify="flex-start" alignItems="center" spacing={10}>
                            <Card className={classes.card}>
                                {xml}
                            </Card>
                            <Grid item xs={2}>
                                <Button type="submit" variant="contained" color="secondary" className={classes.button}>Run test</Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
                        {searching && <CircularProgress className={classes.progress} />}
                        {done && (
                            <PDF guia={guia} pdf={pdf} />
                        )}
                    </Grid>
                    <Error message={"Error. AWB not found"} open={stopped} />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    xml: state.validation.xml,
    guia: state.validation.guia,
    pdf: state.validation.pdf,
    searching: state.validation.searching,
    stopped: state.validation.stopped,
    done: state.validation.done,
    error: state.validation.error
});

const mapDispatchToProps = dispatch => ({
    create: () => {
        dispatch(createWaybill());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRoot(withStyles(styles)(Validation)));