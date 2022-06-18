import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  BackgroundImage,
  BodyContainer,
  H2Container,
  PContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
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
