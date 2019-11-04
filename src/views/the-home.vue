<template>
    <div class="wrap">
        <router-view></router-view>
        <v-bottom-navigation
                :value="activeBtn"
                color="primary"
                grow
                fixed
        >
            <v-btn to="/mails">
                <span>Mail List</span>
                <v-icon>mdi-view-list</v-icon>
            </v-btn>

            <v-btn to="/">
                <span>Favorites</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn to="/profile">
                <span>Profile</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
    // import MailList from './the-mail-list';

    export default {
        name: 'the-home',
        components: {
            // MailList
        },
        data() {
            return {
                activeBtn: 1,
            }
        },

        mounted() {

        },

        methods: {

        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        padding-bottom: 70px;
    }
</style>