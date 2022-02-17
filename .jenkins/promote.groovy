@Library('dev-tools')

import com.nu.art.pipeline.thunderstorm.Pipeline_PromoteThunderstorm
import com.nu.art.pipeline.workflow.Workflow

node() {
	Workflow.createWorkflow(Pipeline_PromoteThunderstorm.class, this)
}