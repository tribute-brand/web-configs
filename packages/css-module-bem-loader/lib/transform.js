module.exports = (data, filename) => {
  if (!data) {
    throw new Error("Css module object is not defined");
  }
  const bemUtils = {
    block: "",
    element: {},
    modifier: {},
  };
  if (!data[filename]) {
    console.warn(
      "Please make sure your block classname and css filename are equal"
    );
    console.warn(
      "Please make sure the modules.namedExport css-loader option is not enabled"
    );
  }
  return Object.entries(data).reduce(
    (result, [className, generated], index) => {
      const [, element] = className.split("__");
      const [, modifier] = className.split("--");

      const block =
        !element && !modifier && className === filename
          ? generated
          : result.block;
      return {
        ...result,
        block: block,
        element: {
          ...result.element,
          ...(element ? { [element]: generated } : {}),
        },
        modifier: {
          ...result.modifier,
          ...(modifier ? { [modifier]: generated } : {}),
        },
      };
    },
    bemUtils
  );
};
