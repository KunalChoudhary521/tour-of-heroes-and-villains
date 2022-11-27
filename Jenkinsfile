pipeline {
  agent any

  tools {
    nodejs "Node 16.x" // Jenkins plugin required
  }

  options {
    ansiColor('xterm') // Jenkins plugin required
  }

  parameters {
    string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Path to cypress spec file")
    choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Browsers to run Cypress tests")
  }

  stages {
    stage("Checkout") {
      steps {
        git url: 'https://github.com/KunalChoudhary521/tour-of-heroes-and-villains.git',
            branch: 'master'
      }
    }

    stage("Install dependencies") {
      steps {
       echo '---> Installing node dependencies <---'

        nodejs(nodeJSInstallationName: 'Node 16.x') {
          sh 'npm install'
        }

        echo '---> DONE: Installing node dependencies <---'
      }
    }

    stage("Test") {
      steps {
        //source: https://www.how2shout.com/linux/install-chrome-browser-on-debian-11-bullseye-linux/
        sh "apt-get update & apt-get install -y wget"
        sh '''
          if [ -f ./google-chrome-stable_current_amd64.deb ]; then
            echo 'google-chrome-stable_current already exists.';
          else
            echo 'Downloading google-chrome-stable_current...';
            wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb;
          fi
        '''
        sh "apt-get install -y ./google-chrome-stable_current_amd64.deb && \
            export CHROME_BIN='/usr/bin/google-chrome-stable'"

        nodejs(nodeJSInstallationName: 'Node 16.x') {
          sh 'npm run test-ci'
        }
      }
    }

    stage("E2E") {
      steps {
        sh 'apt-get install -y xvfb procps'
        nodejs(nodeJSInstallationName: 'Node 16.x') {
          sh 'npm install start-server-and-test'
          sh '''
            if [ -d /root/.cache/Cypress/ ]; then
              echo 'Cypress binary exists.';
            else
              echo 'Installing Cypress binary';
              ./node_modules/cypress/bin/cypress install;
            fi'''
          sh 'npm run e2e-ci'
        }
      }
    }

    stage("Build") {
      steps {
        nodejs(nodeJSInstallationName: 'Node 16.x') {
          sh 'npm run build-ci'
        }
      }

      post {
        success {
          archiveArtifacts 'toh-dist/**'
        }
      }
    }
  }
}
