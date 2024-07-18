import { AppShell, Burger, Group } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  toggleDesktop: () => void;
  toggleMobile: () => void;
  mobileOpened: boolean;
  desktopOpened: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  toggleDesktop,
  toggleMobile,
  mobileOpened,
  desktopOpened,
}) => {
  return (
    <AppShell.Header>
      <Group h="100%" px="md" className="header">
        <Burger
          opened={mobileOpened}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
        />
        <Burger
          opened={desktopOpened}
          onClick={toggleDesktop}
          visibleFrom="sm"
          size="sm"
        />
        <div>
          <NavLink className="header-link" to="login">
            Войти
          </NavLink>
          <NavLink className="header-link" to="/me">
            Аватарка
          </NavLink>
        </div>
      </Group>
    </AppShell.Header>
  );
};
