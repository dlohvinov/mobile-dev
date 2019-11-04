<template>
    <div>
        <header class="app-title text-center">
            <h3>{{this.id}} mail</h3>
            <v-divider></v-divider>
        </header>
        <v-card
                class="mail my-6 mx-auto pa-4 text--white elevation-3"
                :max-width="360"
        >
            <div class="d-flex flex-no-wrap">
                <div class="pic__img-wrap">
                    <v-img class="pic__img" :src="mail.img"></v-img>
                </div>
                <div>

                </div>
            </div>
            <v-card-title class="headline font-weight-bold text-uppercase text-center">
                {{mail.type}}
            </v-card-title>
            <v-card-text>
                <div class="subtitle-1 black--text">Sender: <strong>{{mail.sender}}</strong></div>
                <div class="subtitle-1 black--text">Reciever: <strong>{{mail.reciever}}</strong></div>
                <div class="subtitle-1 black--text">
                    Status:
                    <strong class=" text-uppercase">{{mail.status}}</strong>
                </div>
                <div class="subtitle-1 black--text">Weight: <strong>{{mail.weight}}</strong></div>
            </v-card-text>
            <v-card-actions>
                <v-btn
                        class="ml-auto"
                        color="accent"
                        to="/mails"
                >
                    Back to List
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {getMail} from "../api/mail";

    export default {
        name: "opened-mail-item",
        data() {
            return {
                mail: {},
                id: null,
            }
        },

        mounted() {
            this.id = this.$route.params.id;
            this.loadMail();
        },

        methods: {
            async loadMail() {
                this.mail = await getMail(this.id);
            }
        }
    }
</script>