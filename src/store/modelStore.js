// Copyright (C) 2020 Alejandro Lopez
import Vue from 'vue'
import Vuex from 'vuex'
import Connection from '../connection.js'
import TelemetryData from '../model/MyData.js'

const cloud = new Connection();

export default {
    state: {
        currentData: new TelemetryData(),
        storedData:{}
    },

    actions: {
        async getData({commit})
        {
            let data = await cloud.getStoreData();
            commit("ALL_DATA", data);
        },

        async pushData({commit}, data)
        {
            await cloud.setStoreData(data);
            commit("PUSH_DATA", data);
        }
    },

    mutations: {
        ALL_DATA: ( state, data ) => { state.storedData = data },
        PUSH_DATA: (state, data) => { state.currentData = data }
    },

    getters: {
        storedData: state => state.storedData,
        currentData: state => state.currentData
    },
}
