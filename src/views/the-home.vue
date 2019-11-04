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
                :ops="pullConfig"
                @refresh-start="loadMailList"
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
    import pullTo from 'vuescroll';
    import mailItem from '../components/mail-item';
    import {getMailList} from '../api/mail';

    const pullConfig = {
        vuescroll: {
            mode: 'slide',
            pullRefresh: {
                enable: true
            },
            scroller: {
                preventDefaultOnMove: false
            }
        }
    };

    export default {
        name: 'the-home',
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
            async loadMailList() {
                this.loading = true;
                try {
                    this.mailList = await getMailList();
                } finally {
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