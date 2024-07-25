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
import MyPage from "@/pages/MyPage.tsx";
import { ArrowLeft, Notification } from "@/components/icons";
import ConsultingDetailPage from "@/pages/ConsultingDetailPage.tsx";

const router = createBrowserRouter([
  {
    element: <BasicLayout />,
    children: [
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
      }
    ]
  },
  {
    element: <BasicLayout withFooter />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: <HomePage />
      },
      {
        path: ROUTE_PATH.MYPAGE,
        element: <MyPage />
      }
    ]
  },
  {
    element: (
      <BasicLayout
        withHeader
        withHeaderOptions={{ leftUI: "일정", rightUI: <Notification /> }}
        withFooter
      />
    ),
    children: [
      {
        path: ROUTE_PATH.CONSULTING,
        element: <ConsultingPage />
      }
    ]
  },
  {
    element: (
      <BasicLayout
        withHeader
        withHeaderOptions={{ leftUI: <ArrowLeft />, title: "상세 보기" }}
        withFooter
      />
    ),
    children: [
      {
        path: ROUTE_PATH.CONSULTING_DETAIL(":id"),
        element: <ConsultingDetailPage />
      }
    ]
  },
  {
    element: (
      <BasicLayout
        withHeader
        withHeaderOptions={{ leftUI: <ArrowLeft />, title: "상담 요청하기" }}
        withFooter
      />
    ),
    children: [
      {
        path: ROUTE_PATH.CONSULTING_REQUEST(":id"),
        element: <ConsultingRequestPage />
      }
    ]
  },
  {
    element: (
      <BasicLayout
        withHeader
        withHeaderOptions={{ leftUI: <ArrowLeft />, title: "상담 요청하기" }}
        withFooter
      />
    ),
    children: [
      {
        path: ROUTE_PATH.TUTOR_DETAIL(":id"),
        element: <TutorDetailPage />
      }
    ]
  }
]);

export default router;
