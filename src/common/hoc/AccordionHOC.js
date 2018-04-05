import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const mapStateToProps = state => ({});

export const mapDispatchToProps = {};

export const AccordionHOC = WrappedComponent => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

//   hocComponent.propTypes = {};

  return hocComponent;
};

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(AccordionHOC(WrapperComponent));
