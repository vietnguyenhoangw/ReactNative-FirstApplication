import React, {Component} from "react"

import {
    View,
    Text,
} from "react-native"

export default class input extends Component {
    constructor() {

    }

    render() {
        return(
            <View style={styles.viewHeader}>
                <Text >LOGIN</Text>
            </View>
        )
    }
}

// const styles = StyleSheet.create({
//     viewHeader: {
//         width:'100%',
//     },
//     textTitle: {
//     textAlign:'center',
//     marginTop: 100,
//     marginBottom: 20,
//     fontWeight:'bold',
//     fontSize: 40
//     },
// });