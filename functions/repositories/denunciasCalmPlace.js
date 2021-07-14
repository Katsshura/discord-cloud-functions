const firestore = require("../firestore");
const { COLLECTIONS } = require("../constants/collections");

/**
 * Get all reports by relator from firestore.
 * @param {string} reportId doc id
 * @param {Object} data data to insert on collection
 * @return {Promise} return a promisse when writting on new collection
 */
function writeOnWebCalmPlace(reportId, data) {
  const pathToWrite = `${COLLECTIONS.WEB_APP_REPORT_CALM_PLACE}/${reportId}`;
  return firestore.instance().doc(pathToWrite).set(data);
}

module.exports = {
  writeOnWebCalmPlace,
};
