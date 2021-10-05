const findNeighbors = require("./findNeighbors");
const plateau = [];

const findPlateau = (
  mesh,
  neighbors,
  viewPointElement,
  viewElementPointValue
) => {
  const viewPointValue = viewElementPointValue;
  const neighborsWithViewPointValue = [];
  neighbors.forEach((neighbor) => {
    if (mesh.values[neighbor].value === viewPointValue) {
      neighborsWithViewPointValue.push(neighbor);
    }
  });
  const potentialPlateau = [];
  neighborsWithViewPointValue.forEach((neighbor) => {
    potentialPlateau.push(mesh.elements[neighbor]);
  });

  potentialPlateau.forEach((plElement) => {
    plateau.push(plElement.id);
    const plElementNeighbors = findNeighbors(mesh, plElement);
    const neighborsValues = [];
    plElementNeighbors.forEach((neighbor) => {
      neighborsValues.push(mesh.values[neighbor].value);
    });

    if (viewPointValue === Math.max(...neighborsValues)) {
      plElementNeighbors.forEach((neighbor) => {
        if (mesh.values[neighbor].value === viewPointValue) {
          plateau.push(neighbor);
        }
      });
    }
  });

  return plateau;
};

module.exports = findPlateau;
