import { useMemo, useState } from "react";

import Screen from "../../atoms/screen";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import BubleHeader from "../../atoms/buble-header";
import PoweredBy from "../../atoms/powered-by";

import { Credential } from "../../../models/credential";

import "./styles.scss";
import { useTranslation } from "react-i18next";
import Typography from "../../atoms/typography";
import Box from "../../atoms/box";

interface Props {
  onLogin: (credential: Credential) => Promise<string | undefined>;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [t] = useTranslation();
  const [feedback, setFeedback] = useState<string | undefined>(undefined);
  const [isWaiting, setWaiting] = useState<boolean>(false);
  const [credential, setCredential] = useState<Credential>({
    login: "",
    password: "",
  });

  const hdlLogin = async () => {
    setWaiting(true);
    setFeedback(undefined);
    const message = await onLogin(credential);
    setFeedback(message);
    setWaiting(false);
  };

  const hasAllValues = useMemo(() => {
    return !!credential.login && !!credential.password;
  }, [credential]);

  const changeCredentialValue = (value: string, field: string) => {
    setCredential((c) => ({ ...c, [field]: value }));
  };

  return (
    <Screen className="login">
      <BubleHeader />
      <form>
        <Input
          disabled={isWaiting}
          onChange={(e) => changeCredentialValue(e.target.value, "login")}
          placeholder={t("login")}
        />
        <Input
          disabled={isWaiting}
          onChange={(e) => changeCredentialValue(e.target.value, "password")}
          placeholder={t("password")}
        />
        <Button
          disabled={!hasAllValues}
          type="button"
          onClick={hdlLogin}
          variant="red-inverted"
          round
        >
          {isWaiting ? t("waiting...") : t("play")}
        </Button>
        {feedback && (
          <Box className="feedback">
            <Typography color="white">{feedback}</Typography>
          </Box>
        )}
      </form>
      <PoweredBy />
    </Screen>
  );
};

export default Login;
