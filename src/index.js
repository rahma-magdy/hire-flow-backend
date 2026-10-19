const app = require("./server");
const env = require("../env");

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
