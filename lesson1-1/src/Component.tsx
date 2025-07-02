// \u96e3\u6613\u5ea6: 1/10
// 学習目標: 関数コンポーネントと Props の基本を理解する
import React from 'react'
// Step0: ソリューションを参考にする場合はインポート
import { Hello as Solution } from './Component.solution'

type Props = {
  message: string
}

export const Hello: React.FC<Props> = (props) => {
  // Step 1: props から message を取り出す
  // Step 2: message を表示する JSX を返す
  /* TODO: 上記の処理を実装 */
}

// 完成イメージ: <div>に props で渡されたメッセージを表示する
