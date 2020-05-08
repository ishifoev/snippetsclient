import algoliasearch from 'algoliasearch/lite'
import { createInstantSearch } from 'vue-instantsearch'
export default ({ app }, inject) => {
 const searchClient = algoliasearch(
 'GO1MPAYBJY',
 'a538ecfa9f53f0251cb01864c1aca27a'
 ) 

 const { instantSearch } = createInstantSearch({
 	searchClient,
 	indexName: 'snippets'
 })
 inject('instantsearch', instantsearch)
}