import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Display = (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue} numberOfLines={1}>
        {props.value}
      </Text>
    </View>
  )
}

export default Display

const styles = StyleSheet.create({
  display: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  }
})
