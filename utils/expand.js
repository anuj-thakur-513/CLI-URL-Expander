const { tall } = require("tall");

const expandUrl = async (url) => {
  try {
    return await tall(url);
  } catch (error) {
    return error;
  }
};

module.exports = expandUrl;
