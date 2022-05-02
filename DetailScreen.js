import React from 'react';
import {Stylesheet, Button, View, Text} from 'react-native';

function DetailScreen({navigation}) {
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
            <Text>Details Screen</Text>
            
            <View style = {styles.containerButton}> 
                <Button 
                    title="Atras" 
                    onPress={() => navigation.goBack()} 
                />

                <Button 
                    title="Home" 
                    onPress={() => navigation.navigate('Home')} 
                />

                <Button 
                    title="Go to Details" 
                    onPress={() => navigation.push('Details')} 
                />
            </View>

        </View>
    );
}

const styles = Stylesheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: 'gray',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;