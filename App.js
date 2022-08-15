import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  StatusBar,
  Switch,
} from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headertext}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 30,
            fontFamily: 'cursive',
          }}>
          App Title
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Email address"
          multiline={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          multiline={false}
          secureTextEntry={true}
          style={styles.input}
        />
        <Text
          style={{
            marginTop: 20,
            textAlign: 'center',
            color: 'black',
          }}>
          Save your Login Info?
        </Text>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
        <Text style={{color: 'gray'}}>No</Text>

        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#0095ff' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{display: 'flex', flex: 0, marginTop: 0}}
        />
        <Text style={{color: 'gray'}}>Yes</Text>
      </View>
      <View style={{alignItems: 'center', flex: 1, marginTop: 30}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <TouchableOpacity style={styles.button7}>
            <Text
              style={{color: '#fff', fontFamily: 'sans-serif', fontSize: 13}}>
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button8}>
            <Text
              style={{color: '#fff', fontFamily: 'sans-serif', fontSize: 13}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button7: {
    backgroundColor: '#0095ff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 3,
    padding: 8,
    lineHeight: 1.15,
    shadowColor: '#fff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  button8: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 3,
    padding: 8,
    lineHeight: 1.15,
    shadowColor: '#fff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginLeft: 15,
    marginRight: 15,
    position: 'relative',
  },
  headertext: {
    marginTop: Dimensions.get('window').height * 0.25,
  },
  input: {
    marginTop: Dimensions.get('window').height * 0.05,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    width: 250,
    height: 40,
    color: 'black',
  },
});

export default App;
