import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Controller extends Component {
    
    onUp = () =>
    {
        this.props.dispatch({type:'UP'})
    }
    onDown = () =>
    {
        this.props.dispatch({type:'DOWN'})
    }


    render() {
        return (
            <View style={styleApp.container}>
                <View style={styleController.controller}>
                    <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                    <View style={styleController.buttonContainer}>
                        <TouchableOpacity 
                            style={styleController.button} 
                            onPress={this.onUp}
                        >
                            <Text style={styleController.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styleController.button} onPress={this.onDown}>
                            <Text style={styleController.buttonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect()(Controller);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    
});

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});