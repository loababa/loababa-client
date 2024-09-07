import { Label } from "@/components/ui/label.tsx";
import { ImgInputLabel } from "@/components/icons";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { signUpStore } from "@/stores/signUpStore.ts";

interface SetNicknameStepProps {
  handleNext: () => void;
}

export const TutorSetNicknameStep = ({ handleNext }: SetNicknameStepProps) => {
  const { setNickname, setProfileImage } = signUpStore();
  const { register, handleSubmit, watch, formState, setValue } = useForm<{
    nickname: string;
    profileImage: File;
  }>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleLoadImage = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = event.target.files?.[0];
    reader.onloadend = () => {
      setImageSrc(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImageFile(file);
      setValue("profileImage", file);
    }
  };

  return (
    <div className="flex flex-col mt-[40px] w-full">
      <Label
        htmlFor="profile-image"
        className="flex flex-col items-center gap-[12px]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="local-profile-image"
            width={50}
            height={50}
          />
        ) : (
          <ImgInputLabel
            width={50}
            height={50}
          />
        )}
        <span>프로필 이미지를 선택해주세요</span>
      </Label>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log("data", data);
          // const res = await getNicknameCheck(data.nickname);
          // console.log(res);
        })}>
        <Input
          id="profile-image"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          alt=""
          className="hidden"
          onChange={handleLoadImage}
        />
        <div className="flex flex-col gap-[10px] justify-start mt-[40px]">
          <Label htmlFor="nickname">닉네임을 입력해주세요</Label>
          <Input
            id="nickname"
            className="dark:bg-gray-900 dark:placeholder:text-gray-600 dark:border-gray-800 h-[52px] rounded-[8px]"
            placeholder="공백 포함 8자 이내"
            {...register("nickname", { required: true, maxLength: 8 })}
          />
        </div>
        <Button
          className="w-full mt-[40px]"
          disabled={!formState.isValid}>
          다음
        </Button>
      </form>
    </div>
  );
};
