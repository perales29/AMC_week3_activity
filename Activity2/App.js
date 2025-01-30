import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

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
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContactNumber}
          value={contactNumber}
          placeholder="Contact Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={[styles.input, styles.multilineInput]}
          onChangeText={onChangeText}
          value={text}
          multiline
          numberOfLines={4}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  multilineInput: {
    height: 100,
  },
});

export default TextInputExample;