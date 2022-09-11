import Screen from "../../atoms/screen";

import Input from "../../atoms/input";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";

import "./styles.scss";
import BubleLogo from "../../atoms/buble-logo";

interface Props {}

const Login: React.FC<Props> = (props) => {
  return (
    <Screen className="login">
      <div className="logo">
        <BubleLogo />
      </div>
      <form>
        <Input placeholder="login" />
        <Input placeholder="senha" />
        <Button round variant="red-inverted">
          play
        </Button>
      </form>
      <div>
        <Typography color="white" type="small">
          Powered by Elephantskin <br />
          All Rights Reserved to Eelphant Skin Group Corp.
        </Typography>
      </div>
    </Screen>
  );
};

export default Login;
