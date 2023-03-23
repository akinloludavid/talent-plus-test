import { useRoutes } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { AppRoutes } from "./routes";

export const AppRouteWrapper = () => {
  const routes = useRoutes(AppRoutes);
  return routes;
};

export const Pages = () => {
  return (
    <PageLayout>
      <AppRouteWrapper />;
    </PageLayout>
  );
};
