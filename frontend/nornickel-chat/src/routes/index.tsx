import { RouteObject } from "react-router-dom";
import { ChatPage } from "./Pages";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <ChatPage />,
  },
];

export default routes;
