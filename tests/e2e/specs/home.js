describe("Home section", () => {
  const firstElementOfListAlbumsSelector =
    "[data-qa='home-album-section'] > .list .list__items > :nth-child(1) > :nth-child(1)";
  const firstElementOfListArtistsSelector =
    "[data-qa='home-artists-section'] > .list .list__items > :nth-child(1) > :nth-child(1)";
  const firtsElementOfListTitleSelector =
    ":nth-child(1) > .artist__header > .artist__title > .artist__title-text";
  const albumTitleSelector =
    "[data-qa='home-album-section'] > .home__list-title > .home__list-type";
  const artistsTitleSelector =
    "[data-qa='home-artists-section'] > .home__list-title > .home__list-type";
  const tracksListsTitleSelector =
    "[data-qa='home-tracks-section'] > .home__list-title > .home__list-type";

  const albumShowMoreSelector =
    "[data-qa='home-album-section'] > .home__list-title > a";
  const artitsShowMoreSelector =
    "[data-qa='home-artists-section'] > .home__list-title > a";
  const tracksShowMoreSelector =
    "[data-qa='home-tracks-section'] > .home__list-title > a";

  beforeEach(() => {
    cy.visit("/");
  });
  it("Should visits the app root url and show the start state", () => {
    cy.get(".home").should("be.visible");
    cy.get(".home__image").should("be.visible");
    cy.get(".form__input").should("have.value", "");
  });

  it("Should launch search if we type in input", () => {
    cy.get(".form__input").type("manowar");
    cy.get(".home__list").should("be.visible");
    cy.get(firstElementOfListAlbumsSelector).should("be.visible");
    cy.get(albumTitleSelector)
      .should("be.visible")
      .should("have.text", "albums");
    cy.get(firstElementOfListArtistsSelector).should("be.visible");
    cy.get(artistsTitleSelector)
      .should("be.visible")
      .should("have.text", "artists");

    cy.get(firtsElementOfListTitleSelector).should("have.text", "Manowar");
    cy.get(tracksListsTitleSelector).should("have.text", "tracks");
  });

  it("Should navigation to album detail", () => {
    cy.get(".form__input").type("manowar");
    cy.get(firtsElementOfListTitleSelector)
      .should("be.visible")
      .click();
    cy.get(".details").should("be.visible");
  });
  it("Should navigation to track detail", () => {
    cy.get(".form__input").type("manowar");
    cy.get(firtsElementOfListTitleSelector)
      .should("be.visible")
      .click();
    cy.get(".details").should("be.visible");
  });
  it("Should navigation to artists detail", () => {
    cy.get(".form__input").type("manowar");
    cy.get(firtsElementOfListTitleSelector)
      .should("be.visible")
      .click();
    cy.get(".details").should("be.visible");
  });

  it("Should navigation to album section", () => {
    cy.get(".form__input").type("manowar");

    cy.get(albumShowMoreSelector)
      .should("be.visible")
      .click();
    cy.get(".type").should("be.visible");
  });

  it("Should navigation to artists section", () => {
    cy.get(".form__input").type("manowar");

    cy.get(artitsShowMoreSelector)
      .should("be.visible")
      .click();
    cy.get(".type").should("be.visible");
  });

  it("Should navigation to tracks section", () => {
    cy.get(".form__input").type("manowar");

    cy.get(tracksShowMoreSelector)
      .should("be.visible")
      .click();
    cy.get(".type").should("be.visible");
  });
});
