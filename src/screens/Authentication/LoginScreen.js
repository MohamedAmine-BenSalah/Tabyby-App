import React, { useState, useEffect } from 'react';
import styles from './styles'
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import NSLight from '../../../assets/fonts/NunitoSans-Light.ttf';
import NSRegular from '../../../assets/fonts/NunitoSans-Regular.ttf';
import NSBold from '../../../assets/fonts/NunitoSans-Bold.ttf';
import NSExtraBold from '../../../assets/fonts/NunitoSans-ExtraBold.ttf';

export default function LoginScreen3({navigation}) {
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });
  ///////// for users signup
  const [username,setusername] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const [phoneNumber,setphoneNumber] = useState("")
  const pressSignup=()=>{
    axios.post("http://192.168.22.168:3000/user/signup",{username:username,email:email,password:password,phoneNumber:phoneNumber})
          .then(result=>{
              navigation.navigate('Home')
            
            }).catch(err=>{
              console.log(err,"sfqd");
            })
    
  }
  const presslogin=()=>{
    navigation.navigate('Home')
  }
  

  const [activeTab, setActiveTab] = useState('Login');

  useEffect(function () {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  function switchTab() {
    if (activeTab === 'Login') {
      setActiveTab('Register');
    } else {
      setActiveTab('Login');
    }
  }
  
 function Login(props) {
    const [showLoginPassword, setShowLoginPassword] = useState(false);
   

    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='envelope'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#f1f2f6'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='key'
            type='font-awesome-5'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={!showLoginPassword}
            textContentType='password'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowLoginPassword(!showLoginPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#74b3ce'
              size={22}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText} onPress={presslogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginView}>
          <TouchableOpacity style={styles.socialLoginTouchable}>
            <Icon name='google' type='font-awesome' color='#F16529' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginTouchable}>
            <Icon name='facebook' type='font-awesome' color='#F16529' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialLoginTouchable}>
            <Icon name='apple' type='font-awesome' color='#F16529' />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function Register() {
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='user'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='username'
            placeholderTextColor='#f1f2f6'
            textContentType='name'
            autoCompleteType='name'
            returnKeyType='next'
            name="username"
            onChangeText={newusername => setusername(newusername)}
            defaultValue={username}
          />
        </View>

        
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='envelope'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#f1f2f6'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            returnKeyType='next'
            name="email"
            onChangeText={newemail => setemail(newemail)}
            defaultValue={email}
          
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='phone'
            type='font-awesome'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            placeholderTextColor='#f1f2f6'
            keyboardType='phone-pad'
            returnKeyType='next' 
            name="phoneNumber"
            onChangeText={phoneNumber => setphoneNumber(phoneNumber)}
            defaultValue={phoneNumber}
            
          />
        </View>
          
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='key'
            type='font-awesome-5'
            color='#74b3ce'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={!showRegisterPassword}
            textContentType='password'
            returnKeyType='done'
            name="password"
            onChangeText={newpassword => setpassword(newpassword)}
            defaultValue={password}
            
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowRegisterPassword(!showRegisterPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#74b3ce'
              size={22}
            />
            
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={pressSignup}>Register</Text>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginHorizontal: 20,
              marginTop: 30,
              fontSize: 18,
              color: '#74b3ce',
              fontFamily: 'NSBold',
            }}
          >
            Or Register with
          </Text>
          <View
            style={[
              styles.socialLoginView,
              { marginTop: 14, justifyContent: 'flex-start' },
            ]}
          >
            <TouchableOpacity
              style={[styles.socialLoginTouchable, { marginLeft: 0 }]}
            >
              <Icon name='google' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
              <Icon name='facebook' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
              <Icon name='apple' type='font-awesome' color='#26619c' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient colors={['white', '#74b3ce']} style={styles.container}>
        <Text style={styles.welcomeText}>
          {activeTab === 'Login' ? 'Welcome Back' : 'Register Now'}
        </Text>
        <View style={styles.switchTabsView}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Login' ? 4 : 0,
              borderBottomColor: '#74b3ce',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Register' ? 4 : 0,
              borderBottomColor: '#74b3ce',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Register</Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Login' ? <Login /> : <Register />}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

