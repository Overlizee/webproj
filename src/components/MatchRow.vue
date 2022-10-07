<template>
  <div class="match--row" >
    <h2 class="title">
    </h2>
    <div class="wrapper--card">
        <match-card v-for="(card, index) in list_matches" :info_match="card" :key="index"/>
    </div>
  </div>
</template>

<script>
import MatchCard from './MatchCard.vue'
    export default {
        name:"MatchRow",
        components:{
            MatchCard,
        },
        props:{
            list_matches: Array
        }

    }
</script>

<style lang="scss">
    .match--row{
        .wrapper--card{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>