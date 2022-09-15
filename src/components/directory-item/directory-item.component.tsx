import { FC } from "react";

import { useNavigate } from "react-router-dom";

import { CategoriesShape } from "../directory/directory.component";

import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
  H2Container,
  PContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: CategoriesShape;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <H2Container>{title}</H2Container>
        <PContainer>Shop now</PContainer>
      </BodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
