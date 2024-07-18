import { AppShell, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";
import {
  IconCalendarPlus,
  IconHome,
  IconLogout2,
  IconReport,
  IconSchool,
  IconToolsKitchen2,
  IconTrendingUp,
  IconUserCircle,
} from "@tabler/icons-react";
export const Navbar = () => {
  const links = [
    {
      name: "Главная",
      path: "/",
      icon: <IconHome className="icon" stroke={1.4} />,
    },
    {
      name: "Питание",
      path: "/nutrition",
      icon: <IconToolsKitchen2 className="icon" stroke={1.4} />,
    },
    {
      name: "Прогресс",
      path: "/me/progress",
      icon: <IconTrendingUp className="icon" stroke={1.4} />,
    },
    {
      name: "Добавить прогресс",
      path: "/me/progress/new-report",
      icon: <IconCalendarPlus className="icon" stroke={1.4} />,
    },
    {
      name: "Отчеты",
      path: "/me/progress/reports",
      icon: <IconReport className="icon" stroke={1.4} />,
    },
    {
      name: "Тренер",
      path: "/trainer",
      icon: <IconSchool className="icon" stroke={1.4} />,
    },
    {
      name: "Профиль",
      path: "/me",
      icon: <IconUserCircle className="icon" stroke={1.4} />,
    },
  ];
  return (
    <AppShell.Navbar p="md">
      <ul className="navbar-links">
        {links.map((link) => (
          <NavLink key={link.name} to={link.path}>
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </ul>
      <Button className="navbar-logout">
        <IconLogout2 stroke={1.4} />
        Выйти
      </Button>
    </AppShell.Navbar>
  );
};
