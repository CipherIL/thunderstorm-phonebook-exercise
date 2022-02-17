@Library('dev-tools@pipeline')

import com.nu.art.pipeline.modules.SlackModule
import com.nu.art.pipeline.modules.build.BuildModule
import com.nu.art.pipeline.modules.build.TriggerCause
import com.nu.art.pipeline.thunderstorm.Pipeline_ThunderstormWebProject
import com.nu.art.pipeline.workflow.Workflow

class Pipeline_Build
  extends Pipeline_ThunderstormWebProject<Pipeline_Build> {

  Pipeline_Build() {
    super("${PROJECT_NAME}", "${PROJECT_ID}", SlackModule.class)
  }

  @Override
  protected void init() {
    setEnv("dev", "${PROJECT_ID}-dev")
    setEnv("staging", "${PROJECT_ID}-staging")
    declareEnv("prod", "${PROJECT_ID}")
    setGitRepoId("${GITHUB_USER_NAME}/${REPO_NAME}", true)

    super.init()
  }

  @Override
  void _postInit() {
    TriggerCause[] causes = getModule(BuildModule.class).getTriggerCause(TriggerCause.Type_SCM)
    this.logInfo("GOT HERE!! ${causes.size()}")
    TriggerCause cause = causes.find { it.originator == "Nu-Art-Jenkins" }
    causes.each {
      this.logInfo("Detected SCM cause: '${it.originator}'")
    }

    if (cause) {
      workflow.terminate("Detected push from Jenkins")
    }

    super.postInit()
  }

  @Override
  protected void _test() {
  }
}

node() {
  Workflow.createWorkflow(Pipeline_Build.class, this)
}

