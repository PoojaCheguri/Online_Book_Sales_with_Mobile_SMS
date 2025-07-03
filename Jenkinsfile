pipeline {
    agent any

    environment {
        // Set your Docker image name here
        IMAGE_NAME = 'poojacheguri/book-sales-app'
        // The ID of Docker Hub credentials stored in Jenkins
        DOCKER_CREDENTIALS_ID = 'dockerhub'
    }

    stages {
        stage('Checkout Source Code') {
            steps {
                git url: 'https://github.com/PoojaCheguri/Online_Book_Sales_with_Mobile_SMS.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Login & Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {
                        dockerImage.push('latest')
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Docker image ${IMAGE_NAME}:latest pushed successfully!"
        }
        failure {
            echo "❌ Build failed. Check logs for details."
        }
    }
}
