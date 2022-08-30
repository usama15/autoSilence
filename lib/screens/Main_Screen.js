import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Main_screen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.sectionContainer}
            source={require('../assets/AutoSilence.png')}
          />
          <View style={styles.secondText}>
            <ActivityIndicator size="large" color="#75163F" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 750,
    justifyContent: 'center',
  },
  sectionContainer: {
    width: '80%',
    height: 320,
    alignSelf: 'center',
  },
  secondText: {
    marginTop: '10%',
  },
});

export default Main_screen;
