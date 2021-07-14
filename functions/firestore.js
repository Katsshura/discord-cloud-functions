const admin = require("firebase-admin");

admin.initializeApp();

exports.instance = () => admin.firestore();
