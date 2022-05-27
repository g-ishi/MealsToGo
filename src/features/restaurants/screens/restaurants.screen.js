import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeAreaContainer } from "../../../components/utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

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

export const RestaurantsScreen = () => {
  const [query, setQuery] = useState(null);

  const onChangeQuery = (searchText) => {
    setQuery(searchText);
    console.log(query);
  };

  const { restaurants } = useContext(RestaurantsContext);
  console.log("screen: ", restaurants);

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
          data={restaurants}
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
