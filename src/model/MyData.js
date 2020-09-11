// Copyright (C) 2020 Alejandro Lopez
'use strict';

//class to contain the package info
export default class TelemetryData{
    constructor(id, timeLevel1, timeLevel2, timeLevel3, deathsLevel1, deathsLevel2, deathsLevel3)
    {
        this.data={
            id,
            timeLevel1,
            timeLevel2,
            timeLevel3,
            deathsLevel1,
            deathsLevel2,
            deathsLevel3
        }
    }

    get id() {return this.data.id}
    set id(value) {this.data.id = value}

    get timeLevel1() {return this.data.timeLevel1}
    set timeLevel1(value) {this.data.timeLevel1 = value}

    get timeLevel2() {return this.data.timeLevel2}
    set timeLevel2(value) {this.data.timeLevel2 = value}

    get timeLevel3() {return this.data.timeLevel3}
    set timeLevel3(value) {this.data.timeLevel3 = value}

    get deathsLevel1() {return this.data.deathsLevel1}
    set deathsLevel1(value) {this.data.deathsLevel1 = value}

    get deathsLevel2() {return this.data.deathsLevel2}
    set deathsLevel2(value) {this.data.deathsLevel2 = value}

    get deathsLevel3() {return this.data.deathsLevel3}
    set deathsLevel3(value) {this.data.deathsLevel3 = value}
}