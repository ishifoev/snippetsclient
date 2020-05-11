import algoliasearch from 'algoliasearch/lite'
import { createInstantSearch } from 'vue-instantsearch'
import { history } from 'instantsearch.js/es/lib/routers'
export default ({ app }, inject) => {
 const searchClient = algoliasearch(
 'GO1MPAYBJY',
 'a538ecfa9f53f0251cb01864c1aca27a'
 )

 const { instantsearch } = createInstantSearch({
 	searchClient,
 	indexName: 'snippets',
 	routing: {
 		router: history()
 	}
 })
 inject('instantsearch', instantsearch)
}