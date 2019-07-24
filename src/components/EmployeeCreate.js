import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift});
    }

    render() {
        
        console.log('this.props de employeeCreate:')
        console.log(this.props)

        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Phone"
                        plaholcer="555-555-555"
                        value={this.props.phone}
                        onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })}
                    />
                </CardSection>
                <CardSection style={{ padding: 13 }}>
                        <Text style={styles.pickerTextStyle}>Shift</Text>
                        <View style={styles.pickerViewStyle}>
                            <Picker
                                style={{ flex: 1 }}
                                selectedValue={this.props.shift}
                                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value})}
                            >
                                <Picker.Item label="Monday" value="Monday" />
                                <Picker.Item label="Tuesday" value="Tuesday" />
                                <Picker.Item label="Wednesday" value="Wednesday" />
                                <Picker.Item label="Thursday" value="Thursday" />
                                <Picker.Item label="Friday" value="Friday" />
                                <Picker.Item label="Saturday" value="Saturday" />
                                <Picker.Item label="Sunday" value="Sunday" />
                            </Picker>
                        </View>
                </CardSection>
                <CardSection> 
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 14,
    },
    pickerViewStyle: {
        flex: 2,
        paddingLeft: 80
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { 
    employeeUpdate, employeeCreate 
})(EmployeeCreate);

