import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../config'
import { router } from 'expo-router'

const LogOutButton = (): JSX.Element => {
  const handlePress = (): void => {
    // ログアウト
    signOut(auth)
      .then(() => {
        router.replace('/auth/log_in')
      })
      .catch((error) => {
        console.log(error.code, error.message)
        Alert.alert('ログアウトに失敗しました')
      })
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.70)'
  }
})

export default LogOutButton
