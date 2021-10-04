const findNeighbors = require("./findNeighbors");

const isElementViewPoint = (mesh, element, elementValue) => {
  const neighbors = findNeighbors(mesh, element);
  const neighborsValues = [];
  neighbors.forEach((neighbor) => {
    const elWithValue = mesh.values.find((e) => e.element_id === neighbor);
    neighborsValues.push(elWithValue.value);
  });
  if (elementValue >= Math.max(...neighborsValues)) {
    return {
      viewPoint: true,
      notViewPoints: [...neighbors],
    };
  }
};

module.exports = isElementViewPoint;
