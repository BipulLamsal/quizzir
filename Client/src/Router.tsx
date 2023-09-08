import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "./pages/Feed";
import FlashCard from "./pages/FlashCard";
import Quiz from "./pages/Quiz";
import QuizHunt from "./pages/QuizHunt";
import App from "./App";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path:"/",
          element: <Feed></Feed>
        },
        {
          path: "/feed",
          element: <Feed></Feed>,
        },
        {
          path: "/flashcard",
          element: <FlashCard></FlashCard>,
        },
        {
          path: "/quiz",
          element: <Quiz></Quiz>,
        },
        {
          path: "/quizhunt",
          element: <QuizHunt></QuizHunt>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default Router;
