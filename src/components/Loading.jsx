import Lottie from "lottie-react";
import laptopAnimation from "../data/laptop.json";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <Lottie className="w-80 h-80 px-4 text-white" animationData={laptopAnimation} />
    </div>
  );
};

export default Loading;
