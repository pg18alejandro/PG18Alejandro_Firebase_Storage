'use strict';

import Vue from 'vue'
import Router from 'vue-router';

Vue.use( Router );

import pgHome from '@/routes/Home.vue'
import pgTelemetry from '@/routes/Telemetry.vue'

export default new Router({
    routes: [
        { path:"/",                      name:"Home", component:  pgHome},
        { path:"/telemetry",                 name:"Telemetry", component:  pgTelemetry},
    ]
});
