import { useTranslation } from "react-i18next";
import Box from "../../components/atoms/box";
import Button from "../../components/atoms/button";
import Screen from "../../components/atoms/screen";
import Input from "../../components/atoms/input";
import Typography from "../../components/atoms/typography";
import { useAppContext } from "../../context/AppContext";

import "./styles.scss";
import { useNavigate } from "react-router-dom";

interface Props {}

const ContactPage: React.FC<Props> = () => {
  const { building } = useAppContext();
  const [t] = useTranslation();
  const navigate = useNavigate();

  return (
    <Screen>
      <Box column className="contact-page">
        <Typography type="section-title">Contact</Typography>
        <Input variant="dark" placeholder={t("name")} />
        <Input variant="dark" placeholder={t("e-mail")} />
        <Input variant="dark" placeholder={t("phone")} />
        <Input variant="dark" placeholder={t("message")} />
        <Box className="contrls">
          <Button onClick={() => navigate(-1)} variant="grey">
            {t("Cancel")}
          </Button>
          <Button variant="grey">{t("Send")}</Button>
        </Box>
      </Box>
    </Screen>
  );
};

export default ContactPage;
