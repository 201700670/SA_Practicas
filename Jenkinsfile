pipeline {
  agent any

  tools {nodejs 'NodeJs'}

  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Configuration') {
      steps {
        sh 'npm config ls'
      }
    }
    stage('Build') {
      steps {
        sh 'export NODE_OPTIONS=--openssl-legacy-provider && npm run build'
      }
    }
  }
}