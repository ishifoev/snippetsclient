/*export const state = () => ({
    categories : []
});
export const mutations = {
    SET_CATEGORIES(state, items){
        state.categories = items
    }
}
export const getters = {
	categories(state) {
       return state.categories
	}
}
export const actions = {
    async nuxtServerInit ({commit, dispatch}){
        const response = await this.$axios.$get('categories')
        commit('SET_CATEGORIES', response.data)

        if(this.$auth.loggedIn){
            await dispatch('cart/getCart')
        }
    }
}*/
