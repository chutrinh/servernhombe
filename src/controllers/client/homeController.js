const MacBook = require("../../models/macBook");
const TypeMacbook = require("../../models/typeMacbook");

exports.getDatasHome = async (req, res, next) => {
  MacBook.find()
    .populate("type.productId")
    .exec()
    .then((data) => {
      res.json(data);
    });
};
