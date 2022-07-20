import Two from "../img/two.jpg";
import { Parallax } from "react-parallax";

const ImgTwo = () => {
  return (
    <Parallax className="image" bgImage={Two} strength={200}>
      <div className="content">
        <span className="img-txt">A trip to Space</span>
      </div>
    </Parallax>
  );
};

export default ImgTwo;
