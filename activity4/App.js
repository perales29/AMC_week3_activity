import React from 'react';
import {StyleSheet, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [contactNumber, onChangeContactNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [text, onChangeText] = React.useState('About me');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Icon name="user" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="calendar" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="home" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="laptop" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="graduation-cap" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} style={styles.icon}/>
          <TextInput
            style={styles.input}
            onChangeText={onChangeContactNumber}
            value={contactNumber}
            placeholder="Contact Number"
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="question" size={20} style={styles.icon}/>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            onChangeText={onChangeText}
            value={text}
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={styles.imageContainer}>
          
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  multilineInput: {
    height: 100,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default TextInputExample;
