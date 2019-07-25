import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './common';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch(); 
    }

    render() {
        console.log('props en render (el bueno)')
        console.log(this.props);

        const employees = this.props.employees;

        console.log('employees')
        console.log(employees)

        return(
            <View> 
                <FlatList
                    data={[
                        ...employees
                    ]}
                    renderItem={({ item }) =>
                        <View style={styles.wrapTitle}>
                            <Text style={styles.titleStyle}>{item.name}</Text>
                        </View>
                    } 
                />
            </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    wrapTitle: {
        backgroundColor: 'aqua',
        marginTop: 5
    }
};

const mapStateToProps = (state) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid}
    });
    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

