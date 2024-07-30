import { Label } from "@/components/ui/label.tsx";
import { ImgInputLabel } from "@/components/icons";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useForm } from "react-hook-form";

interface SetNicknameStepProps {
  handleNext: () => void;
}

export const TutorSetNicknameStep = ({ handleNext }: SetNicknameStepProps) => {
  const { register, handleSubmit, formState } = useForm<{ nickname: string }>();
  return (
    <div className="flex flex-col mt-[40px] w-full">
      <Label
        htmlFor="profile-image"
        className="flex flex-col items-center gap-[12px]">
        <ImgInputLabel
          width={50}
          height={50}
        />
        <span>프로필 이미지를 선택해주세요</span>
      </Label>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input
          id="profile-image"
          type="file"
          alt=""
          className="hidden"
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
          disabled={!formState.isValid}
          onClick={handleNext}>
          다음
        </Button>
      </form>
    </div>
  );
};
