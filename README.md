# Quick Documentation

1. git clone `https://github.com/yehezkielgunawan/Project_UAS_Ionic.git`
2. Go into **Elearning_Gamification** directory
3. Run this command to install node_modules and other support libraries for this app
```
npm install
npm install firebase
ionic integrations enable capacitor
npm install @ionic/pwa-elements
```
4. Run `ionic serve` to test it in your browser.
5. If you want to export it to Android for the first time, run this commands
```
ng build
ionic capacitor add android
npx cap open android
```
6. If you want to make a change for Android build result, run this commands
```
ng build
npx cap copy android
npx cap open android
```
7. If you want to make a change to firebase configurations, you can open https://drive.google.com/file/d/1WZOlIoBlQzPliUa9lSr5X0_wGcwVPtKl/view?usp=sharing **It's a complete documentation in Indonesia. Don't forget to use your UMN Credetial (SSO) to open it, because we have set it for UMN students and lecturers only**