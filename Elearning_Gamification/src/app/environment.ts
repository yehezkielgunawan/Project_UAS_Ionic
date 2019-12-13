export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyC8GK-HMtbm4gdAm9a064WUBx9naUMOqSo",
    authDomain: "goleranapp.firebaseapp.com",
    databaseURL: "https://goleranapp.firebaseio.com",
    projectId: "goleranapp",
    storageBucket: "goleranapp.appspot.com",
    messagingSenderId: "1009818567789",
    appId: "1:1009818567789:web:eff28dae490c12a6606b64",
    measurementId: "G-WLSV9ZR032"
}

export const snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val();
        item.key = element.key;
        returnArray.push(item);
    });
    return returnArray;
}