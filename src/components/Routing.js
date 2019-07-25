import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import Error from './Error';
import { paises } from '../utils/paises';

import { connect } from 'react-redux';
import { routing } from '../actions';

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
    card: {
        minWidth: 800,
        margin: theme.spacing(2),
    },
});

class Routing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            region: "AM",
            type: "O",
            address1: "",
            address2: "",
            postalCode: "",
            city: "",
            division: "",
            country: "MX",
            origin: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const payload = { ...this.state };
        for (var i = 0; i < paises.length; i++) {
            if (paises[i].code === payload.country) payload.countryName = paises[i].name;
        }
        this.props.routing(payload);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { classes,
            code,
            desc,
            searching,
            done,
            stopped
        } = this.props;
        const { region,
            type,
            address1,
            address2,
            postalCode,
            city,
            division,
            country,
            origin
        } = this.state;

        console.log(code, desc);

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" color="secondary">Routing</Typography>
                    <form onSubmit={this.handleSubmit}>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={10}>
                            <Grid item xs={4}>
                                <FormControl className={classes.textField}>
                                    <InputLabel htmlFor="region">Region</InputLabel>
                                    <Select value={region} onChange={this.handleChange} inputProps={{ id: "region", name: "region" }}>
                                        <MenuItem value={"AP"}>Asia Pasific</MenuItem>
                                        <MenuItem value={"EU"}>Europe</MenuItem>
                                        <MenuItem value={"AM"}>Americas</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl className={classes.textField}>
                                    <InputLabel htmlFor="type">Request Type</InputLabel>
                                    <Select value={type} onChange={this.handleChange} inputProps={{ id: "type", name: "type" }}>
                                        <MenuItem value={"O"}>Origin</MenuItem>
                                        <MenuItem value={"EU"}>Destination</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
                            <Grid item xs={4}>
                                <TextField
                                    id="address1"
                                    name="address1"
                                    value={address1}
                                    onChange={this.handleChange}
                                    label="Address line 1"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    value={address2}
                                    onChange={this.handleChange}
                                    label="Address line 2"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="postalCode"
                                    name="postalCode"
                                    value={postalCode}
                                    onChange={this.handleChange}
                                    label="Postal Code"
                                    className={classes.textField}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={10}>
                            <Grid item xs={4}>
                                <TextField
                                    id="city"
                                    name="city"
                                    value={city}
                                    onChange={this.handleChange}
                                    label="City"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    id="division"
                                    name="division"
                                    value={division}
                                    onChange={this.handleChange}
                                    label="State"
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl className={classes.textField}>
                                    <InputLabel htmlFor="country">Country</InputLabel>
                                    <Select value={country} onChange={this.handleChange} inputProps={{ id: "country", name: "country" }}>
                                        {paises.map((p) => (
                                            <MenuItem key={p.code} value={p.code}>{p.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={10}>
                            <Grid item xs={4}>
                                <FormControl className={classes.textField}>
                                    <InputLabel htmlFor="origin">Origin Country</InputLabel>
                                    <Select value={origin} onChange={this.handleChange} inputProps={{ id: "origin", name: "origin" }}>
                                        {paises.map((p) => (
                                            <MenuItem key={p.code} value={p.code}>{p.name}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={10}>
                            <Grid item xs={4}>
                                <Button type="submit" variant="contained" color="secondary" className={classes.button}>Test</Button>
                            </Grid>
                        </Grid>
                    </form>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
                        {searching && <CircularProgress className={classes.progress} />}
                        {done && (
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} align="center" variant="body1" color="secondary"> {code} – </Typography>
                                    <Typography className={classes.title} align="center" variant="body1" color="secondary"> {desc} </Typography>
                                </CardContent>
                            </Card>
                        )}
                    </Grid>
                    <Error message={"Error."} open={stopped} />
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    code: state.routing.code,
    desc: state.routing.desc,
    searching: state.routing.searching,
    done: state.routing.done,
    stopped: state.routing.stopped,
});

const mapDispatchToProps = dispatch => ({
    routing: (payload) => {
        dispatch(routing(payload));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRoot(withStyles(styles)(Routing)));