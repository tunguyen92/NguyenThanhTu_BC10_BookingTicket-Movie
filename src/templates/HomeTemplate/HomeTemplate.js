import { Fragment } from "react";
import { Route } from "react-router-dom";

export const HomeTemplate = (props) => {
  //props là path, exact, Component
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        // props.location
        //props.history
        //props.match

        return (
          <Fragment>
            <h1>Đây là homepage</h1>

            <Component {...propsRoute} />

            <footer>Đây là footer</footer>
          </Fragment>
        );
      }}
    />
  );
};
