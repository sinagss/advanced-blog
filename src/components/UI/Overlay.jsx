/* eslint-disable react/prop-types */

const Overlay = (props) => {
  return (
    <div className="absolute top-0 z-40 flex h-full w-full items-center justify-center backdrop-blur-sm">
      {props.children}
    </div>
  );
};

export default Overlay;
