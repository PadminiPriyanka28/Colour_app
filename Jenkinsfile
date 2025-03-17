pipeline {
    agent any
    environment {
        // Set NODE_HOME to the path of your Node.js installation
        NODE_HOME = 'C:\\Program Files\\nodejs'
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
                    // Use npm directly from the system PATH, no need for full path to node and npm
                    bat 'npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Use npm to build the Angular project
                    bat 'npm run ng build --prod'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests with npm
                    bat 'npm run ng test --watch=false --browsers=ChromeHeadless'
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
