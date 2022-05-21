import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";

// templateString内なので、変数を使うには${}で囲む。
// androidにしかない機能を使う場合には、条件式を入れて記述するようにする
const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

// styled内は、CSSでもかけるし、react-nativeのcss記法でも記述できる
const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [query, setQuery] = useState(null);

  const onChangeQuery = (searchText) => {
    setQuery(searchText);
    console.log(query);
  };

  return (
    <SafeAreaContainer>
      <SearchContainer>
        <Searchbar
          placeholder="search food."
          value={query}
          onChangeText={onChangeQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeAreaContainer>
  );
};
