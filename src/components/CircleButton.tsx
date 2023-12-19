import { TouchableOpacity, Text, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
  onPress?: () => void
}

const CircleButton = (props: Props): JSX.Element => {
  const { children, style, onPress } = props

  return (
    // スタイルを書き換える際は配列で渡してあげる
    // 配列の後のものが優先されるため、デフォルトのスタイルを第一引数に、オプショナルなスタイルを第二引数に渡すことで
    // デフォルトのスタイルを上書きすることができる
    // 上書きするのはあくまで呼び出し元で指定されたスタイルのプロパティのみで、それ以外のプロパティはデフォルトのスタイルが適用される
    // 例えば、CircleButtonコンポーネントの呼び出し元でstyle={{ top: 160, bottom: 'auto' }}と指定されている場合、
    // デフォルトのスタイルのwidthやheightは適用されるが、topとbottomだけは上書きされる
    <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40
  }
})

export default CircleButton
