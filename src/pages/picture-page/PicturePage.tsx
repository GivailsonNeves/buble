import { useNavigate } from "react-router-dom";
import PicturesGallery from "../../components/organisms/pictures-gallery";
import { useAppContext } from "../../context/AppContext";

interface Props {}

const PicturePage: React.FC<Props> = () => {
  const navigate = useNavigate();
  const {
    building: { pictures, pictureDestak },
  } = useAppContext();
  console.log(pictures);
  return (
    pictures &&
    pictureDestak && (
      <PicturesGallery
        imgDestak={pictureDestak}
        hdlBackButton={() => navigate(-1)}
        imgList={pictures}
      />
    )
  );
};

export default PicturePage;
