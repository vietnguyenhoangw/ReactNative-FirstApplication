// import thu vien

import React, {Component} from "react"

import {
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

  click() {
    var Username = "aaa";
    var Password = "bbb";

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
          text : "Thanh cong"
        })
      }
    }
  }

  render() {
    return(
      <View style={styles.viewOnScreen}>

        <View style={styles.viewHeader}>

          <Text style={styles.textTitle}>LOGIN</Text>

        </View>

        <View style={styles.body}>

          <Text style={styles.textUser}>Username</Text>

          <TextInput  
            style={styles.textInput}
            placeholder = "Username"
            onChangeText={(text) => this.setState({username:text})}/>

          <Text style={styles.textUser}>Password</Text>

          <TextInput style={styles.textInput}
           placeholder = "Passwords"
           onChangeText={(text) => this.setState({password:text})} />

          <Text style={styles.textUser}>Trang thai: {this.state.text}</Text>

          <TouchableOpacity 
            style={styles.btn}
            onPress={() => {this.click()}}>
            <Text style={styles.textBtn}>Submit</Text>
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
  }
});

export default HelloWorld