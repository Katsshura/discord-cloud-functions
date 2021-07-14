const { writeOnWebCalmPlace } = require("../repositories/denunciasCalmPlace");

const formatDataToWebApplication = (rawData) => {
  return Object.assign({}, rawData, {resolved: false});
};

exports.writeOnWebCalmPlace = (docId, data) => {
  const formattedDoc = formatDataToWebApplication(data);
  return writeOnWebCalmPlace(docId, formattedDoc);
};
