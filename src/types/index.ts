export type ConsultingPostListItem = {
  consultingPostId: number;
  lossamId: number;
  profileImageUrl: string;
  nickname: string;
  highestLevel: number;
  classEngravings: string[];
  consultingTitle: string;
  consultingTopics: string[];
};

export type ConsultingPostDetail = {
  title: string;
  contents: string;
  topics: string[];
};

export type ConsultingReservation = {
  reservationId?: number;
  reservationPreResponses: {
    reservationPreResponsesId?: number;
    characterDetails: string;
    inquiryDetails: string;
    experience: string;
    contactNumber: string;
  };
  reservationTimes: {
    reservationDateTimeId?: number;
    dateTimeRange: {
      start: string;
      end: string;
    };
  }[];
  lossamId: number;
};
