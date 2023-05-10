import { Link, useRouteError } from "react-router-dom";
import { Button } from "antd";
import Overlay from "../components/UI/Overlay";

const Error = () => {
  const error = useRouteError();

  return (
    <Overlay>
      <div className="z-50 m-8 flex max-w-xl flex-col items-center rounded-sm border-4 p-2">
        <h3>Oops !!! Something went wrong!</h3>
        <p>The specified route could not be found</p>
        <div className="flex flex-col">
          <p>
            <i>{error.statusText}</i>
            <i>{error.message}</i>
          </p>
        </div>
        <Button type="primary">
          <Link to="/">TAKE ME BACK!</Link>
        </Button>
      </div>
    </Overlay>
  );
};

export default Error;
