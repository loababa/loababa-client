const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  SIGNUP_TUTOR: "/lossam/signup",
  SIGNUP_TUTEE: "/mokoko/signup",
  TUTOR_DETAIL: (id: string) => `/lossam/${id}`,
  CONSULTING_REQUEST: (id: string) => `/lossam/${id}/consulting-request`,
  CONSULTING: "/consulting",
  CONSULTING_DETAIL: (id: string) => `/consulting/${id}`,
  MYPAGE: "/mypage"
};

export default ROUTE_PATH;
