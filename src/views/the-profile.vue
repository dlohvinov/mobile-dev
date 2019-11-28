<template>
    <div>
        <header class="app-title text-center">
            <h3>Edit profile</h3>
            <v-divider></v-divider>
        </header>
        <v-card
                class="my-6 mx-auto pa-4 text--white elevation-3"
                :max-width="360"
        >
            <div class="d-flex flex-no-wrap">
                <div class="pic__img-wrap">
                    <v-img class="pic__img" :src="user.pic"></v-img>
                    <input
                            class="pic__input"
                            type="file"
                            @input="uploadPic"
                            accept="images/*"
                    >
                </div>
            </div>
            <h3 class="my-3">User details: </h3>
            <v-form>
                <v-text-field
                        v-model="user.email"
                        :rules="emailValidation"
                        label="email"
                        placeholder="email"
                ></v-text-field>
                <v-text-field
                        v-model="user.displayName"
                        :rules="required"
                        label="name"
                        placeholder="name"
                ></v-text-field>
                <v-card-actions>
                    <v-btn
                            class="ml-auto"
                            color="accent"
                            @click.native="changeCredentials"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    import validatorsMixin from '../mixins/validatorsMixin';
    import {getPic, getUser, updateUser, uploadPic} from '../api/profile';

    export default {
        name: 'the-profile',
        mixins: [validatorsMixin],
        data() {
            return {
                user: {}
            }
        },

        mounted() {
            this.loadUser();
        },

        methods: {
            async changeCredentials() {
                await updateUser(this.user);
                this.loadUser();
            },

            async loadUser() {
                const user = await getUser();
                this.user = {
                    email: user.email,
                    displayName: user.displayName,
                    pic: user.pic,
                    uid: user.uid,
                };

                if(this.user.uid) {
                    this.loadPic();
                }
            },

            async loadPic() {
                this.user.pic = await getPic(this.user.uid);
            },

            async uploadPic(event) {
                const file = event.srcElement.files[0];
                await uploadPic(file, this.user.uid);
                this.loadUser();
            },
        }
    }
</script>

<style lang="scss" scoped>
    .pic__img-wrap {
        position: relative;
        padding: 0;
        border-radius: 50%;
        overflow: hidden;

        .pic__input {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0;
        }
    }
</style>