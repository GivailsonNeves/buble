import { useNavigate } from "react-router-dom";
import Home from "../../components/templates/home";
import { useAppContext } from "../../context/AppContext";

interface Props {}

const HomePage: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  const { buildings } = useAppContext();

  return <Home data={buildings} onStart={(id) => navigate(`/start/${id}`)} />;
};

export default HomePage;
