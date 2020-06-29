 <template>
        <div class="section">
           
     <div class="notification is-info">
          <button class="delete"></button>
      
          <strong>Thank You!</strong><br/> Your order has been placed. <nuxt-link :to="{name: 'orders'}">
                        See your orders
         </nuxt-link>
        </div>
        </div>
    </template>

    <script>
    export default {}
    </script>

    <style scoped>
    .medium-text { font-size: 36px; }
    .small-link { font-size: 24px; text-decoration: underline; color: #777; }
    .product-box { border: 1px solid #cccccc; padding: 10px 15px; }
    .hero-section { height: 80vh; align-items: center; margin-top: -20px; margin-bottom: 20px; }
    .title { font-size: 60px; }
    </style>