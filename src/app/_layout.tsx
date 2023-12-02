import { Slot } from 'expo-router'

// _layout.tsxは特殊なファイルで、デフォルトのレイアウトを設定する
// ディレクトリごとにファイルを作成すると、そのディレクトリのルートとなり配下のファイルはそのレイアウトを継承する
const Layout = (): JSX.Element => {
  return <Slot />
}

export default Layout
