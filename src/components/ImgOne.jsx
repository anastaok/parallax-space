import One from "../img/one.jpg";
import { Parallax } from "react-parallax";

const ImgOne = () => {
  return (
    <Parallax className="image" bgImage={One} strength={200}>
      <div className="content">
        <span className="img-txt">A trip to Space</span>
      </div>
    </Parallax>
  );
};

export default ImgOne;
