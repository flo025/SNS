pipeline {
  agent any
  stages {
    stage('[GIT] Checkout') {
      steps {
        checkout scm
        script {
          env.GIT_COMMIT = sh (script: "git log -n 1 --pretty=format:'%h'", returnStdout: true)
        }
        sh 'chmod -R 777 .'
      }
    }

    stage ("[PUBLISH] docker-compose") {
      environment {
        MYSQL_ENV = 'production'
        NODE_ENV  = 'production'
      }
      when {
        branch "master"
      }
      steps {
        sh "docker-compose -f docker-compose.yml up --build -d"
      }
    }
  }
}
