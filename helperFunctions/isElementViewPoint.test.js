const isElementViewPoint = require("./isElementViewPoint");
const mesh1 = require("../TestMeshFiles/testMesh1.json");
const mesh2 = require("../TestMeshFiles/testMesh2.json");
const mesh3 = require("../TestMeshFiles/testMesh3.json");

describe("Test the isElementViewPoint function", () => {
  test("Element 2 in mesh1", () => {
    const isViewPoint = isElementViewPoint(
      mesh1,
      mesh1.elements[2],
      mesh1.values[2].value
    );
    expect(isViewPoint.viewPoint).toBe(true);
    expect(isViewPoint.notViewPoints).toEqual([0, 1]);
  });

  test("Element 1 in mesh1", () => {
    const isViewPoint = isElementViewPoint(
      mesh1,
      mesh1.elements[1],
      mesh1.values[1].value
    );
    expect(isViewPoint).toBeUndefined();
  });

  test("Element 1 in mesh2", () => {
    const isViewPoint = isElementViewPoint(
      mesh2,
      mesh2.elements[1],
      mesh2.values[1].value
    );
    expect(isViewPoint.viewPoint).toBe(true);
    expect(isViewPoint.notViewPoints).toEqual([0, 2, 3]);
  });

  test("Element 1 in mesh3", () => {
    const isViewPoint = isElementViewPoint(
      mesh3,
      mesh3.elements[1],
      mesh3.values[1].value
    );
    expect(isViewPoint).toBeUndefined();
  });

  test("Element 0 in mesh3", () => {
    const isViewPoint = isElementViewPoint(
      mesh3,
      mesh3.elements[0],
      mesh3.values[0].value
    );
    expect(isViewPoint.viewPoint).toBe(true);
    expect(isViewPoint.notViewPoints).toEqual([1]);
  });

  test("Element 3 in mesh3", () => {
    const isViewPoint = isElementViewPoint(
      mesh3,
      mesh3.elements[3],
      mesh3.values[3].value
    );
    expect(isViewPoint.viewPoint).toBe(true);
    expect(isViewPoint.notViewPoints).toEqual([1]);
  });
});
