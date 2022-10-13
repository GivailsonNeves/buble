import Box from "../../components/atoms/box";
import Typography from "../../components/atoms/typography";
import { useAppContext } from "../../context/AppContext";

import "./styles.scss";

interface Props {
  title: string;
}

const PlansPage: React.FC<Props> = ({ title }) => {
  const { building } = useAppContext();

  return (
    <Box className="content-page" column>
      <Typography type="section-title">{title}</Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        mollitia, distinctio cupiditate perferendis corrupti minima, dicta ipsam
        voluptate saepe voluptatum beatae velit inventore? Eum ratione et rem
        exercitationem, esse quisquam.
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        mollitia, distinctio cupiditate perferendis corrupti minima, dicta ipsam
        voluptate saepe voluptatum beatae velit inventore? Eum ratione et rem
        exercitationem, esse quisquam.
      </Typography>
      <Typography>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        mollitia, distinctio cupiditate perferendis corrupti minima, dicta ipsam
        voluptate saepe voluptatum beatae velit inventore? Eum ratione et rem
        exercitationem, esse quisquam.
      </Typography>
    </Box>
  );
};

export default PlansPage;
