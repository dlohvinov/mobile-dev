<template>
    <div>
        <section class="content">
            <h1>{{this.username}}, Welcome to Vue</h1>
            <img alt="Vue logo" src="../assets/logo.png">
            <v-btn
                    :loading="loading"
                    @click="submit"
            >Sign out</v-btn>
        </section>
    </div>
</template>

<script>
    import firebase from 'firebase';
    import {mapState} from 'vuex';

    export default {
        name: "the-home",
        data() {
            return {
                loading: false
            }
        },
        computed: {
            ...mapState(['username'])
        },
        methods: {
            async submit() {
                this.loading = true;
                try {
                    await firebase.auth().signOut();
                    this.$router.push('/login');
                } catch (error) {
                    this.loading = false;
                    console.log(error);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>