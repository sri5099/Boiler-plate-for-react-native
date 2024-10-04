import {Button, View, Text} from 'native-base';
import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useLayoutEffect,
  useDebugValue,
  useImperativeHandle,
  useMutationEffect,
  useDeferredValue,
} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FONTS, WP} from '../../assets/constants/theme';
import {logout} from '../../services/reducers/authReducer';

const Screen2 = ({navigation}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const handlePress = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={FONTS.h2}>Screen2</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <Button colorScheme="primary">Success</Button>
      <Text>Count: {count}</Text>
      <Button onPress={() => setCount(count + 1)} style={{margin: 10}}>Increment</Button>
      <Button onPress={() => setCount(count - 1)} style={{margin: 10}}>Decrement</Button>
    </View>
  );
};

const Screen3 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch data from API
    setData([...data, {id: 1, name: 'Item 1'}]);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen3</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.name}</Text>
      ))}
    </View>
  );
};

const Screen4 = () => {
  // const context = useContext(null);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen4</Text>
      {/* <Text>Context value: {context.value}</Text> */}
    </View>
  );
};

const Screen5 = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await dispatch(logout());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Screen5</Text>
      <Button
        style={{width: WP('70%')}}
        onPress={handleLogout}
        colorScheme="primary">
        Logout
      </Button>
      {loading? <Text>Loading...</Text> : null}
    </View>
  );
};

const Screen6 = ({navigation}) => {
  const layout = useLayoutEffect(() => {
    console.log('Layout effect');
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={FONTS.h2}>Screen6</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>
      <Button colorScheme="primary">Success</Button>
    </View>
  );
};

export {Screen2, Screen3, Screen4, Screen5, Screen6};