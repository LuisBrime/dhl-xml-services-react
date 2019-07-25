import { combineReducers } from 'redux';
import {
    REQUEST_SEARCH_WAYBILL,
    RETURN_SEARCH_WAYBILL,
    ERROR_SEARCH_WAYBILL,
    REQUEST_CREATE_WAYBILL,
    RECEIVE_CREATE_WAYBILL,
    ERROR_CREATE_WAYBILL,
    REQUEST_ROUTING,
    RECEIVE_ROUTING,
    ERROR_ROUTING
} from '../actions';

function waybill(state = {
    waybill: undefined,
    checkpoints: undefined,
    error: undefined,
    searching: false,
    done: false,
    stopped: false,
}, action) {
    switch (action.type) {
        case REQUEST_SEARCH_WAYBILL:
            return Object.assign({}, state, {
                waybill: action.waybill,
                searching: true,
                done: false,
                stopped: false
            });
        case RETURN_SEARCH_WAYBILL:
            return Object.assign({}, state, {
                waybill: action.waybill,
                checkpoints: action.checkpoints,
                searching: false,
                done: true,
                stopped: false
            });
        case ERROR_SEARCH_WAYBILL:
            return Object.assign({}, state, {
                error: action.error,
                searching: false,
                done: false,
                stopped: true
            });
        default:
            return state;
    }
}

function validation(state = {
    xml: undefined,
    guia: undefined,
    pdf: undefined,
    searching: false,
    done: false,
    stopped: false,
    error: undefined
}, action) {
    switch (action.type) {
        case REQUEST_CREATE_WAYBILL:
            return Object.assign({}, state, {
                xml: action.xml,
                searching: true,
                done: false,
                stopped: false
            });
        case RECEIVE_CREATE_WAYBILL:
            return Object.assign({}, state, {
                guia: action.guia,
                pdf: action.pdf,
                searching: false,
                done: true,
                stopped: false
            });
        case ERROR_CREATE_WAYBILL:
            return Object.assign({}, state, {
                error: action.error,
                searching: false,
                done: false,
                stopped: true
            });
        default:
            return state;
    }
}

function routing(state = {
    code: undefined,
    desc: undefined,
    searching: false,
    done: false,
    stopped: false,
    error: undefined
}, action) {
    switch (action.type) {
        case REQUEST_ROUTING:
            return Object.assign({}, state, {
                searching: true,
                done: false,
                stopped: false
            });
        case RECEIVE_ROUTING:
            return Object.assign({}, state, {
                code: action.payload.code,
                desc: action.payload.desc,
                searching: false,
                done: true,
                stopped: false
            });
        case ERROR_ROUTING:
            return Object.assign({}, state, {
                error: action.error,
                searching: false,
                done: false,
                stopped: true
            });
        default:
            return state;
    }
}

export default combineReducers({ waybill, validation, routing });