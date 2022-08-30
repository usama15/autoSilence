import React from 'react';
import {NativeBaseProvider, Box, Text} from 'native-base';
import theme from './lib/theme/Customizetheme';
import {SafeAreaView} from 'react-native';
import Splash from './lib/screens/Splash';

const App = () => (
  <NativeBaseProvider theme={theme}>
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  </NativeBaseProvider>
);

export default App;
