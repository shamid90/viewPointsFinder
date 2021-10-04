const findNeighbors = require("./findNeighbors");
const mesh1 = require("../TestMeshFiles/testMesh1.json");
const mesh2 = require("../TestMeshFiles/testMesh2.json");

describe("Test the findNeighbors function", () => {
  test("Element 0 in mesh1", () => {
    const neighbors = findNeighbors(mesh1, mesh1.elements[0]);
    expect(neighbors.length).toBe(2);
    expect(neighbors).toEqual([1, 2]);
  });

  test("Element 2 in mesh1", () => {
    const neighbors = findNeighbors(mesh1, mesh1.elements[2]);
    expect(neighbors.length).toBe(2);
    expect(neighbors).toEqual([0, 1]);
  });

  test("Element 1 in mesh2", () => {
    const neighbors = findNeighbors(mesh2, mesh2.elements[1]);
    expect(neighbors.length).toBe(3);
    expect(neighbors).toEqual([0, 2, 3]);
  });

  test("Element 3 in mesh2", () => {
    const neighbors = findNeighbors(mesh2, mesh2.elements[3]);
    expect(neighbors.length).toBe(1);
    expect(neighbors).toEqual([1]);
  });
});
