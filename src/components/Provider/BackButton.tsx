import { ArrowLeft } from "@/components/icons";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <ArrowLeft
      className="cursor-pointer"
      onClick={() => navigate(-1)}
    />
  );
};

export default BackButton;
