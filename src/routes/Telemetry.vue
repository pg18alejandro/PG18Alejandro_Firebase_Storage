// Copyright (C) 2020 Alejandro Lopez
<template>

    <section class="telemetry-container">
        <div class="telemetry">
            <h1 class="title">Telemetry</h1> <!-- Form to get data from the user -->
            <form @submit.prevent="packInfo(id, timeLevel1, timeLevel2, timeLevel3, deathsLevel1, deathsLevel2, deathsLevel3)">
                <label> ID </label>
                <input type="text" placeholder="PlayerX" id="id" v-model="id"><br>
                <label> Time Level 1 </label>
                <input type="number" id="timeLevel1" v-model="timeLevel1"><br>
                <label> Time Level 2 </label>
                <input type="number" id="timeLevel2" v-model="timeLevel2"><br>
                <label> Time Level 3 </label>
                <input type="number" id="timeLevel3" v-model="timeLevel3"><br>
                <label> Deaths Level 1 </label>
                <input type="number" id="deathsLevel1" v-model="deathsLevel1"><br>
                <label> Deaths Level 2 </label>
                <input type="number" id="deathsLevel2" v-model="deathsLevel2"><br>
                <label> Deaths Level 3 </label>
                <input type="number" id="deathsLevel3" v-model="deathsLevel3"><br>        
                <button type="submit" value="Submit">Submit</button>  
            </form> 
        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'
    import TelemetryData from '../model/MyData.js'

    class TelemetryController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                id: "",
                timeLevel1: 0,
                timeLevel2: 0,
                timeLevel3: 0,
                deathsLevel1: 0,
                deathsLevel2: 0,
                deathsLevel3: 0
            }

            this.injectActions(["pushData"]);
        }

        //Create the data package
        packInfo(id, timeLevel1, timeLevel2, timeLevel3, deathsLevel1, deathsLevel2, deathsLevel3){
            let myData = new TelemetryData(id, timeLevel1, timeLevel2, timeLevel3, deathsLevel1, deathsLevel2, deathsLevel3);
            this.pushData(myData);
        }
    }

    export default new TelemetryController('pgTelemetry');

</script>
<style>
/* Local styles for this template */
    .telemetry-container {
        display: inline-block;
        width: 100%;
    }

    .telemetry {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
