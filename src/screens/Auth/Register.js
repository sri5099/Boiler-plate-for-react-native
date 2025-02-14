import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import {useRegisterMutation} from '../../services/api'; // Import the register mutation from the API slice
import { enGB, registerTranslation } from 'react-native-paper-dates'
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
registerTranslation('en-GB', enGB)


const Register = () => {
  const [username, setUsername] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [purpose, setPurpose] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isLoading, isSuccess, isError }] = useRegisterMutation(); // Use the register mutation

  const handleRegister = async () => {
    try {
      const result = await register({ username, number, dob, purpose , password}).unwrap();
      // Handle successful registration, e.g., store access token
      const accessToken = result.accessToken; // Assuming the API returns an access token
      // Store accessToken in AsyncStorage or state as needed
    } catch (err) {
      console.log(err, typeof err, err.response);
      setError(err.message || 'Registration failed');
    }

  };

  React.useEffect(() => {
    if (isSuccess) {
      setError('Registration successful');
    }
  }, [isSuccess]);

  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={{ marginBottom: 10 , borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10}}/>
      <TextInput placeholder="Number" value={number} onChangeText={setNumber} style={{ marginBottom: 10 , borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10}} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} style={{ marginBottom: 10 , borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10}} />
      <Button onPress={() => setOpen(true)} title='Select Date'>
          Pick single date
        </Button>
        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
        {date && <Text>Selected Date: {date.toLocaleDateString()}</Text>}

      <TextInput placeholder="Purpose" value={purpose} onChangeText={setPurpose} style={{ marginBottom: 10 , borderWidth: 1, borderColor: 'gray', width: '80%', padding: 10}}/>
      <Button title="Register" onPress={handleRegister} disabled={isLoading} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Register;
