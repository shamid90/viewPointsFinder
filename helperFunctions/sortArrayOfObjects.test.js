const sortArrayOfObjects = require("./sortArrayOfObjects");
const mesh1 = require("../TestMeshFiles/testMesh1.json");
const mesh2 = require("../TestMeshFiles/testMesh2.json");

describe("Test the sortArrayOfObjects function", () => {
  test("sort mesh1 values", () => {
    const sortedArray = sortArrayOfObjects([...mesh1.values]);
    expect(sortedArray.length).toBe(mesh1.values.length);
    expect(sortedArray[0].element_id).toBe(2);
    expect(sortedArray[0].value).toBe(mesh1.values[2].value);
  });

  test("sort mesh2 values", () => {
    const sortedArray = sortArrayOfObjects([...mesh2.values]);
    expect(sortedArray.length).toBe(mesh2.values.length);
    expect(sortedArray[0].element_id).toBe(1);
    expect(sortedArray[sortedArray.length - 1].value).toBe(
      mesh2.values[0].value
    );
  });
});
