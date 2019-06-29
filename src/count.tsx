import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export const Count = () => {
  const [state, setState] = useState(0)
  return (
    <View>
      <Text>count:{state}</Text>
      <Button title="add" onPress={() => setState(state + 1)}>add</Button>
    </View>
  )
}