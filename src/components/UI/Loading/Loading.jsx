import Overlay from "../../UI/Overlay";
import "./loading.css";

const Loading = (props) => {
  return (
    <div className="loading-container">
      <Overlay>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Overlay>
    </div>
  );
};

export default Loading;
