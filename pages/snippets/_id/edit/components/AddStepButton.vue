<template>
	<a 
	                   href="#" 
                       @click.prevent="addStep"
                       class="block mb-2 p-3 bg-blue-500 rounded-lg mr-2 lg:mr-0"
                       :title="`Add step before ${position}`"
                       >
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-white h-6 w-6 "><path class="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm0 2v14h14V5H5zm8 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/></svg>
    </a>
</template>
<script type="text/javascript">
	export default {
		props: {
			position: {
             	required:true,
				type: String
			},
			snippet: {
				required:true,
				type: Object
			},

			currentStep: {
				required:true,
				type: Object
			}
		},

		methods: {
			async addStep() {
				let response = await this.$axios.$post(`snippets/${this.snippet.uuid}/steps`,{
                   [this.position]: this.currentStep.uuid
				})
				this.$emit('added', response.data)
			}
		}
	}
</script>