import Screen from "../../atoms/screen";

import Button from "../../atoms/button";
import Input from "../../atoms/input";

import BubleHeader from "../../atoms/buble-header";
import PoweredBy from "../../atoms/powered-by";
import "./styles.scss";

interface Props {}

const Login: React.FC<Props> = (props) => {
  return (
    <Screen className="login">
      <BubleHeader />
      <form>
        <Input placeholder="login" />
        <Input placeholder="senha" />
        <Button round variant="red-inverted">
          play
        </Button>
      </form>
      <PoweredBy />
    </Screen>
  );
};

export default Login;
