/* eslint-disable react/prop-types */

const Overlay = (props) => {
  return (
    <div className="absolute top-0 flex h-full w-full items-center justify-center">
      {props.children}
    </div>
  );
};

export default Overlay;
