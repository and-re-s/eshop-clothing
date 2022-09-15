import { useEffect, FC, PropsWithChildren } from "react";
import { useLocation } from "react-router";

const ScrollToTop: FC<PropsWithChildren> = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
