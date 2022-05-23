import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  midium: 2,
  large: 3,
};

const positionVariant = {
  left: "marginLeft",
  right: "marginRight",
  top: "marginTop",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];
  console.log(`${property}: ${value}`);
  return `${property}: ${value}`;
};

// styledコンポーネント内で動的に関数を呼び出す方法だと、androidで動作しない
// export const Spacer = styled.View`
//   ${({ position, size, theme }) => getVariant(position, size, theme)};
//   }}
// `;

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

// 下の書き方でもデフォルト引数は設定できるが、でストラクチャするたび定義する必要が出てくるので、上の書き方の方がよい。(styled-componentに関しては)
// export const Spacer = styled.View`
//   ${({ position = "top", size = "small", theme }) =>
//     getVariant(position, size, theme)};
//   }}
// `;
