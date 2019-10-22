export default {
    data() {
        return {
            validation: false,
            emailValidation: [
                v => !!v || 'E-mail is required',
                v => /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
            ],
            passwordValidation: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password is too short'
            ],
            phoneValidation: [
                v => !!v || 'Phone is required',
                v => /^((\+380)+([0-9]){9})$/.test(v) || 'Phone must be valid',
            ],
            required: [
                v => !!v || 'Field is required',
            ],
        }
    }
}