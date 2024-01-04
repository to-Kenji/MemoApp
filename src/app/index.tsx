import { Redirect, router } from 'expo-router'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config'

// 最初に表示するページとしてindex.tsxは必ず必要。
// ここでリダイレクトを行って任意に初期ページを設定する。
const Index = (): JSX.Element => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        // ログイン済みの場合はメモ一覧画面へ遷移
        router.replace('/memo/list')
      }
    })
  })
  return <Redirect href='auth/log_in' />
}

export default Index
