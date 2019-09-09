# mobile-dev

## Packages, downloaded for Cordova build
```
npm i -g cordova
cd mobile-dev-cordova
cordova save android
cordova platform add android --save
sudo apt-get install oracle-java8-installer
sudo apt install default-jre
sudo apt install default-jdk
sudo apt install openjdk-8-jdk
sudo apt install oracle-java8-set-default
javac --version
sudo update-alternatives --config java
sudo update-alternatives --config javac
wget https://services.gradle.org/distributions/gradle-3.4.1-bin.zip
sudo mkdir /opt/gradle
sudo unzip -d /opt/gradle gradle-3.4.1-bin.zip
tools/bin/sdkmanager --update
tools/bin/sdkmanager "platforms;android-25" "build-tools;25.0.2" "extras;google;m2repository" "extras;android;m2repository"
cordova run android --device
```

### .bashrc file env variables
```
export ANDROID_HOME=~/program-files/android-sdk
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/tools
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

export PATH=$PATH:/opt/gradle/gradle-3.4.1/bin

JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
PATH=$PATH:$HOME/bin:$JAVA_HOME/bin
export JAVA_HOME
export JRE_HOME
export PATH
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).