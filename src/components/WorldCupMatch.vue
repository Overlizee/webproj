<template>
    <div>
        <h1>MATCHES</h1>
        <div v-for="matches in dtb" :key="matches.id">
            <p>
                Match of group : {{matches.group}} <br>
                {{matches.country1}} VS {{matches.country2}}
            </p>
        </div>
    </div>
  
</template>

<script>
    import WorldcupData from "../assets/worldcup22.json";

    export default {
        data() {
            return {
            dtb: WorldcupData,
            };
        }
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
