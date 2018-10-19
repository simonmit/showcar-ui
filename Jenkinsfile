pipeline {
  // Execute the pipeline on the master, stages will still be executed on the agents
  agent none 

  options {
    timestamps() // Enable timestamps in the build log
    disableConcurrentBuilds() // The pipeline should run only once at a time
    preserveStashes(buildCount: 5)
  }

  // Environment variables for all stages
  environment {
    AWS_DEFAULT_REGION="eu-west-1"
    SERVICE="showcar-ui"
    COMMIT_HASH=getInvokedBuildNumber()
  }

  stages {
    
    // stage('Build') {
    //   when {
    //     beforeAgent true
    //     branch 'master'
    //   }

    //   agent { node { label 'build-node' } }
    //   steps {
    //     sh './deploy/build.sh'
    //     stash includes: 'dist/*', name: 'output-dev-dist'
    //   }

    // }

    stage('PrepareDev') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH='develop'
      }

      agent { node { label 'build-node' } }

      steps {
        sh './deploy/prepare.sh'
        stash includes: 'dist/*', name: 'output-dev-dist'
      }
    }

    stage('DeployDev') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH='develop'
      }

      agent { node { label 'build-node' } }

      steps {
        unstash 'output-dev-dist'
        sh './deploy/deploy.sh'
      }
    }

    stage('IntegrationTests-screenshot') {

      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH='develop'
      }

      agent { node { label 'build-gocdcompatible' } }

      steps {
        sh './deploy/test-screenshot.sh'
      }

    }

    stage('IntegrationTests-user-journeys') {

      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH='develop'
      }

      agent { node { label 'build-gocdcompatible' } }

      steps {
        sh './deploy/test-user_journeys.sh'
      }

    }

    stage('PrepareProd') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH='master'
      }

      agent { node { label 'deploy-as24prod' } }

      steps {
        sh './deploy/prepare.sh'
        stash includes: 'dist/*', name: 'output-prod-dist'
      }
    }

    stage('DeployProd') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
         BRANCH='master'
      }

      agent { node { label 'deploy-as24prod' } }
      steps {
        unstash 'output-prod-dist'
        sh './deploy/deploy.sh'
      }
    }
  }

  post { 
    success { 
      slackSend channel: 'as24_web_experience', color: '#FF0000', message: ":tada: ${env.JOB_NAME} [${env.BUILD_NUMBER}] ShowCar UI was released. For the details go to: <https://github.com/AutoScout24/showcar-ui|showcar-ui>. (<${env.BUILD_URL}|Open>)"
    }
    failure { 
      slackSend channel: 'as24_acq_cxp_fizz', color: '#FF0000', message: "💣 ${env.JOB_NAME} [${env.BUILD_NUMBER}] failed. (<${env.BUILD_URL}|Open>)"
    }
    fixed {
      slackSend channel: 'as24_acq_cxp_fizz', color: '#00FF00', message: "💣 ${env.JOB_NAME} [${env.BUILD_NUMBER}] recovered. (<${env.BUILD_URL}|Open>)"
    }

  }
}
