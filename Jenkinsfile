pipeline {
    agent any
    environment {
        // Define NodeJS version (ensure you have NodeJS set up in Jenkins)
        NODE_HOME = tool name: 'nodejs', type: 'NodeJS'

    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/PadminiPriyanka28/Colour_app.git'  // Replace with your GitHub repo URL
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies (make sure package.json exists)
                    sh '${NODE_HOME}/bin/npm install'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the Angular project
                    sh '${NODE_HOME}/bin/ng build --prod'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Run tests for the Angular project
                    sh '${NODE_HOME}/bin/ng test --watch=false --browsers=ChromeHeadless'
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
