import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  SvgIcon,
  ImageIcon,
} from "./restaurant-info.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.0,
    isClosedTemporarily = true,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {[...Array(Math.floor(rating))].map(() => {
              return <SvgIcon xml={star} />;
            })}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text>CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgIcon xml={open} />}
            </Spacer>
            <Spacer position="left" size="large">
              <ImageIcon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="body">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
