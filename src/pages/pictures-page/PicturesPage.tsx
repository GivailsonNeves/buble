import Pictures from "../../components/templates/pictures";
import { useAppContext } from "../../context/AppContext";

interface Props {}

const PlansPage: React.FC<Props> = () => {
  const { building } = useAppContext();

  return <Pictures building={building} />;
};

export default PlansPage;
