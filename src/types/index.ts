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

export type LossamScheduleList = {
  isBusinessDay: boolean;
  date: string;
  slots: {
    timeRange: {
      start: string;
      end: string;
    };
    isAvailable: boolean;
  }[];
}[];

export type ConsultingReservationDetail = ConsultingReservation & {
  mokokoId: number;
  new: boolean;
  existing: boolean;
};

export type MyReservation = {
  reservationListForms: {
    id: number;
    lossamId: number;
    mokokoId: number;
    inquiryDetails: string;
    dateTimeRanges: {
      start: string;
      end: string;
    }[];
  };
  memberType: string;
};
