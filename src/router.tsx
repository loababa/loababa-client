import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "@/Layouts/BasicLayout.tsx";
import ROUTE_PATH from "@/constants/routePath.ts";
import HomePage from "@/pages/HomePage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import SignUpTutorPage from "@/pages/SignUpTutorPage.tsx";
import SignUpTuteePage from "@/pages/SignUpTuteePage.tsx";
import TutorDetailPage from "@/pages/TutorDetailPage.tsx";
import ConsultingRequestPage from "@/pages/ConsultingRequestPage.tsx";
import ConsultingPage from "@/pages/ConsultingPage.tsx";
import ConsultingDetailPage from "@/pages/ConsultingDetailPage.tsx";
import MyPage from "@/pages/MyPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: <HomePage />
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: <LoginPage />
      },
      {
        path: ROUTE_PATH.SIGNUP_TUTOR,
        element: <SignUpTutorPage />
      },
      {
        path: ROUTE_PATH.SIGNUP_TUTEE,
        element: <SignUpTuteePage />
      },
      {
        path: ROUTE_PATH.TUTOR_DETAIL(":id"),
        element: <TutorDetailPage />
      },
      {
        path: ROUTE_PATH.CONSULTING_REQUEST(":id"),
        element: <ConsultingRequestPage />
      },
      {
        path: ROUTE_PATH.CONSULTING,
        element: <ConsultingPage />
      },
      {
        path: ROUTE_PATH.CONSULTING_DETAIL(":id"),
        element: <ConsultingDetailPage />
      },
      {
        path: ROUTE_PATH.MYPAGE,
        element: <MyPage />
      }
    ]
  }
]);

export default router;
