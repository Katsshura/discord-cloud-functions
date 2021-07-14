const functions = require("firebase-functions");
const { COLLECTIONS } = require("../constants/collections");
const { writeOnWebCalmPlace } = require("../services/reportsService");

exports.denunciasCalmPlaceListener = functions
    .firestore
    .document(`${COLLECTIONS.DENUNCIAS_CALM_PLACE}/{reportId}`)
    .onCreate((snapshot, context) => {
      const docId = context.params.reportId;
      const data = snapshot.data();
      return writeOnWebCalmPlace(docId, data);
    });
