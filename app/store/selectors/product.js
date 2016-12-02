/*
Trying to make preselection/ filtering of products more effective... See https://github.com/reactjs/reselect, this is too much for me ;-)
*/
import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.view.productFilter
const getProducts = (state) => state.data.products

export const getVisibleProducts = createSelector(
  [ getVisibilityFilter, getProducts ],
  (productFilter, products) => {
    switch (productFilter) {
      case 'SHOW_ALL':
        return products
      case 'SHOW_SUBSET':
        return products.map(product => {
          return {
            Product: product.name,
            Synonyms: product.synonyms,
            Tags: product.tags,
            'Co2-value': product['co2-value'],
            Id: product.id
          }
        })
    }
  }
)
