import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            username: '',
            password: ''
        });

    }
    handleInput(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    render() {
        let link;
        if (this.props.formType === 'Log In') {
            link = <Link className="button" to="/signup">Not a user? Sign Up</Link>
        } else {
            link = <Link className="button" to="/login">Already a user? Log In</Link>
        }
        let errors = this.props.errors.map(error => <li>{error}</li>)
        return (
        <div>
            <h3>{this.props.formType}</h3>
            <form onSubmit={this.handleSubmit} className='form'>
            <label>
                Username:
                <input type="text" onChange={this.handleInput('username')} className='input' value={this.state.username} />
            </label>
            <label>
                Password:
                <input type="password" onChange={this.handleInput('password')} className='input' value={this.state.password}/>
            </label>
                    <input type="submit" className="button" id="submit" value={this.props.formType}/>
            </form>
                <div className="session-link" >{link}</div>
            <ul>{errors}</ul>
        </div>
        )
    }
}

export default SessionForm;