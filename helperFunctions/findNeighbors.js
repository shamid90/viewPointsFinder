const findNeighbors = (mesh, element) => {
  const neighbors = [];
  mesh.elements.forEach((el) => {
    if (
      el.nodes.some((node) => element.nodes.includes(node)) &&
      el.id !== element.id
    ) {
      neighbors.push(el.id);
    }
  });
  return neighbors;
};

module.exports = findNeighbors;
