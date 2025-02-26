import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Pricing",
    newTab: false,
    path: "/#pricing",
  },
  {
    id: 4,
    title: "Login",
    newTab: false,
    submenu: [
      {
        id: 3,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 4,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
    ],
  },
  

  {
    id: 5,
    title: "Contact Us",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
