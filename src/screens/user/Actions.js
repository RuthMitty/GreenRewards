import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardAction from '../../components/CardAction';

export default function Home() {
  return (
    <View style={styles.container}>
      <CardAction />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(55, 140, 85, 0.62)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    padding: 25
  },
});
