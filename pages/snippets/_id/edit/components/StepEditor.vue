<template>
	<div>
		<textarea ref="abc"></textarea>
	 					<div class="bg-white p-8 rounded-lg text-gray-600 w-full lg:mr-2" style="margin-top:10px">
		 				<!--Markdown content-->
            <StepMarkdown
                      :value="step.body"
           />
		 			</div>
	</div>
</template>
<script type="text/javascript">
import StepMarkdown from '@/components/snippets/StepMarkdown'
	export default {
       components: {
       	StepMarkdown
       },

       data() {
         return {
          codemirror: null
         }
       },

       props: {
       	 step: {
       	 	required:true,
       	 	type: Object
       	 }
       },

       computed: {
        document() {
          return this.codemirror.getDoc()
        }
       },

       watch: {
        'step.uuid' () {
          this.document.setValue(this.step.body)
        }
       },

       mounted() {
        let CodeMirror = require('codemirror')
        this.codemirror = CodeMirror.fromTextArea(this.$refs.abc, {
           indentUnit: 2,
           indentWithTabs: false,
           smartIndent: true,
           lineWrapping: true,
           lineNumbers: false,
           scrollBarStyle: null,
           extraKeys: {
            Tab:(codemirror) => codemirror.execCommand('indentMore'),
            'Shift-Tab':(codemirror) => codemirror.execCommand('indentLess')
           }
        })
         this.document.setValue(this.step.body)
         this.document.on('change',(document) => {
            this.$emit('input', document.getValue())
         })
       }
	}
</script>
<style>
.CodeMirror {
  @apply font-sans text-base w-full max-w-full border-dashed border-2 border-gray-400 rounded-lg mb-6 p-8;
}
</style