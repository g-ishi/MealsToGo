import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaContainer } from "../../../components/utils/safe-area.component";

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

// コンポーネントのプロパティにデフォルト引数を渡すときは、attrsを使って指定する。
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const listData = [
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "4",
  },
  {
    name: "5",
  },
  {
    name: "6",
  },
  {
    name: "7",
  },
  {
    name: "8",
  },
];

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
        <RestaurantList
          data={listData}
          renderItem={(item) => {
            return (
              <Spacer position="bottom" size="large">
                <RestaurantInfo />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeAreaContainer>
  );
};
