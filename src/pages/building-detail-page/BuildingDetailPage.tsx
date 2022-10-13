import { useAppContext } from "../../context/AppContext";
import DetailNativo from "./buildings/detail-nativo";
import DetailOpern from "./buildings/detail-opern";

interface Props {}

const BuildingDetailPage: React.FC<Props> = (props) => {
  const { building } = useAppContext();
  console.log(building);

  return building.name === "Nativo" ? <DetailNativo /> : <DetailOpern />;
};

export default BuildingDetailPage;
