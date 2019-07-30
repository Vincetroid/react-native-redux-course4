import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './common';
import { Actions } from 'react-native-router-flux';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch(); 
    }

    onRowPress(employee) {
        console.log('employee')
        console.log(employee)
        Actions.employeeEdit({ employee: employee });
    }

    render() {
        const employees = this.props.employees;

        return(
            <View> 
                <FlatList
                    data={[
                        ...employees
                    ]}
                    renderItem={({ item }) =>
                        <TouchableWithoutFeedback onPress={this.onRowPress.bind(this, item)}>
                            <View style={styles.wrapTitle}>
                                <Text style={styles.titleStyle}>{item.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
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

