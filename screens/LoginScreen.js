import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
  View, 
  Text, 
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import t from 'tcomb-form-native';
import { SafeAreaView } from 'react-navigation';
import CheckBox from '../components/CheckBox';

const Form = t.form.Form;

const User = t.struct({
  username: t.Str,
  password: t.Str,
  remPassword: t.maybe(t.Bool),
});

function usernameTemplate(locals) {
  const textInputContainerStyles = [
    styles.textInputContainer, 
    locals.hasError ? styles.errorFieldStyle : {}
  ];

  return (
    <View style={styles.templateContainerStyle}>
      <Text style={styles.templateLabelStyle}>{locals.label}</Text>
      <View style={textInputContainerStyles}>
        <TextInput
          autoCapitalize={locals.autoCapitalize}
          onKeyPress={locals.onKeyPress}
          returnKeyType={locals.returnKeyType}
          style={styles.templateTextboxStyle}
          onChangeText={value => locals.onChange(value)}
          value={locals.value}
        />
      </View>
    </View>
  );
}

function passwordTemplate(locals) {
  const textInputContainerStyles = [
    styles.textInputContainer, 
    locals.hasError ? styles.errorFieldStyle : {}
  ];

  return (
    <View style={styles.templateContainerStyle}>
      <Text style={styles.templateLabelStyle}>{locals.label}</Text>
      <View style={textInputContainerStyles}>
        <TextInput 
          secureTextEntry={true}
          onKeyPress={locals.onKeyPress}
          returnKeyType={locals.returnKeyType}
          autoCapitalize={locals.autoCapitalize}
          style={styles.templateTextboxStyle}
          onChangeText={value => locals.onChange(value)}
          value={locals.value}
        />
        <Ionicons
          name="md-eye"
          size={26}
          color="#757E90"
        />
      </View>
    </View>
  );
}

function remPasswordTemplate(locals) {
  //console.log('stylesheet', locals.stylesheet);
  return (
    <View style={styles.remPasswordContainerStyle}>
      <CheckBox 
        color='#0D65D8'
        size={20}
        style={styles.checkBoxStyle}
        textStyle={styles.checkBoxTextStyle}
        selected={locals.value}
        onPress={() => locals.value 
          ? locals.onChange(false) 
          : locals.onChange(true)
        }
        text='Remember Password'
      />
      <View>
        <TouchableOpacity
          onPress={() => {}}>
          <Text
            style={styles.forgotPasswordStyle}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const options = {
  fields: {
    username: {
      label: 'Username or Email',
      template: usernameTemplate,
    },
    password: {
      template: passwordTemplate,
    },
    remPassword: {
      template: remPasswordTemplate,
    }
  },
};

export default function LoginScreen(props) {
  const [formValue, setFormValue] = useState({});

  const handleSubmit = () => {
    const value = formValue.getValue();
    console.log('value: ', value);
    if(value != null) {
      props.navigation.navigate('Main');
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Login</Text>
            <Text style={styles.subjectText}>Get started with your journey.</Text>
          </View>
          <View style={styles.loginFormContainer}>
            <Form 
              ref={c => setFormValue(c)} 
              type={User}
              options={options}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>CONTINUE TO LOGIN</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ flex : 1 }} /> */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  titleContainer: {
    marginBottom: 35,
  },
  loginFormContainer: {
    marginVertical: 35,
  },
  buttonContainer: {
    alignItems: 'center',
    height: 50,
    marginTop: 35,
  },
  titleText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: '#27282B',
    padding: 5,
  },
  subjectText: {
    fontFamily: 'OpenSans-Light',
    fontSize: 14,
    padding: 5,
  },
  loginButton: {
    width: '70%',
    height: 45,
    borderRadius: 5,
    paddingVertical: 14,
    backgroundColor: '#0D65D8',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 13,
    lineHeight: 18,
    color: '#fff',
    height: 18,
  },
  templateContainerStyle: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginTop: 15,
  },
  templateLabelStyle: {
    color: '#757E90',
    fontFamily: 'OpenSans-Regular',
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 10,
  },
  templateTextboxStyle: {
    flex: 1,
    color: '#27282B',
    fontFamily: 'OpenSans-SemiBold',
    paddingVertical: Platform.OS === "ios" ? 10 : 0,
    paddingHorizontal: 7,
    fontSize: 14,
    height: 45,
  },
  textInputContainer: {
    flexDirection: 'row'
  },
  checkBoxStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#0D65D8',
  },
  checkBoxTextStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'left',
    letterSpacing: 0,
    color: '#27282B',
    marginLeft: 5,
    opacity: 1,
  },
  forgotPasswordStyle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'left',
    letterSpacing: 0,
    color: '#27282B',
  },
  remPasswordContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  errorFieldStyle: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  form: {
    height: 100,
  },
});