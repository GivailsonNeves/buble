import Box from "../../../../components/atoms/box";
import Screen from "../../../../components/atoms/screen";
import Typography from "../../../../components/atoms/typography";

import "./styles.scss";

import DancerPhoto from "../../../../assets/imgs/dancer.png";

interface Props {}

const DetailOpern: React.FC<Props> = (props) => {
  return (
    <Screen className="opernDetail">
      <Box className="call">
        <Typography type="section-sub-title">Cada tom, uma história</Typography>
        <img src={DancerPhoto} alt="Dancer" />
      </Box>
      <Typography>
        O prédio mais alto. <br />
        <br />
        Um novo tom para a cidade.
        <br />
        <br />
        Um projeto inteligente, rodeado de altas notas de tecnologia que envolve
        o público e encanta e clientes investidores que o escolheram para chamar
        de lar.
      </Typography>
    </Screen>
  );
};

export default DetailOpern;
