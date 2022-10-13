import Logo from "../../../assets/imgs/icons/buble_white_logo.png";

interface Props {}

const BubleLogo: React.FC<Props> = (props) => {
  return <img width={35} src={Logo} alt="Buble" />;
};

export default BubleLogo;
