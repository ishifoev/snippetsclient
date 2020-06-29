<template>
<!--<div class="section">
 <div class="container is-fluid">
 	<div class="columns is-multiline">
 		<div class="column is-3" v-for="product in products" :key="product.slug">
 			<Product :product="product" />
 		</div>
 	</div> 
 </div>
</div>-->

<div class="container">
<div class="columns">
  <div class="column is-3" v-for="category in categories">
  	<div class="top-left">
  	<nuxt-link 
                 	     :to="{ name: 'categories-slug', params: { slug: category.slug} }"
            
                 	     >
                 	     {{ category.name }}
    <figure class="image is-4by3">
	  <img :src="category.image" alt="">

	</figure>
</nuxt-link>
		</div>
  	</div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
	export default {
        computed: {
        	...mapGetters({
        		categories: 'categories',
        		cartCount: 'cart/count'
        	})
        },
        
	}
</script>

<style>
.container {
	position: relative;
}
.top-left {
  color:white;
  position: relative;
  top: 29px;
  left: 16px;
  font-weight: bold;
  font-size: 24px;
}


</style>