pipeline{
     agent any
     
     tools{
         jdk 'jdk17'
         nodejs 'node16'
     }
     environment {
         SCANNER_HOME=tool 'sonar-scanner'
     }
     
     stages {
         stage('Clean Workspace'){
             steps{
                 cleanWs()
             }
         }
         stage('Checkout from Git'){
             steps{
                 git branch: 'main', url: 'https://github.com/Maddie2030/eventplanner.git'
             }
         }
         stage("Sonarqube Analysis "){
             steps{
                 withSonarQubeEnv('sonar-server') {
                     sh ''' $SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=my-CICD \
                     -Dsonar.projectKey=my-CICD '''
                 }
             }
         }
         stage("Quality Gate"){
            steps {
                 script {
                     waitForQualityGate abortPipeline: false, credentialsId: 'sonar-token' 
                 }
             } 
         }
         stage('Install Dependencies') {
             steps {
                 sh "npm install"
             }
         }
         stage('TRIVY FS SCAN') {
             steps {
                 sh "trivy fs . > trivyfs.txt"
             }
         }
         stage("Docker Build & Push"){
             steps{
                 script{
                    withDockerRegistry(credentialsId: 'docker-token', toolName: 'docker'){   
                        sh "docker build -t evezy-v1 ."
                        sh "docker tag evezy-v1 maddie2030/evezy-v1:latest "
                        sh "docker push maddie2030/evezy-v1:latest "
                     }
                 }
             }
         }
          stage("TRIVY"){
              steps{
                 sh "trivy image maddie2030/swiggy-clone:latest > trivyimage.txt" 
             }
         }
         stage('Deploy to Kubernetes'){
             steps{
                 script{
                     dir('Kubernetes') {
                         withKubeConfig(caCertificate: '', clusterName: '', contextName: '', credentialsId: 'kubernetes', namespace: 'evezy-application', restrictKubeConfigAccess: false, serverUrl: '') {
                         sh 'kubectl delete --all pods'
                         sh 'kubectl apply -f deployment.yml'
                         sh 'kubectl apply -f service.yml'
                         }   
                     }
                 }
             }
         }



     }
 }
