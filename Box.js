import React from 'react';
import {Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Box = ({children}) => {
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}

Box.PropTypes = {
    children: PropTypes.node.isRequired
};

export default Box;

