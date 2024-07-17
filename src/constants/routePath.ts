const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP_TUTOR: "/signup/tutor",
  SIGNUP_TUTEE: "/signup/tutee",
  TUTOR_DETAIL: (id: string) => `/tutor/${id}`,
  CONSULTING_REQUEST: (id: string) => `/tutor/${id}/consulting-request`,
  CONSULTING: "/consulting",
  CONSULTING_DETAIL: (id: string) => `/consulting/${id}`,
  MYPAGE: "/mypage"
};

export default ROUTE_PATH;
