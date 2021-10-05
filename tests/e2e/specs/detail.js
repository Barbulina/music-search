describe("Details", () => {
  const firtsElementOfTrackListTitleSelector =
    ".list__rows > :nth-child(1) > :nth-child(1)";
  const albumShowMoreSelector =
    "[data-qa='home-album-section'] > .home__list-title > a";
  beforeEach(() => {
    cy.visit("/");
    cy.get(".form__input").type("The Trooper");
    cy.get(firtsElementOfTrackListTitleSelector)
      .should("be.visible")
      .click();
    cy.get(".details").should("be.visible");
  });
  it("Should navigate from home to detail section and go back", () => {
    cy.get(".details__back")
      .should("be.visible")
      .click();
    cy.get(".home").should("be.visible");
  });

  it("Should navigate from type to detail section and go back", () => {
    cy.get(".details__back")
      .should("be.visible")
      .click();
    cy.get(".home").should("be.visible");
    cy.get(albumShowMoreSelector)
      .should("be.visible")
      .click();
    cy.get(".type").should("be.visible");
    cy.get(".list__items > :nth-child(1) > :nth-child(1)")
      .should("be.visible")
      .click();
    cy.get(".details").should("be.visible");
    cy.get(".details__back")
      .should("be.visible")
      .click();
    cy.get(".type").should("be.visible");
  });

  it("Should render data", () => {
    cy.get(".album-details__name").should(
      "have.text",
      "The Trooper - 2015 Remaster"
    );

    // TODO check all data
  });
});
