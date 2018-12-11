import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';
 

const mapStateToProps = (state, ownProps) => ({
    formType: 'Sign Up',
    errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);