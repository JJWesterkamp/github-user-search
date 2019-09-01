<template>
    <div class="user">
        <router-link class="button" :to="{ name: 'search' }">Back to search</router-link>
        <pre>
            {{ user }}
        </pre>
    </div>
</template>

<script>

    import { path, prop } from 'ramda';
    import axios from 'axios';
    import appConfig from '../../config/app';

    const { serverHost, serverPort } = appConfig;

    export default {
        name: 'User',

        data() {
            return {
                user: null,
            }
        },

        mounted() {
            axios
                .get(`${serverHost}:${serverPort}/user/${this.getUsername()}`)
                .then(prop('data'), () => {})
                .then(userData => this.user = userData);
        },

        methods: {
            getUsername() {
                return path(['$route', 'params', 'login'], this);
            }
        }
    };
</script>

<style scoped>
    .user {
        margin: 2rem auto;
        max-width: 600px;
        padding: 2rem;
        border: 1px solid #eee;
    }
</style>
