const {
  firstNameLastName,
  firstNameInitialLastName,
  getDistinctDomains,
  mapDomainToEmailPattern,
  setEmailAlias,
} = require(".");

describe("email", () => {
  it("should return a fullname email pattern", () => {
    const result = firstNameLastName("John Doe", "google.com");

    expect(result).toBe("johndoe@google.com");
  });

  it("should return a first initial and last name email pattern", () => {
    const result = firstNameInitialLastName("John Doe", "babbel.com");

    expect(result).toBe("jdoe@babbel.com");
  });
});

describe("company domain", () => {
  it("should return a list of known domains", () => {
    const result = getDistinctDomains();
    expect(result).toHaveLength(3);
    expect(result).toEqual(["babbel.com", "linkedin.com", "google.com"]);
  });
});

describe("email pattern", () => {
  it("should return firstNameLastNameFormat when domain is babbel.com", () => {
    const result = mapDomainToEmailPattern("babbel.com");

    expect(result).toBe("first letter last name");
  });

  it("should return firstNameLastNameFormat when domain is google.com", () => {
    const result = mapDomainToEmailPattern("google.com");

    expect(result).toBe("first name last name");
  });

  it("should return invalid domain when domain is slideshare.net", () => {
    const result = mapDomainToEmailPattern("slideshare.net");

    expect(result).toBe("invalid domain");
  });

  it("should return jdoe@babbel.com if full name is John Doe and domain is babbel.com", () => {
    const result = setEmailAlias("John Doe", "babbel.com");

    expect(result).toBe("jdoe@babbel.com");
  });
});
