import { Stack } from 'expo-router'

// _layout.tsxは特殊なファイルで、デフォルトのレイアウトを設定する
// ディレクトリごとにファイルを作成すると、そのディレクトリのルートとなり配下のファイルはそのレイアウトを継承する
const Layout = (): JSX.Element => {
  // <Slot />はただ単純に子要素を表示するだけのコンポーネント
  // return <Slot />
  // <Stack />を使うと、子要素をスタック表示することができる(スタック表示とは、子要素を重ねて表示すること)
  // これにより前のページに戻るという遷移を実現することができる
  return <Stack screenOptions={
    {
      headerStyle: {
        backgroundColor: '#467fd3'
      },
      headerTintColor: '#ffffff',
      headerTitle: 'Memo App',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerBackTitle: 'Back'
    }
  } />
}

export default Layout
