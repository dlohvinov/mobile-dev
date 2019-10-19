<template>
    <div class="home">
        <v-progress-circular
                class="circular-progress"
                v-show="loading"
                :size="50"
                color="primary"
                indeterminate
        ></v-progress-circular>
        <pull-to
                :top-load-method="loadMailList"
            :top-config="pullConfig"
        >
            <header class="app-title text-center">
                <h3>Mail list</h3>
                <v-divider></v-divider>
            </header>
            <section
                    class="content"
                    v-show="!loading"
            >
                <mail-item
                        class="my-2"
                        v-for="(mail, key) in mailList"
                        :mail="mail"
                        :key="key"
                ></mail-item>
            </section>
        </pull-to>
    </div>
</template>

<script>
    import pullTo from 'vue-pull-to';
    import mailItem from '../components/mail-item';
    import {getMailList} from "../api/mail";

    const pullConfig = {
        pullText: 'Load', // The text is displayed when you pull down
        triggerText: 'Load..', // The text that appears when the trigger distance is pulled down
        loadingText: 'Loading...', // The text in the load
        doneText: 'Loaded', // Load the finished text
        failText: 'Not loaded', // Load failed text
    };

    export default {
        name: "the-home",
        components: {
            'mail-item': mailItem,
            'pull-to': pullTo,
        },
        data() {
            return {
                mailList: [],
                loading: false,
                pullConfig
            }
        },

        mounted() {
            this.loadMailList();
        },

        methods: {
            async loadMailList(loaded) {
                this.loading = true;
                try {
                    this.mailList = await getMailList();
                    loaded('done');
                } catch (err) {

                    loaded('fail');
                }
                finally {
                    this.loading = false;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        .circular-progress {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>