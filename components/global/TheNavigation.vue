<template>
    <div class="bg-white py-8 lg:py-0 flex items-center">
       <div class="container flex flex-wrap items-center lg:flex-no-wrap">
           <nuxt-link 
           :to="{name: 'index'}"
           class="mr-10 flex-shrink-0"
           >
           <img class="h-8" src="https://s3.amazonaws.com/s3.codecourse.com/code/snippets-logo/logo.svg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJL2KCCLOFDJUI4QA%2F20200218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200218T092029Z&X-Amz-SignedHeaders=host&X-Amz-Expires=18000&X-Amz-Signature=4b9f1feb7e0e28147319a57879a40cc4338abe370883f3bf7e393742cbec401e" alt="">
           </nuxt-link>

           <a 
              href="#"
              class="lg:hidden ml-auto flex flex-col relative justify-center w-8 h-8"
              @click.prevent="mobileNavOpen = !mobileNavOpen"
              >
               <span class="bg-blue-500 h-1 w-8 rounded mb-1"
                     :class="{
                      'rotate-45 absolute right-0': mobileNavOpen 
                    }"
                      ></span>

              <span class="bg-blue-500 h-1 w-8 rounded mb-1"
                     :class="{
                      '-rotate-45 absolute right-0': mobileNavOpen 
                    }"
                      ></span>
              <span class="bg-blue-500 h-1 w-8 rounded mb-1"
                     :class="{
                      'hidden': mobileNavOpen 
                    }"
                      ></span>
           </a>

           <div 
                class="w-full flex"
                :class="{
                    'mt-8': mobileNavOpen,
                   'hidden lg:flex': !mobileNavOpen
                }"
                >
                <ul class="lg:h-24 lg:flex items-center w-full lg:w-auto">
                    <li>
                        <nuxt-link 
                                  :to="{ name: 'browse'}"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >Browse</nuxt-link>
                    </li>

                    <li>
                        <nuxt-link 
                                  :to="{ name: 'search'}"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >Search</nuxt-link>
                    </li>
                </ul>

                <ul class="lg:h-24 lg:flex items-center ml-auto text-right w-full lg:w-auto">
                  <template v-if="$auth.loggedIn">
                      <li>
                        <nuxt-link 
                                  :to="{ name: 'dashboard'}"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >Dashboard</nuxt-link>
                    </li>

                    <li>
                        <nuxt-link 
                                  :to="{ name: 'index'}"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >{{ $auth.user.name }}</nuxt-link>
                    </li>

                     <li>
                        <a 
                                  href="#"
                                  @click.prevent="signOut"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >Sign out</a>
                    </li>
                  </template>

                  <template v-else>
                     <li>
                        <nuxt-link 
                                  :to="{ name: 'auth-signin'}"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >Sign In</nuxt-link>
                    </li>

                    <li>
                        <nuxt-link 
                                  :to="{ name: 'index'}"
                                  class="text-lg text-gray-700 lg:py-8 lg:px-4"
                                  >Create an account</nuxt-link>
                    </li>
                  </template>
                  

                   

                   
                </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mobileNavOpen: false
        }
    },

    methods: {
      async signOut() {
         await this.$auth.logout();
      }
    }
}
</script>