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
import picture from "../assets/imgs/picture.png";

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
    htmlMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991440608184!2d2.2922926155967973!3d48.858373608662056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-BR!2sbr!4v1665664081230!5m2!1spt-BR!2sbr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,",
    pictures: [
      { title: "test1", path: picture },
      { title: "test1", path: picture },
      { title: "test2", path: picture },
      { title: "test3", path: picture },
      { title: "test4", path: picture },
      { title: "test5", path: picture },
    ],
    pictureDestak: {
      title: "test1",
      path: picture,
    },
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
    htmlMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991440608184!2d2.2922926155967973!3d48.858373608662056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-BR!2sbr!4v1665664081230!5m2!1spt-BR!2sbr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,",
    pictures: [
      { title: "test1", path: picture },
      { title: "test1", path: picture },
      { title: "test2", path: picture },
      { title: "test3", path: picture },
      { title: "test4", path: picture },
      { title: "test5", path: picture },
    ],
    pictureDestak: {
      title: "test1",
      path: picture,
    },
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
    htmlMapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991440608184!2d2.2922926155967973!3d48.858373608662056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1spt-BR!2sbr!4v1665664081230!5m2!1spt-BR!2sbr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt aperiam id cupiditate nisi! Blanditiis esse vel rem est quisquam ratione dicta totam nemo. Dignissimos hic fuga nam accusamus laudantium.,",
    pictures: [
      { title: "test1", path: picture },
      { title: "test1", path: picture },
      { title: "test2", path: picture },
      { title: "test3", path: picture },
      { title: "test4", path: picture },
      { title: "test5", path: picture },
    ],
    pictureDestak: {
      title: "test1",
      path: picture,
    },
  },
];
