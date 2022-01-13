import commonStyles from "./../commonStyles/commonStyles";

const translateProps = (props) => {   //logic for reusable
  let _styles = { ...commonStyles.default };

  if (props.disable) {
    _styles = { ..._styles, ...commonStyles.disable };
  }

  const newProps = { ...props, styles: _styles };
  return newProps;
};

export default (WrappedComponent) => {
  return function WrappedRender(args) {
    return WrappedComponent(translateProps(args));
  };
};
