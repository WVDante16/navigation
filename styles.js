import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#03a9f4"
    },

    text: {
        marginBottom: 10,
        fontSize: 50,
        fontWeight: "bold",
    },

    box: {
        width: 100,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'stretch',
        borderWidth: 1,
        backgroundColor: '#4527a0',
        margin: 10,
    },

    boxText: {
        color: "#7953d2",
        fontWeight: "bold",
        fontSize: 15,
    },

    row: {
        flex: 1,
        //alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },

    column: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
    },
})