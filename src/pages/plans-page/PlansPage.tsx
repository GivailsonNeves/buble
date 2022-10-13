import Pictures from "../../components/templates/pictures";
import ResidentialView from "../../components/templates/residential-view";
import { useAppContext } from "../../context/AppContext";

interface Props {}

const PicturesPage: React.FC<Props> = () => {
  const { building } = useAppContext();

  return <ResidentialView building={building} />;
};

export default PicturesPage;
