// Copyright (C) 2020 Alejandro Lopez
'use strict';

import * as firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"

export default class Connection {
    constructor() {
        let firebaseConfig = {
            apiKey: "AIzaSyARx7g_th2SVwZGfsWR-2egnBA87bMJL04",
            authDomain: "telemetryserver-66170.firebaseapp.com",
            databaseURL: "https://telemetryserver-66170.firebaseio.com",
            projectId: "telemetryserver-66170",
            storageBucket: "telemetryserver-66170.appspot.com",
            messagingSenderId: "797154665553",
            appId: "1:797154665553:web:fc7fee8563447d9ff24470",
            measurementId: "G-Q0KLL51T90"
        };

        firebase.initializeApp( firebaseConfig );

        this.datastore = firebase.firestore();
    }

    //get data from firebase
    getStoreData()
    {
        return new Promise((resolve, reject) => {
            let data = this.datastore.collection("MyData");
            data.get()
            .then((res)=>{
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            })
        })
    }

    setStoreData(currentData)
    {
        return new Promise((resolve, reject) => {
            //GEtthe package and send it in firebase
            let pack = this.datastore.collection("MyData");
            pack.doc(currentData.id).set(
                {
                    timeLevel1: currentData.timeLevel1,
                    timeLevel2: currentData.timeLevel2,
                    timeLevel3: currentData.timeLevel3,
                    deathsLevel1: currentData.deathsLevel1,
                    deathsLevel2: currentData.deathsLevel2,
                    deathsLevel3: currentData.deathsLevel3
                }
            )
            .then(()=>{
                resolve(currentData.data);
            })
            .catch((error) => {
                reject(error);
            })
        })
    }
}