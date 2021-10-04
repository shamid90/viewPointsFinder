const path = require("path");

try {
  const meshFile = process.argv[2];
  const maxNumberOfViewPoints = parseInt(process.argv[3]);
  const mesh = require(path.join(__dirname, meshFile));
  if (isNaN(maxNumberOfViewPoints) || maxNumberOfViewPoints <= 0) {
    throw new Error("Invalid number of view points");
  }

  const findViewPoints = require("./findViewPoints");

  const start = new Date().getTime();

  const viewPoints = findViewPoints(mesh, maxNumberOfViewPoints);
  console.log(viewPoints);

  const end = new Date().getTime();
  const time = end - start;
  console.log("Execution time [ms]: " + time);
} catch (err) {
  console.log(err.message);
}
