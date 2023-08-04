import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { useState } from 'react'
import { Button } from 'app/design/buttton'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [counter, setCounter] = useState(0)

  const onPress = () => {
    console.log('Button Press')
    setCounter(counter + 1)
  }

  const [id] = useParam('id')

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
      <View>
        <Button title='Increment' onPress={onPress}></Button>
        <Text>{`Counter: ${counter}`}</Text>
      </View>
    </View>
  )
}
