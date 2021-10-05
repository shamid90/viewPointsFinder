const findNeighbors = require("./findNeighbors");
const plateau = [];

const findPlateau = (
  mesh,
  neighbors,
  viewPointElement,
  viewElementPointValue
) => {
  const viewPointValue = viewElementPointValue;
  // const neighborsWithViewPointValue = mesh.values
  //   .filter(
  //     (e) => neighbors.includes(e.element_id) && e.value === viewPointValue
  //   )
  //   .map((e) => e.element_id);

  const neighborsWithViewPointValue = [];
  neighbors.forEach((neighbor) => {
    if (mesh.values[neighbor].value === viewPointValue) {
      neighborsWithViewPointValue.push(neighbor);
    }
  });

  // const potentialPlateau = mesh.elements.filter((e) =>
  //   neighborsWithViewPointValue.includes(e.id)
  // );
  const potentialPlateau = [];
  neighborsWithViewPointValue.forEach((neighbor) => {
    potentialPlateau.push(mesh.elements[neighbor]);
  });

  potentialPlateau.forEach((plElement) => {
    plateau.push(plElement.id);
    const plElementNeighbors = findNeighbors(mesh, plElement).filter(
      (neighbor) => neighbor !== viewPointElement.id
    );
    const neighborsValues = [];
    plElementNeighbors.forEach((neighbor) => {
      const elWithValue = mesh.values.find((e) => e.element_id === neighbor);
      neighborsValues.push(elWithValue.value);
    });
    if (viewPointValue === Math.max(...neighborsValues)) {
      findPlateau(mesh, plElementNeighbors, plElement, viewPointValue);
    } else {
      return;
    }
  });

  return plateau;
};

module.exports = findPlateau;

// Find elements with the same values as view Point Value
// Add them(id) into plateau (later on into notViewPoints)
// Find the neighbors of those Elements
// IF a neighbor has same value as view Point Value

//Recursion (findPlateu)

// Else break;
