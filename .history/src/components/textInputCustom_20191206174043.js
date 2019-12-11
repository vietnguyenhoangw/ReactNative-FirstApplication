import React, {Component} from "react"
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from "react-native"
<TextInput  
style={styles.textInput}
placeholder = "Username"
onChangeText={(text) => this.setState({username:text})}/>
