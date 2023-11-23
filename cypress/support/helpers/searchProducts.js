export function searchProduct(productItem) {
  cy.get('body').then(body => {
    if (body.find(`[alt="${productItem}"]`).length > 0) {
      cy.contains(productItem).parents('[class="mat-grid-tile-content"]').find('[aria-label="Add to Basket"]').click();
    } else {
      cy.get('[aria-label="Next page"]').click();
      searchProduct(productItem);
    }
  })
}