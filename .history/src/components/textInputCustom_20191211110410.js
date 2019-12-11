import React, {Component} from "react"

import {
  View,
  Text,
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

const styles = StyleSheet.create({
    viewOnScreen: {
      width: '100%',
      height: '100%'
    },
    viewHeader: {
        width:'100%',
    },
    textTitle: {
      textAlign:'center',
      marginTop: 100,
      marginBottom: 20,
      fontWeight:'bold',
      fontSize: 40
    },
  });