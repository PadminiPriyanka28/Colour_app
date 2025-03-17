pipeline {
    agent any
    environment {
        // Set NODE_HOME to the path of your Node.js installation
        NODE_HOME = 'C:\\Users\\Butt\\OneDrive - Conestoga College\\S3-Code Coverage Quality Control\\node js'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/PadminiPriyanka28/Colour_app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Use the full path to npm to install dependencies
                    sh '${NODE_HOME}\\node.exe ${NODE_HOME}\\npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Use the full path to ng to build the Angular project
                    sh '${NODE_HOME}\\node.exe ${NODE_HOME}\\ng build --prod'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests with the full path to ng
                    sh '${NODE_HOME}\\node.exe ${NODE_HOME}\\ng test --watch=false --browsers=ChromeHeadless'
                }
            }
        }
    }
    post {
        success {
            echo 'Build and tests completed successfully!'
        }
        failure {
            echo 'Build or tests failed!'
        }
    }
}
