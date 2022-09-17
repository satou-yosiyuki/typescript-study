import type { NextPage } from "next";
import { TwitterCard } from "../components/TwitterCard";

// 型推論 型を推測してくれる
// 型アノテーション 型を明示的に示す
// 型アサーション型を上書きする
// プリミティブ型とオブジェクト(プリミティブ型以外、配列、関数など)
// nullよりundifinedが推奨
// APIでjsonを返すときはnull
// LiteralTypes 文字列やNumberやbooleanなどを限定的に宣言する
//any時は実行するときも何でも行ける
// unknownは実行するときは型安全
// void関数の返り値がない

const Home: NextPage = () => {
  return (
    <TwitterCard
      type="promotion"
      user={{
        name: "あいうえお",
        accountName: "aiueo",
        image: "https://aiueo",
      }}
      body={{
        text: "おはようございます",
      }}
      analytics={[
        { path: "aiueo", count: 1 },
        { path: "aiueo", count: 1 },
        { path: "aiueo", count: 1 },
      ]}
    />
  );
};
export default Home;
