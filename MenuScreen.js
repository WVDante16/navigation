import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
import Box from './Box';
import Column from './Column';
import Row from './Row';

function MenuScreen({route, navigation}) {
    const {id, description} = route.params;

    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d47a1'}}>
            
            <Column>
                <Row>
                    <Box>Tarea #1
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 1, 
                                description: 'Bañarse',
                            })} 
                        />
                    </Box>
                    <Box>Tarea #2
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 2, 
                                description: 'Comer',
                            })} 
                        />
                    </Box>
                    <Box>Tarea #3
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 3, 
                                description: 'Ver animu',
                            })} 
                        />
                    </Box>
                </Row>

                <Row>
                    <Box>Tarea #4
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 4, 
                                description: 'Ser miserable',
                            })} 
                        />
                    </Box>
                    <Box>Tarea #5
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 5, 
                                description: 'Hacer tarea',
                            })} 
                        />
                    </Box>
                    <Box>Tarea #6
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 6, 
                                description: 'Seguir siendo miserable',
                            })} 
                        />
                    </Box>
                </Row>

                <Row>
                    <Box>Tarea #7
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 7, 
                                description: 'Jugar videojuegos',
                            })} 
                        />
                    </Box>
                    <Box>Tarea #8
                        <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 8, 
                                description: 'Cenar',
                            })} 
                        />
                    </Box>
                    <Box>Tarea #9
                    <Button 
                            color="#007ac1c"
                            title="Hacer" 
                            onPress={() => navigation.navigate('Details', {
                                id: 9, 
                                description: 'Llorar y dormir',
                            })} 
                        />
                    </Box>
                </Row>
            </Column>

            <View style = {styles.containerButton}> 
                <Button 
                    color="#002171"
                    title="Back" 
                    onPress={() => navigation.goBack()} 
                />

                <Button 
                    color="#002171"
                    title="Home" 
                    onPress={() => navigation.popToTop()} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#5472d3',

        margin: 20,
        padding: 5,

        width: 400,
        height: 100,
    },
})

export default MenuScreen;