<template>
    <v-card class="mail pa-2 text--white">
        <div class="d-flex flex-no-wrap">
            <div  class="mail__img-wrap">
                <v-img class="mail__img" :src="mail.img"></v-img>
            </div>
            <div>
                <v-card-title class="headline py-0">
                {{mail.type}}
            </v-card-title>
                <v-card-text>
                    <div>Sender: {{mail.sender}}</div>
                    <div>Reciever: {{mail.reciever}}</div>
                    <div>Status: {{mail.status}}</div>
                </v-card-text>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        name: "mail-item",
        props: {
            mail: {
                type: Object,
                reqired: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mail__img-wrap {
        width: 100px;
        height: 100px;
        padding: 5px;
        border: 1px dashed #0d47a1;

        .mail__img {
            vertical-align: center;
        }
    }
</style>