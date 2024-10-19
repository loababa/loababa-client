import { TutorSetNicknameStep } from "@/components/Stepper/TutorSignUpStep/TutorSetNicknameStep.tsx";
import { TutorSetJobImprintStep } from "@/components/Stepper/TutorSignUpStep/TutorSetJobImprintStep.tsx";
import { TutorSetIntroduceStep } from "@/components/Stepper/TutorSignUpStep/TutorSetIntroduceStep.tsx";
import { TutorSetScheduleStep } from "@/components/Stepper/TutorSignUpStep/TutorSetScheduleStep.tsx";
import { signUpStore } from "@/stores/signUpStore.ts";
import { consultingInfoStore } from "@/stores/consultingInfoStore.ts";
import authStore from "@/stores/authStore.ts";
import { getS3PresignedUrl } from "@/apis/getS3PresignedUrl.ts";
import { putS3Upload } from "@/apis/putS3Upload.ts";
import { postTutorSignUp } from "@/apis/postTutorSignUp.ts";
import { postConsulting } from "@/apis/postConsulting.ts";

const handleComplete = async () => {
  console.log("complete");
  console.log("nickname", signUpStore.getState().nickname);
  console.log("highestLevel", signUpStore.getState().highestLevel);
  console.log("classEngravings", signUpStore.getState().classEngravings);
  console.log("profileImage", signUpStore.getState().profileImage);
  console.log("title", consultingInfoStore.getState().title);
  console.log("contents", consultingInfoStore.getState().contents);
  console.log("topics", consultingInfoStore.getState().topics);
  console.log("weekly", consultingInfoStore.getState().weekly);
  console.log("daily", consultingInfoStore.getState().daily);
  console.log("acToken", authStore.getState().accessToken);
  console.log("rfToken", authStore.getState().refreshToken);
  console.log("key", signUpStore.getState().key);

  const profileImage = signUpStore.getState().profileImage;
  let imageUrl = "";
  if (profileImage) {
    const presignedUrlResponse = await getS3PresignedUrl(
      profileImage.name,
      "profile-images"
    );
    await putS3Upload(profileImage, presignedUrlResponse.data);
    imageUrl = presignedUrlResponse.data.split("?")[0];
    console.log(imageUrl);
  }
  // 회원가입
  await postTutorSignUp(
    {
      nickname: signUpStore.getState().nickname,
      profileImageUrl: imageUrl,
      classEngravings: signUpStore.getState().classEngravings,
      highestLevel: signUpStore.getState().highestLevel
    },
    signUpStore.getState().key ?? ""
  );

  // 상담 정보 등록
  await postConsulting({
    title: consultingInfoStore.getState().title,
    contents: consultingInfoStore.getState().contents,
    topics: consultingInfoStore.getState().topics,
    weekly: consultingInfoStore.getState().weekly,
    daily: consultingInfoStore.getState().daily
  });
};

export const tutorSignUpStepInfo = [
  {
    label: "기본 정보",
    step: (handleNext: () => void) => (
      <TutorSetNicknameStep handleNext={handleNext} />
    )
  },
  {
    label: "직업 정보",
    step: (handleNext: () => void) => (
      <TutorSetJobImprintStep handleNext={handleNext} />
    )
  },
  {
    label: "로쌤 소개",
    step: (handleNext: () => void) => (
      <TutorSetIntroduceStep handleNext={handleNext} />
    )
  },
  {
    label: "일정 선택",
    step: () => <TutorSetScheduleStep handleComplete={handleComplete} />
  }
];
