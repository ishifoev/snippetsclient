<template>
	<div class="container mt-16">
		<div class="flex flex-col items-center">
            <h1 class="text-3xl text-gray-700 font-medium mb-10">Hello.</h1>
                	<form action="#" @submit.prevent="signin" class="bg-white p-8 rounded w-full md:w-6/12 lg:w-4/12 mb-6">
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
                		</div>

                		<div>
                				<button type="submit" class="bg-blue-500 text-white p-4 rounded text-center font-medium block w-full">
                					Sign in
                				</button>
                		</div>
                	</form>

                    <div class="text-center text-gray-600">
                      No account? 

                      <nuxt-link
                        :to="{ name: 'index'}"
                        >Create one here
                    </nuxt-link>
                    </div>
                
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				form: {
             	email: '',
             	password: ''
             },
                validation:{}
			}
          
             
		},

        head() {
           return {
             title: 'Sign in'
           }
        },
        //middleware: [
        // 'redirectIfAuthenticated'
        //],
        methods: {
        	async signin()
        	{
                try {
                   await this.$auth.loginWith('local',{
                   data: this.form
                })
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