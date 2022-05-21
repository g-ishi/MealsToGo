import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

/*
  下記のようなロジックを含まない、スタイルだけのコンポーネントは.stylesファイルにまとめると良い。
  また、グローバルではなく、特定のコンポーネント内部でしか使わないコンポーネントとかもこのファイル。
  Spacerとかはグローバルで使うから、上位層のcomponentに入れている。
*/

// すでにsytled-component化されているコンポーネントを拡張するには、sytledコンストラクタにコンポーネントを渡す
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

// styled-component内のsytleは、完全にCSSの文法で記述可能
// ここで記述したCSSはcss-to-reactを使って、React nativeが解釈できる記述にコンバートされる。
// pxは、単位指定なしと同じ意味になる。
// https://github.com/styled-components/css-to-react-native
export const RestaurantCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[1]} 0;
`;

export const SvgIcon = styled(SvgXml)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const ImageIcon = styled.Image`
  width: ${({ theme }) => theme.sizes[1]};
  height: ${({ theme }) => theme.sizes[1]};
`;
