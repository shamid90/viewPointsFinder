const findNeighbors = require("./findNeighbors");
const findPlateau = require("./findPlateauFast");

const isElementViewPoint = (mesh, element, elementValue) => {
  const neighbors = findNeighbors(mesh, element);
  const neighborsValues = [];
  neighbors.forEach((neighbor) => {
    // const elWithValue = mesh.values.find((e) => e.element_id === neighbor);
    // neighborsValues.push(elWithValue.value);
    neighborsValues.push(mesh.values[neighbor].value);
  });
  if (elementValue > Math.max(...neighborsValues)) {
    return {
      viewPoint: true,
      notViewPoints: [...neighbors],
    };
  } else if (elementValue === Math.max(...neighborsValues)) {
    const plateau = findPlateau(mesh, neighbors, element, elementValue);
    return {
      viewPoint: true,
      notViewPoints: [...neighbors, ...plateau],
    };
  }
};

module.exports = isElementViewPoint;
