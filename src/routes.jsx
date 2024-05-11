import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/landing-page/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/landing-page/profile",
    element: <Profile />,
  },
  {
    name: "Sign In",
    path: "/landing-page/sign-in",
    element: <SignIn />,
  },
  {
    name: "Sign Up",
    path: "/landing-page/sign-up",
    element: <SignUp />,
  },
  
];

export default routes;
