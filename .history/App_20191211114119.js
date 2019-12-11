// import thu vien

import React, {Component} from "react"

import {
  Alert,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native"

// code class, component : render

class HelloWorld extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      text: '',
    }
  }

  invalidLoginCheck() {
    var Username = "admin";
    var Password = "admin";

    if (this.state.username.length == 0) {
      console.log('empty')
      this.setState({
        text: "username or password is empty"
      })
    }
    else {
      if (this.state.password.length == 0) {
        this.setState({
          text: "username or password is empty"
        })
      }
      else {
        if (this.state.username != Username) {
          console.log('Sai username, password')
          this.setState({
            text : "Sai username, password"
          })
        }else {
          if (this.state.password != Password) {
            console.log('Sai username, password')
            this.setState({
              text : "Sai username, password"
            })
          }
          else {
            console.log('Thanh Cong')
            this.setState({
              text : ""
            })
            Alert.alert(this.state.text = "login successfully")
          }
        }
      }
    }
  }

  click() {
    this.invalidLoginCheck()
  }

  render() {
    return(
      <View style={styles.viewOnScreen}>

        {/* Login title (logo) */}
        <View style={styles.viewHeader}>
          <Text style={styles.textTitle}>LOGIN</Text>
        </View>

        {/* body */}
        <View style={styles.body}>
          {/* Username */}
          <Text style={styles.textUser}>Username</Text>
          <TextInput  
            style={styles.textInput}
            placeholder = "Username"
            onChangeText={(text) => this.setState({username:text})}/>
          {/* Passworld */}
          <Text style={styles.textUser}>Password</Text>
          <TextInput style={styles.textInput}
            secureTextEntry={true}
            placeholder = "Passwords"
            onChangeText={(text) => this.setState({password:text})} />
          {/* Status */}
          <Text style={styles.textNotification}>{this.state.text}</Text>
          {/* Button submit */}
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => {this.click()}}>
            <Text style={styles.textBtn}>SUBMIT</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
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
  textUser: {
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 10,
  },
  textInput:{
    borderRadius:50,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth:1,
    borderColor: 'black',
    fontSize:20,
    paddingLeft: 20,
    paddingRight: 10
  },
  btn: {
    height:50,
    borderRadius:50,
    backgroundColor:'gray',
    marginLeft: 20,
    marginRight: 20,
    padding:20,
  },
  textBtn: {
    color: 'white',
    textAlign:'center',
  },
  textNotification: {
    marginLeft: 40,
    marginRight: 20,
    marginBottom: 10,
    color: 'red',
  },
});

export default HelloWorld