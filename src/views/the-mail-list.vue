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
                        @click.native="openMail(mail.id)"
                ></mail-item>
            </section>
        </pull-to>
        <v-btn
                class="fab-fixed"
                color="accent"
                fab
                @click="createMail"
        >
            <v-icon>mdi-plus</v-icon>
        </v-btn>
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
        name: 'the-mail-list',
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
            openMail(id) {
                this.$router.push({
                   name: 'mail',
                   params: {id}
                });
            },

            createMail() {
                this.$router.push('/mails/new');
            },

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
    .fab-fixed {
        position: fixed;
        right: 20px;
        bottom: 76px;
    }
</style>