import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

// templateString内なので、変数を使うには${}で囲む。
// androidにしかない機能を使う場合には、条件式を入れて記述するようにする
export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;
