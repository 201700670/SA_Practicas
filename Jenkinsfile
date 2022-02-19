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
    stage('PM2 run'){
      steps {
        sh 'npm install pm2 -g'
      }
    }
    stage('Run interfaz'){
      steps {
        sh 'pm2 start "npm run start"'
      }
    }
    stage("pm2 status"){
      steps{
        sh 'pm2 status'
      }
    }
  }
}
