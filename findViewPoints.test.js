const findViewPoints = require("./findViewPoints");
const sortArrayOfObjects = require("./helperFunctions/sortArrayOfObjects");
const mesh1 = require("./TestMeshFiles/testMesh1.json");
const mesh2 = require("./TestMeshFiles/testMesh2.json");
const mesh3 = require("./TestMeshFiles/testMesh3.json");

describe("Test the findViewPoints function", () => {
  test("view points in mesh1", () => {
    const viewPoints = findViewPoints(mesh1, 1);
    expect(viewPoints.length).toBe(1);
    expect(viewPoints).toEqual([{ element_id: 2, value: 1.60894 }]);
  });

  test("view points in mesh2", () => {
    const viewPoints = findViewPoints(mesh2, 5);
    expect(viewPoints.length).toBe(1);
    expect(viewPoints[0].element_id).toBe(1);
  });

  test("view points in mesh3", () => {
    const viewPoints = findViewPoints(mesh3, 5);
    expect(viewPoints.length).toBe(3);
    expect(viewPoints[0].value).toBe(
      sortArrayOfObjects([...mesh3.values])[0].value
    );
  });
});
