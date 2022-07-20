import Three from "../img/three.jpg";
import { Parallax } from "react-parallax";

const ImgThree = () => {
  return (
    <Parallax className="image" bgImage={Three} strength={200}>
      <div className="content">
        <span className="img-txt">A trip to Space</span>
      </div>
    </Parallax>
  );
};

export default ImgThree;
