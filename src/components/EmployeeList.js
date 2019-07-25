import _ from 'lodash';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        console.log('Props')
        console.log(this.props); 
        console.log('Lista de Empleados')
        console.log(this.props.employeesFetch()); 

    }

    componentWillReceiveProps(nextProps) {
        console.log('Props en componentWillReceiveProps')
        console.log(this.props); 
        console.log('nextProps en componentWillReceiveProps')
        console.log(nextProps); 
    }

    render() {
        console.log('props en render (el bueno)')
        console.log(this.props);

        return(
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid}
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

