/// <reference types="Cypress" />

context("main", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/");
  });

  describe("changing to etherium", () => {
    beforeEach(() => {
      cy.get('.select-market [role="button"]')
        .should("have.text", "Doge Coin")
        .click();
    });
    it("menu has Ethereum", () => {
      cy.get("#menu-market [data-value='ETH']").should("have.text", "Ethereum");
    });
    // it("menu has Doge Coin", () => {
    //   cy.get("#menu-market [data-value='DOGE']").should("have.text", "Doge Coin");
    // });
    // it("menu has Lite Coin", () => {
    //   cy.get("#menu-market [data-value='LTC']").should("have.text", "Lite Coin");
    // });

    describe("clicking the ethereum menu item", () => {
      beforeEach(() => {
        cy.get("#menu-market [data-value='ETH']").click();
      });
      it("chart should have bitterx and polonien", () => {
        cy.get(".chart-asks .legend text")
          .should("have.length", 2)
          .then(async $text => {
            expect(Array.from($text).map(x => x.textContent)).to.eql(
              "bittrex poloniex".split(" ")
            );
          });
      });
      describe("when we add on gdax and gemini of the exchanges", () => {
        beforeEach(() => {
          cy.get('.select-exchange [role="button"]').click();
          cy.get("#menu-exchange")
            .find('[role="option"][data-value="gdax"]')
            .click();
          cy.get("#menu-exchange")
            .find('[role="option"][data-value="gemini"]')
            .click();
        });

        it("chart should have bitterx and polonien gdax gemini", () => {
          cy.get(".chart-asks .legend text")
            .should("have.length", 4)
            .then(async $text => {
              expect(Array.from($text).map(x => x.textContent)).to.eql(
                "bittrex poloniex gdax gemini".split(" ")
              );
            });
        });
      });
    });
  });
});
