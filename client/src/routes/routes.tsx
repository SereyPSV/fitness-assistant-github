import { AdminNutrition } from "../pages/admin-nutrition";
import { Admin } from "../pages/admin";
import { Chat } from "../pages/chat";
import { Client } from "../pages/client";
import { Main } from "../pages/main";
import { NewReport } from "../pages/new-report";
import { Nutrition } from "../pages/nutrition";
import { Profile } from "../pages/profile";
import { Progress } from "../pages/progress";
import { Report } from "../pages/report";
import { Reports } from "../pages/reports";
import { Signup } from "../pages/signup";
import { Trainer } from "../pages/trainer";

export const routes = () => [
  {
    path: "",
    element: <Main />,
  },
  {
    path: "login",
    element: <Main />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "me",
    element: <Profile />,
  },
  {
    path: "nutrition",
    element: <Nutrition />,
  },
  {
    path: "me/progress",
    element: <Progress />,
  },
  {
    path: "me/progress/new-report",
    element: <NewReport />,
  },
  {
    path: "me/progress/reports",
    element: <Reports />,
  },
  {
    path: "me/progress/reports/:id",
    element: <Report />,
  },
  {
    path: "trainer",
    element: <Trainer />,
  },
  {
    path: "admin",
    element: <Admin />,
  },
  {
    path: "admin/chat/:id",
    element: <Chat />,
  },
  {
    path: "admin/client/:id",
    element: <Client />,
  },
  {
    path: "admin/nutrition",
    element: <AdminNutrition />,
  },
];
