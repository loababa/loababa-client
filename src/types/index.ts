export type TutorInfo = {
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
