import { orderBy as _orderBy} from 'lodash';
import hotkeys from 'hotkeys-js';

export default {

	computed: {
            orderedStepAsc() {
            	return _orderBy (
            		this.steps, 'order', 'asc'
            	)
            },
			orderedStepDesc() {
            	return _orderBy (
            		this.steps, 'order', 'desc'
            	)
            },
            firstStep() {
                return this.orderedStepAsc[0]
            },

            nextStep() {
               return this.orderedStepAsc.find(
                  (s) => s.order > this.currentStep.order
               	) || null
           },

           previousStep() {
 				return this.orderedStepDesc.find(
                  (s) => s.order < this.currentStep.order
               	) || null
           },


            currentStep() {
            	return this.orderedStepAsc.find(
                   (s) => s.uuid === this.$route.query.step
            	) || this.firstStep
            },

            currentStepIndex() {
            	return this.orderedStepDesc.map(
                  (s) => s.uuid
                ).indexOf(this.currentStep.uuid)
            }
		},

		mounted() {
			this.registerKeyBoardShortCuts()
		},

		methods: {
			 goToStep(step) {
		         this.$router.push({
		          query: {
		            step: step.uuid
		          }
		         })
		      },
			registerKeyBoardShortCuts() {
				hotkeys('ctrl+shift+left, ctrl+shift+right', (event, handler) => {
                     switch(handler.key) {
                        case 'ctrl+shift+left':
                              if(this.previousStep) {
                              	this.goToStep(this.previousStep)
                              }
                        break;

                        case 'ctrl+shift+right':
                               if(this.nextStep) {
                              	this.goToStep(this.nextStep)
                              }
                        break;
                     }
				})
			}
		} 


}