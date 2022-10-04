<template>
    <div id="app">
        <h1>Home</h1>
        <!--     <MatchList />      -->

        <WorldCupMatch/>
        
    </div>
</template>

<script>
    import WorldCupMatch from './components/WorldCupMatch.vue'
    export default {
        components:{
            WorldCupMatch
        },
    };
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
