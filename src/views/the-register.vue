<template>
    <v-app>
        <header class="app-title text-center">
            <h3>Register</h3>
            <v-divider></v-divider>
        </header>

        <section class="auth">
            <v-form class="auth-form" v-model="validation" @submit="submit">
                <v-subheader class="subtitle-1">Enter your credentials beloww:</v-subheader>
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
                        v-model="form.name"
                        :rules="required"
                        label="name"
                        placeholder="name"
                        solo
                ></v-text-field>
                <v-text-field
                        class="login-form__input"
                        v-model="form.phone"
                        :rules="phoneValidation"
                        label="phone"
                        placeholder="phone"
                        solo
                ></v-text-field>
                <v-text-field
                        class="login-form__input"
                        v-model="form.password"
                        :rules="passwordValidation"
                        label="password"
                        placeholder="password"
                        type="password"
                        :counter="8"
                        solo
                ></v-text-field>
                <div class="auth-link text-right">
                    <router-link to="/login">Already have an account?</router-link>
                </div>
                <v-btn
                        :disabled="!validation"
                        :loading="loading"
                        @click="submit"
                >
                    Register
                </v-btn>
            </v-form>
        </section>
    </v-app>
</template>

<script>
    import backButtonClose from "../mixins/backButtonClose";
    import {register} from "../api/auth";

    export default {
        name: "the-register",
        mixins: [backButtonClose],
        data() {
            return {
                form: {
                    email: null,
                    password: null
                },
                validation: false,
                emailValidation: [
                    v => !!v || 'E-mail is required',
                    v => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
                ],
                phoneValidation: [
                    v => !!v || 'Phone is required',
                    // v => /^((\+380)+([0-9]){9})$/.test(v) || 'Phone must be valid',
                ],
                passwordValidation: [
                    v => !!v || 'Password is required',
                    v => v.length >= 8 || 'Password is too short'
                ],
                required: [
                    v => !!v || 'Field is required',
                ],
                loading: false
            }
        },
        methods: {
            async submit() {
                this.loading = true;
                await register(this.form);
                this.loading = false;
            },
        },
    }
</script>

<style scoped>

</style>