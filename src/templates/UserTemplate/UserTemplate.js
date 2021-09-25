import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import bg from "../../assets/images/bg.jpg";

export const UserTemplate = (props) => {
  //props là path, exact, Component
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location
        //props.history
        //props.match

        return (
          <div
            className="limiter"
            style={{
              margin: "0 auto",
              background: `url(${bg})`,
              width: "100%",
              height: "780px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
