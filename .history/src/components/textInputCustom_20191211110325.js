import React, {Component} from "react"

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"

class input extends Component() {
    constructor() {

    }

    render() {
        return(
            <View style={styles.viewHeader}>
                <Text style={styles.textTitle}>LOGIN</Text>
            </View>
        )
    }
}