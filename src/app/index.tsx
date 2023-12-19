import { Redirect } from 'expo-router'

// 最初に表示するページとしてindex.tsxは必ず必要。
// ここでリダイレクトを行って任意に初期ページを設定する。
const Index = (): JSX.Element => {
  return <Redirect href='auth/log_in' />
}

export default Index
