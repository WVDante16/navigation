import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                color="#002171"
                title="Go To Menu" 
                onPress={() => navigation.navigate('Menu', {
                    id: 1, 
                    description: 'Aqui va la descripcion',
                })} 
            />
            
        </View>
    );
}

export default HomeScreen;