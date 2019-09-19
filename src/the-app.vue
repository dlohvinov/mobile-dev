<template>
    <div id="app">
        <v-app>
<!--            <theLogin></theLogin>-->
            <router-view></router-view>
        </v-app>
    </div>
</template>

<script>
    import {getSession} from "./api/auth";
    import theLogin from './views/the-register';

    export default {
        name: 'app',
        components: {
            theLogin
        },
        mounted() {
            getSession();
        }
    }
</script>

<style>
    @import "css/main.scss";

    #app {
        font-family: 'Roboto Regular', sans-serif;
        background: #eee;
    }
</style>