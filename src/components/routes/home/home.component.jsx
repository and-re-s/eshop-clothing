import { Outlet } from "react-router-dom";
import ListCategories from "../../../components/list-categories/list-categories.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <ListCategories />
    </div>
  );
};

export default Home;
