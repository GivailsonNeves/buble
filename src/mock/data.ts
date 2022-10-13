import Joinville from "../assets/imgs/joinville.png";
import Kelowna from "../assets/imgs/kelowna.png";
import BubbleLogo from "../assets/imgs/icons/logo_bubble.svg";
import AquaStartLogo from "../assets/imgs/aqua_start_logo.png";
import OpernStartLogo from "../assets/imgs/opern_start_logo.png";
import LogoDemo from "../assets/imgs/nativo_miami.png";
import NatiivoLogo from "../assets/imgs/opern.png";
import backgroundNatiivo from "../assets/imgs/miami_building.png";
import backgroundOpern from "../assets/imgs/opern_building.png";
import headerOpern from "../assets/imgs/opern_logo.png";
import headerNatiivo from "../assets/imgs/natiivo_header.png";

export const BUILDINGS: any[] = [
  {
    id: 1,
    name: "Nativo",
    city: "Miami",
    state: "FL",
    country: "USA",
    bubleIcon: Joinville,
    headerLogo: headerNatiivo,
    logo: BubbleLogo,
    bigLogo: LogoDemo,
    background: backgroundNatiivo,
    theme: "light",
    videUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    view360Data: {
      amount: 36,
      imagePath:
        "https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36",
      fileName: "chair_{index}.jpg?v1",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,",
  },
  {
    id: 2,
    name: "Opern",
    city: "Joinville",
    state: "SC",
    country: "Brazil",
    bubleIcon: Joinville,
    headerLogo: headerOpern,
    logo: OpernStartLogo,
    bigLogo: NatiivoLogo,
    background: backgroundOpern,
    theme: "dark",
    videUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    view360Data: {
      amount: 36,
      imagePath:
        "https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36",
      fileName: "chair_{index}.jpg?v1",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,",
  },
  {
    id: 3,
    name: "Aqua",
    city: "Kelowna",
    state: "BC",
    country: "CAN",
    headerLogo: headerOpern,
    bubleIcon: Kelowna,
    logo: AquaStartLogo,
    bigLogo: LogoDemo,
    background: backgroundOpern,
    theme: "dark",
    videUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    view360Data: {
      amount: 36,
      imagePath:
        "https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36",
      fileName: "chair_{index}.jpg?v1",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,",
  },
];
