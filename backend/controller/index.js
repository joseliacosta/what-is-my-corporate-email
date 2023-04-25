const service = require("../service");

function createEmail({ fullName, companyDomain }) {
  return { data: service.setEmailAlias(fullName, companyDomain) };
}

function getDomains() {
  return service.getDistinctDomains();
}

module.exports = { getDomains, createEmail };
