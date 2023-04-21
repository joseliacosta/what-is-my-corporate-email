const repository = require("../repository");

function isUsernameValid(fullName) {
  const fullNameAsArray = fullName.split(" ");
  if (fullNameAsArray.length === 1) {
    return false;
  }
  return true;
}

function firstNameLastName(fullName, companyDomain) {
  const username = fullName.split(" ").join("").toLowerCase();

  return `${username}@${companyDomain.toLowerCase()}`;
}

function firstNameInitialLastName(fullName, companyDomain) {
  const fullNameAsArray = fullName.split(" ");
  const initial = fullNameAsArray[0][0];
  const lastName = fullNameAsArray[fullNameAsArray.length - 1];
  const username = `${initial}${lastName}`.toLocaleLowerCase();

  return `${username}@${companyDomain.toLocaleLowerCase()}`;
}

function getDistinctDomains() {
  const domains = new Set();

  for (const email of Object.values(repository.getAllData())) {
    const domain = email.split("@")[1];
    domains.add(domain);
  }
  return Array.from(domains);
}

function mapDomainToEmailPattern(domain) {
  switch (domain) {
    case "google.com":
      return "first name last name";

    case "babbel.com":
      return "first letter last name";

    case "linkedin.com":
      return "first name last name";

    default:
      return "invalid domain";
  }
}

function setEmailAlias(fullName, domain) {
  const pattern = mapDomainToEmailPattern(domain);
  let finalEmail = "";

  if (pattern === "first letter last name") {
    finalEmail = firstNameInitialLastName(fullName, domain);
  }
  if (pattern === "first name last name") {
    finalEmail = firstNameLastName(fullName, domain);
  }
  return finalEmail;
}

module.exports = {
  firstNameLastName,
  firstNameInitialLastName,
  getDistinctDomains,
  mapDomainToEmailPattern,
  setEmailAlias,
};
