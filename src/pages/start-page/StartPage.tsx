import { useNavigate } from "react-router-dom";
import Typography from "../../components/atoms/typography";
import Start from "../../components/templates/start";
import { useAppContext } from "../../context/AppContext";

interface Props {}

const StartPage: React.FC<Props> = () => {
  const { building } = useAppContext();

  const navigate = useNavigate();

  return (
    <Start
      backgronImgPath={building?.background || ""}
      imgPath={building?.bigLogo || ""}
      onStart={() => navigate(`/building/${building.id}`)}
    >
      <Typography color="white">{building?.description}</Typography>
    </Start>
  );
};

export default StartPage;
