module.exports = function(sequelize, DataTypes) {
  var saveds= sequelize.define("saved", {
    article_name : DataTypes.STRING,
    subjectivity : DataTypes.STRING,
    sentiment : DataTypes.STRING,
    commercial : DataTypes.STRING,
    topic : DataTypes.STRING,
    adult : DataTypes.STRING
  });
  return saveds;
};
