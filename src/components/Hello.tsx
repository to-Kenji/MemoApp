import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  // propsの中から指定のものを取り出し、その名前の変数に代入することができる
  const { children, bang, style } = props
  return (
      <View>
          {/* styleを配列で複数指定すると、後ろに指定したものが優先される */}
          <Text style={[styles.text, style]}>
            Hello {children}{bang === true ? '!' : ''}
          </Text>
      </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    // react-nativeの世界ではpxの記載は不要
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
