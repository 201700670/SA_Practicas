pipeline {
  agent any

  tools {nodejs 'NodeJs'}

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm build'
      }
    }
  }
}