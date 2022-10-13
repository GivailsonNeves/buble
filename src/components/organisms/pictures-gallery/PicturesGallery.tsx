import React, { useMemo } from "react";
import Box from "../../atoms/box";
import { ArrowLeftIcon } from "../../atoms/icon";
import IconButton from "../../atoms/icon-button";
import Screen from "../../atoms/screen";
import SlashPagination from "../../atoms/slash-pagination";
import "./styles.scss";

export type GalleryPicture = {
  path: string;
  title?: string;
};
interface Props {
  className?: string;
  imgDestak: GalleryPicture;
  imgList: GalleryPicture[];
}

const PicturesGallery: React.FC<Props> = ({
  className,
  imgDestak,
  imgList,
}) => {
  const classNameValue = useMemo(() => {
    const classValues = ["app-pictures-gallery"];
    if (className) classValues.push(className);
    return classValues.join(" ");
  }, [className]);

  return (
    <Screen className={classNameValue}>
      <Box className="high-light">
        <img src={imgDestak.path} alt={imgDestak.title} />
      </Box>
      <Box className="images">
        <div className="img-grid">
          {imgList.map((image) => (
            <a onClick={() => console.log(image)}>
              <img src={image.path} alt={image.title} />
            </a>
          ))}
        </div>
      </Box>
      <Box className="contrls">
        <Box>
          <IconButton variant="content" size="s">
            <ArrowLeftIcon color="white" size={20} />
          </IconButton>
        </Box>
        <Box className="nav">
          <SlashPagination
            onChange={(page) => console.log(page)}
            totalPages={3}
          />
        </Box>
        <Box />
      </Box>
    </Screen>
  );
};

export default PicturesGallery;
