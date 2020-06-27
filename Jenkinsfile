pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage {
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
