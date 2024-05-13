import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HasNavbarLayout from "@/pages/@Layout/HasNavbarLayout";
import MainPage from "@/pages/Main/MainPage";
import MyPage from "@/pages/MyPage/MyPage";
import MeetingDetailPage from "@/pages/MeetingDetail/MeetingDetailPage";
import LoginPage from "@/pages/Login/LoginPage";
import KakaoLoginPage from "@/pages/Login/KakaoLoginPage";
import "./App.css";
import MeetingOnPage from "./pages/MeetingOn/MeetingOnPage";
import SelectFolders from "./components/MeetingOn/MeetingOff/SelectFolders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HasNavbarLayout />,
    children: [
      // 메인페이지
      {
        index: true,
        element: <MainPage />,
      },
      // 프로필
      {
        path: "/mypage",
        element: <MyPage />,
      },
      // 회의 상세
      {
        path: "/meeting/:id",
        element: <MeetingDetailPage />,
      },
    ],
  },
  // 회의 진행
  {
    path: "/meeting/on/:sessionId",
    element: <MeetingOnPage />,
  },
  {
    path: "/meeting/off/:sessionId",
    element: <SelectFolders />,
  },
  // 로그인
  {
    path: "/login",
    element: <LoginPage />,
  },
  // 로그인 콜백
  {
    path: "chiwook/oauth/callback/kakao",
    element: <KakaoLoginPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
