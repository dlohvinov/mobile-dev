<template>
    <v-app>
        <header class="app-title text-center">
            <h3>Log in</h3>
            <v-divider></v-divider>
        </header>

        <section class="auth">
            <v-form class="auth-form" v-model="validation" @submit="submit">
                <v-subheader class="subtitle-1">Enter your credentials below:</v-subheader>
                <v-text-field
                        class="login-form__input"
                        v-model="form.email"
                        :rules="emailValidation"
                        label="email"
                        placeholder="email"
                        solo
                ></v-text-field>
                <v-text-field
                        class="login-form__input"
                        v-model="form.password"
                        :rules="passwordValidation"
                        label="password"
                        placeholder="password"
                        type="password"
                        solo
                ></v-text-field>
                <div class="auth-link text-right">
                    <router-link to="/register">Don't have an account?</router-link>
                </div>
                <v-btn
                        :disabled="!validation"
                        :loading="loading"
                        @click="submit"
                >
                    Login
                </v-btn>
            </v-form>
        </section>
    </v-app>
</template>

<script>
    import {login} from '../api/auth';
    import backButtonClose from '../mixins/backButtonClose';
    import validatorsMixin from '../mixins/validatorsMixin';

    export default {
        name: 'the-login',
        mixins: [validatorsMixin, backButtonClose],
        data() {
            return {
                form: {
                    email: null,
                    password: null
                },
                loading: false,
            }
        },
        methods: {
            async submit() {
                this.loading = true;
                await login(this.form.email, this.form.password);
                this.loading = false;
            },
        },

    }
</script>

<style lang="scss" scoped>
    .alert {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
</style>