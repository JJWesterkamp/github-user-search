<template>
    <div class="search">
        <div class="search-form">

            <h1>Search for a github user!</h1>

            <form @submit="search()" action="#">
                <label for="query-input">Search:</label>
                <input id="query-input"
                       placeholder="Who are you looking for?"
                       type="text"
                       v-model="searchParams.q">

                <label for="page-size-input">Results per page</label>
                <select id="page-size-input" v-model="searchParams.per_page">

                    <option :selected="size === searchParams.per_page"
                            :value="size"
                            v-for="size in resultsPageSizes">
                        {{size}}
                    </option>
                </select>

                <label for="page-number-input">Page number</label>
                <input id="page-number-input"
                       min="1"
                       step="1"
                       type="number"
                       v-model="searchParams.page"
                >

                <br>

                <button class="button" type="submit">Search!</button>
            </form>
        </div>

        <div class="search-results" v-if="results !== null">
            <h2>Results</h2>
            <p>
                Showing results for <b>{{ results.request.q }}</b> |
                Page {{ results.request.page }} |
                {{ results.request.per_page }} per page.
            </p>

            <table>
                <tr v-for="result in results.items">
                    <td><img :src="result.avatar_url" alt=""></td>
                    <th>{{ result.login}}</th>
                    <td><router-link :to="{ name: 'user', params: { login: result.login }}">Details</router-link></td>
                    <td><a :href="result.html_url" target="_blank">View user on Github.</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>

    import { clone, equals, prop } from 'ramda';
    import { defaultSearchParams, resultsPageSizes, serverHost, serverPort } from '../../config/app';
    import axios from 'axios';

    export default {

        name: 'SearchForm',

        data() {

            return {
                resultsPageSizes: resultsPageSizes.getValues(),
                searchParams: clone(defaultSearchParams),
                results: null,
            };
        },

        computed: {
            prettyResults() {
                return this.results.map((result) => JSON.stringify(result, null, 4));
            },
        },

        methods: {
            search() {
                const params = clone(this.searchParams);

                if (this.results !== null && equals(this.results.request, params)) {
                    console.log('no need to search now!');
                    return;
                }

                axios
                    .get(`${serverHost}:${serverPort}/search`, { params })
                    .then(prop('data'), () => [])
                    .then(results => this.results = { ...results, request: params });
            }
        }
    };

</script>

<style scoped>

    .search-form,
    .search-results {
        margin: 2rem auto;
        max-width: 600px;
        padding: 2rem;
        border: 1px solid #eee;
    }

    img {
        display: block;
        width: 40px;
        height: 40px;
        object-fit: cover;
    }

    label,
    input,
    select {
        -webkit-appearance: none;
        display: block;
        width: 100%;
        padding: 8px 16px;
    }

    table {
        width: 100%;
    }

    th {
        text-align: left;
    }

    tr:hover {
        background-color: #eee;
    }
</style>
