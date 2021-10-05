const sortArrayOfObjects = require("./helperFunctions/sortArrayOfObjects");
const isElementViewPoint = require("./helperFunctions/isElementViewPoint");

const findViewPoints = (mesh, maxNumberOfViewPoints) => {
  const viewPoints = [];
  const notViewPoints = [];

  const sortedElmentsByValue = sortArrayOfObjects([...mesh.values]);
  for (element of sortedElmentsByValue) {
    if (!notViewPoints.some((e) => e === element.element_id)) {
      // const elWithNodes = mesh.elements.find(
      //   (e) => e.id === element.element_id
      // );
      const elWithNodes = mesh.elements[element.element_id];
      const checkedElement = isElementViewPoint(
        mesh,
        elWithNodes,
        element.value
      );
      if (checkedElement?.viewPoint) {
        viewPoints.push(element);
        notViewPoints.push(...checkedElement.notViewPoints);
        if (viewPoints.length >= maxNumberOfViewPoints) break;
      }
    }
  }
  return viewPoints;
};

module.exports = findViewPoints;
