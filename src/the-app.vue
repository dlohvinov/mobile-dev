<template>
    <div id="app">
        <v-app>
            <router-view></router-view>
            <v-snackbar
                    class="text--white"
                    v-model="snackbar"
                    color="accent"
            >{{snackbarText}}
                <v-btn
                        text
                        @click="snackbar = false"
                >
                    Close
                </v-btn>
            </v-snackbar>
        </v-app>
    </div>
</template>

<script>
    import {getSession} from "./api/auth";
    import theLogin from './views/the-register';
    import {eventBus} from './eventBus';

    export default {
        name: 'app',
        components: {
            theLogin
        },

        data() {
            return {
                snackbar: false,
                snackbarText: '',
            }
        },

        mounted() {
            getSession();


            window.addEventListener('offline', () => {
                this.showSnack('You`re now offiine!');
                // eventBus.$emit('snack', 'Internet connection lost!');
            });
            window.addEventListener('online', () => {
                this.showSnack('You`re now online!');
            });

            eventBus.$on('snack', (snackbarText) => {
                this.showSnack(snackbarText);
            })
        },

        methods: {
            showSnack(snackbarText) {
                this.snackbarText = snackbarText;
                this.snackbar = true;
                setTimeout(() => {
                    this.snackbar = false;
                }, 4000);
            }
        }
    }
</script>

<style>
    @import "css/main.scss";

    #app {
        font-family: 'Roboto Regular', sans-serif;
        background: #c5cae9;
    }
</style>