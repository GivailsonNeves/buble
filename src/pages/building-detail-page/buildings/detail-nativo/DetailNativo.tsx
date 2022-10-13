import { useTranslation } from "react-i18next";
import Screen from "../../../../components/atoms/screen";
import Typography from "../../../../components/atoms/typography";

import "./styles.scss";

interface Props {}

const DetailNativo: React.FC<Props> = (props) => {
  const [t] = useTranslation();
  return (
    <Screen className="detailNativo">
      <Typography color="white" type="title">
        {t("The new way to own")}
      </Typography>
      <Typography color="gold">
        {t(
          "THE FIRST PURPOSEFULLYDESIGNED, BUILT ANDLICENSED BUILDING FORHOMESHARING"
        )}
      </Typography>
      <Typography color="white">
        {t(
          "Natiivo Miami is the first CondoHospitality residential tower in the heart of Downtown Miami, Florida. Residents of our luxury condos for sale are offered an ability to own this unique concept on their terms."
        )}
      </Typography>
      <Typography color="white">
        {t(
          "A vision designed with a true understanding of what it means to be a modern homeowner, of what it means to live on your terms. To live free."
        )}
      </Typography>
    </Screen>
  );
};

export default DetailNativo;
