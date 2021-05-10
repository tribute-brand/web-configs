module.exports = function generateConfig(order) {
  const config = [];

  Object.values(order).forEach((property) => {
    const group = { emptyLineBefore: 'always', properties: [] };
    for (let i = 0; i < property.length; i += 1) {
      group.properties = group.properties.concat(property[i]);
    }
    config.push(group);
  });

  return config;
};
