import View360 from "../../components/templates/view-360";
import { useAppContext } from "../../context/AppContext";

interface Props {
  on360View: () => void;
}

const BuildingPage: React.FC<Props> = ({ on360View }) => {
  const { building } = useAppContext();

  return <View360 building={building} on360View={on360View} />;
};

export default BuildingPage;
