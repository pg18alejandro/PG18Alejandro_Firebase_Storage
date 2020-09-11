<!--
VFS VUE Single File Component
Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section class="home-container">
        <div class="home">
            <h1 class="title">Home</h1>

        </div>
    </section>

</template>
<script>
    import Controller from '@/../lib/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                name: 'VFS Vue Template',
            }
            this.injectActions(['getData']);
            this.injectGetters(['storedData']);
        }

        async vue_mounted()
        {
            await this.getData();
            let firebas = this.storedData;
            let dat = []

           firebas.forEach(element => {
                dat.push(element.data());
            });

            console.log(dat);
        }
    }


    export default new HomeController('pgHome');

</script>
<style>
/* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid red;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .title {
        text-shadow: 2px 2px #777;
    }
</style>
