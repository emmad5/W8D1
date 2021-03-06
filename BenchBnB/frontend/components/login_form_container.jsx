import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => ({
    formType: 'Log In',
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);