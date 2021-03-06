import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';
import EmployeeForm from '../components/EmployeeForm';

class EmployeeCreate extends Component {

    componentDidMount() {
        // this.props.employeeClean();
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render() {
        
        console.log('this.props de employeeCreate:')
        console.log(this.props)

        return(
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection> 
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);

