<template>
    <div class="wrap">
        <router-view></router-view>
        <v-bottom-navigation
                :value="activeBtn"
                color="primary"
                grow
                fixed
        >
            <v-btn to="/mails">
                <span>Mail List</span>
                <v-icon>mdi-view-list</v-icon>
            </v-btn>

            <v-btn to="/unknown">
                <span>Favorites</span>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn to="/profile">
                <span>Profile</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
    export default {
        name: 'the-home',
        data() {
          return {
              activeBtn: 1,
          }
        },
        created() {
            this.$router.push('/unknown');
        }
    }
</script>

<style lang="scss" scoped>
    .wrap {
        padding-bottom: 70px;
    }
</style>