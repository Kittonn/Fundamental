const getData = (req, res) => {
  res.send(`Hello ${req.baseUrl}`);
};
const postData = (req, res) => {
  res.send(`postttt`);
};
const deleteData = (req, res) => {
  res.send(`parans delete ${req.params.id}`);
};
const patchData = (req, res) => {
  res.send(`params patch ${req.params.id}`);
};

module.exports = {getData,postData,deleteData,patchData}
