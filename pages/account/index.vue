<template>
	<div class="container mt-16">
		<div class="flex flex-col items-center">
            <h1 class="text-3xl text-gray-700 font-medium mb-10">{{ $auth.user.name }}</h1>
            <div class="w-full md:w-6/12 lg:w-4/12 mb-6">
              <form action="#" @submit.prevent="account" class="mb-6">
                    <div class="mb-6">
                      <label 
                            class="block text-gray-600 font-medium mb-2" 
                            for="email"
                           
                            >Email address</label>
                      
                        <input 
                                class="border-2 border-gray-400 rounded block w-full p-3" 
                                type="email" 
                                name="email" 
                                id="email" 
                                placeholder="alex.malikov94" 
                                v-model="form.email"
                                :class="{
                                    'border-red-500': validation.email
                                }"
                                >

                                <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.email">
                                  {{ validation.email[0] }}
                                </div>
                    </div>

                     <div class="mb-6">
                      <label 
                            class="block text-gray-600 font-medium mb-2" 
                            for="name"
                           
                            >Name</label>
                      
                        <input 
                                class="border-2 border-gray-400 rounded block w-full p-3" 
                                type="text" 
                                name="name" 
                                id="name" 
                                v-model="form.name"
                                :class="{
                                    'border-red-500': validation.name
                                }"
                                >

                                <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.name">
                                  {{ validation.name[0] }}
                                </div>
                    </div>

                     <div class="mb-6">
                      <label 
                            class="block text-gray-600 font-medium mb-2" 
                            for="username"
                           
                            >Username</label>
                      
                        <input 
                                class="border-2 border-gray-400 rounded block w-full p-3" 
                                type="text" 
                                name="username" 
                                id="username" 
                                v-model="form.username"
                                :class="{
                                    'border-red-500': validation.username
                                }"
                                >

                                <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.username">
                                  {{ validation.username[0] }}
                                </div>
                    </div>


                    <div class="mb-6">
                      <label 
                            class="block text-gray-600 font-medium mb-2" 
                            for="password"
                            :class="{
                              'text-red-500': validation.password
                            }"
                            >Password</label>
                        <input 
                                class="border-2 border-gray-400 rounded block w-full p-3" 
                                name="password" 
                                id="password" 
                                type="password" 
                                v-model="form.password"
                                :class="{
                                    'border-red-500': validation.password
                                }"
                                >

                                <div class="text-red-500 mb-4 text-sm mt-1 font-medium" v-if="validation.password">
                                  {{ validation.password[0] }}
                                </div>

                              <div class="text-sm text-gray-500">
                                Leave to keep blank the same
                              </div>  
                    </div>

                    <div>
                        <button type="submit" class="bg-blue-500 text-white p-4 rounded text-center font-medium">
                          Update
                        </button>
                    </div>
                  </form>

                    <div>
                       <nuxt-link :to="{

                       name: 'author-id',
                       params: {
                       id: $auth.user.username
                     }
                     }">
                        View your public profile
                       </nuxt-link>
            </div>
                	
                    </div>
                
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				form: {
             	email: this.$auth.user.email,
             	password: '',
              name: this.$auth.user.name,
              username: this.$auth.user.username
             },
                validation:{}
			}
          
             
		},

        head() {
           return {
             title: 'Account'
           }
        },
        //middleware: [
        // 'redirectIfAuthenticated'
        //],
        methods: {
        	async account()
        	{
                try {
                await this.$axios.$patch(`users/${this.$auth.user.username}`, this.form)
                await this.$auth.fetchUser()
               } catch(e) {
                  console.log(e);
                  if(e.response.status === 422) {
                     this.validation = e.response.data.errors;
                  }
               }
        		

               // if(this.$route.query.redirect){
                 //   this.$router.replace(this.$route.query.redirect)
                   // return
                //}
        		//this.$router.replace({
        		//	name: 'index'
        		//})
        	}
        }
	}
</script>