import { RouteObject, useRoutes } from "react-router-dom";
import { routes } from "../routes/routes";

import { AppShell } from "@mantine/core";

import { Header, Navbar } from "./navigation";
import { useDisclosure } from "@mantine/hooks";

export const App = () => {
  const elements = useRoutes(routes() as RouteObject[]);

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        padding="md"
      >
        <Header
          toggleMobile={toggleMobile}
          toggleDesktop={toggleDesktop}
          mobileOpened={mobileOpened}
          desktopOpened={desktopOpened}
        />
        <Navbar />
        <AppShell.Main>{elements}</AppShell.Main>
      </AppShell>
    </>
  );
};
