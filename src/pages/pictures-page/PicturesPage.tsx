import Pictures from "../../components/templates/pictures";
import { useAppContext } from "../../context/AppContext";

interface Props {}

const PicturesPage: React.FC<Props> = () => {
  const { building } = useAppContext();

  return <Pictures backgronImgPath={building.background} />;
};

export default PicturesPage;
