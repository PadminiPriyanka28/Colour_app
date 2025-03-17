pipeline {
    agent any
    environment {
        // Set NODE_HOME to the path of your Node.js installation
        NODE_HOME = 'C:\Program Files\nodejs'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/PadminiPriyanka28/Colour_app.git'

            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Use the full path to npm to install dependencies
                    bat '${NODE_HOME}\\node.exe ${NODE_HOME}\\npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Use the full path to ng to build the Angular project
                    bat '${NODE_HOME}\\node.exe ${NODE_HOME}\\ng build --prod'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests with the full path to ng
                    bat '${NODE_HOME}\\node.exe ${NODE_HOME}\\ng test --watch=false --browsers=ChromeHeadless'
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
