import { Link } from 'react-router-dom';
import React from 'react'


class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (this.props.currentUser) {
            return (<>
            <h1 className='greeting-h2'>Welcome {this.props.currentUser.username}</h1>
            <button onClick={this.props.logout} className="logout">Log Out</button>
            </>)
        } else {
            return(<>
            <Link to="/signup" className="sign-up">Sign Up </Link>
            <Link to="/login" className="log-in">Login</Link>
            </>)
        }

    }
}

export default Greeting