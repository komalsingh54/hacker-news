pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Install Dependencies') {
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
            sh 'npm run build'
          }
        }
        stage('Deploy') {
          steps {
            sh 'npm run start'
          }
        }
    }
}
