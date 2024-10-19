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
  const { nickname, highestLevel, classEngravings, profileImage, key } =
    signUpStore.getState();
  const { title, contents, topics, weekly, daily } =
    consultingInfoStore.getState();
  const { accessToken, refreshToken } = authStore.getState();

  console.log("nickname", nickname);
  console.log("highestLevel", highestLevel);
  console.log("classEngravings", classEngravings);
  console.log("profileImage", profileImage);
  console.log("key", key);
  console.log("title", title);
  console.log("contents", contents);
  console.log("topics", topics);
  console.log("weekly", weekly);
  console.log("daily", daily);
  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);

  let imageUrl = "";
  if (profileImage) {
    const preSignedUrlResponse = await getS3PresignedUrl(
      profileImage.name,
      "profile-images"
    );
    await putS3Upload(profileImage, preSignedUrlResponse.data);
    imageUrl = preSignedUrlResponse.data.split("?")[0];
    console.log(imageUrl);
  }
  // 회원가입
  await postTutorSignUp(
    {
      nickname: nickname,
      profileImageUrl: imageUrl,
      classEngravings: classEngravings,
      highestLevel: highestLevel
    },
    key ?? ""
  );

  // 상담 정보 등록
  await postConsulting({
    title: title,
    contents: contents,
    topics: topics,
    weekly: weekly,
    daily: daily
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
