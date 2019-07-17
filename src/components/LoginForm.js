import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        state = {
            num: 9,
        }
    }

    onEmailChange(text) {
        console.log('onEmailChange al tipear')
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text) {
        console.log('onPasswordChange al tipear')
        this.props.passwordChanged(text);
    }

    render() {
        return(
            <Card>
                <CardSection>
                   <Input 
                       label="Email"
                       placeholder="email@gmail.com"
                       onChangeText={this.onEmailChange.bind(this)}
                       value={this.props.email.value}
                   /> 
                </CardSection>
                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password.value}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('mapStateToProps', state, ownProps)
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);