<template>
    <v-app>
        <header class="app-title text-center">
            <h3>Create new mail</h3>
            <v-divider></v-divider>
        </header>

        <v-progress-circular
                class="circular-progress"
                v-show="loading"
                :size="50"
                color="primary"
                indeterminate
        ></v-progress-circular>

        <section
                class="mail-new"
                v-show="!loading"
        >
            <v-form class="form" v-model="validation" @submit="submit">
                <v-subheader class="subtitle-1">Enter your mail data below:</v-subheader>
                <v-text-field
                        class="form__input"
                        v-model="form.type"
                        :rules="mailStringValidation"
                        label="Mail type"
                        placeholder="Mail type"
                        solo
                ></v-text-field>
                <v-text-field
                        class="form__input"
                        v-model="form.sender"
                        :rules="mailStringValidation"
                        label="Sender"
                        placeholder="Sender"
                        solo
                ></v-text-field>
                <v-text-field
                        class="form__input"
                        v-model="form.reciever"
                        :rules="mailStringValidation"
                        label="Receiver"
                        placeholder="Receiver"
                        solo
                ></v-text-field>
                <v-text-field
                        class="form__input"
                        v-model="form.weight"
                        :rules="mailWeightValidation"
                        label="Weight"
                        placeholder="Weight"
                        solo
                ></v-text-field>
                <v-btn
                        :disabled="!validation"
                        @click="submit"
                >
                    Submit
                </v-btn>
            </v-form>
        </section>
    </v-app>
</template>

<script>
    import validatorsMixin from '../mixins/validatorsMixin';
    import {addMail} from "../api/mail";

    export default {
        name: "mail-new",
        mixins: [validatorsMixin],
        data() {
            return {
                form: {
                    type: '',
                    sender: '',
                    reciever: '',
                    weight: null,
                    status: 'Waiting to be sent',
                },
                loading: false,
            }
        },
        methods: {
            async submit() {
                this.loading = true;
                try {
                    await addMail(this.form);
                    await this.$router.push('/mails');
                } catch {
                }
                this.loading = false;
            },
        },
    }
</script>

<style scoped>

</style>