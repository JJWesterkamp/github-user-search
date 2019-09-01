<template>
    <div id="app">
        <header>
            <span>Github user search - JJWesterkamp</span>
        </header>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style>

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .button {
        display: inline-block;
        background: #227952;
        color: white;
        padding: 0.5rem 1rem;
        text-align: center;
        font-weight: bold;
        border: none;
    }

    main {
        margin-top: 40px;
    }

    header {
        text-align: center;
        margin: 0;
        height: 56px;
        padding: 0 16px 0 24px;
        background-color: #35495E;
        color: #ffffff;
    }

    header span {
        display: block;
        position: relative;
        font-size: 20px;
        line-height: 1;
        letter-spacing: .02em;
        font-weight: 400;
        box-sizing: border-box;
        padding-top: 16px;
    }
</style>
