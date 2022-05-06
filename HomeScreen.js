import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button 
                title="Go to Details" 
                onPress={() => navigation.navigate('Details', {
                    id: 1, 
                    description: 'Aqui va la descripcion',
                })} 
            />
            
        </View>
    );
}

export default HomeScreen;