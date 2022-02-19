pipeline {
  agent any

  tools {nodejs 'NodeJs'}

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'export NODE_OPTIONS=--openssl-legacy-provider && npm run build'
      }
    }
  }
}
