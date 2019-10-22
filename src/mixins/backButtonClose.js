export default {
    mounted() {
        document.addEventListener("deviceready", this.backClose, false);
    },

    destroyed() {
        document.removeEventListener("deviceready", this.backClose, false);
    },

    methods: {
        backClose() {
            document.addEventListener("backbutton",  (e) => {
                e.preventDefault();
                navigator.app.exitApp();
            }, false);
        },
    }
}