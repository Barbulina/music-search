describe("Type section", () => {
  const artitsShowMoreSelector =
    "[data-qa='home-artists-section'] > .home__list-title > a";
  // const albumShowMoreSelector =
  ("[data-qa='home-album-section'] > .home__list-title > a");
  // const loadMore = ".type__load-more > a";
  const homeSectionFirtsElementOfArtistListTitleSelector =
    ":nth-child(1) > .artist__header > .artist__title > .artist__title-text";

  beforeEach(() => {
    cy.visit("/");
    cy.get(".form__input").type("manowar");
    cy.get(artitsShowMoreSelector)
      .should("be.visible")
      .click();
    cy.get(".type").should("be.visible");
  });
  it("Should navigate to type section and go back", () => {
    cy.get(".type__back > .material-icons")
      .should("be.visible")
      .click();
    cy.get(".home").should("be.visible");
    cy.get(homeSectionFirtsElementOfArtistListTitleSelector).should(
      "have.text",
      "Manowar"
    );
  });

  it("Should load elements if reload page", () => {
    cy.reload();
    cy.get(".type__title").should("have.text", "artists");
    cy.get(".list__items > :nth-child(1)").should("have.text", "Manowar");
  });

  // TODO FIXME!! cy.intercept doesn't work
  // it("Should load more elements in the list", () => {
  //   const url = "/v1/search*";

  //   cy.intercept(url).as("getItems");
  //   cy.get(".type__back > .material-icons")
  //     .should("be.visible")
  //     .click();
  //   cy.get(".home").should("be.visible");
  //   cy.get(".form__input")
  //     .clear()
  //     .type("man");
  //   cy.wait("@getItems");
  //   cy.get(albumShowMoreSelector)
  //     .should("be.visible")
  //     .click();
  // });
});
