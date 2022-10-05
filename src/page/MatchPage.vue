<template>
  <div class="MatchPage">
    <p>{{$route.params.name}}</p>
  </div>
</template>

<script>
//IMPORT BDD
import BDD from '../bdd'
import {onMounted} from 'vue'
//COMPONENTS
export default {
    name:'MatchPage',
    setup(){
        class Match{
            constructor (id, date, time, round, group, country1, country1_img, country2, country2_img, stadium, capacity_stadium, city_stadium){
                this.id=id
                this.date=date
                this.time = time
                this.round = round
                this.group = group
                this.country1=country1
                this.country1_img = country1_img
                this.country2 = country2
                this.country2_img = country2_img
                this.stadium=stadium
                this.capacity_stadium = capacity_stadium
                this.city_stadium = city_stadium
            }
        }
        //$route.params.name
        const makeDataMatch = () =>{
            for (const match of BDD){
                if (match.id == 0){
                    const given_match = new Match(match.id, match.date, match.time, match.round, match.group, match.country1, match.country1_img, match.country2, match.country2_img, match.stadium, match.capacity_stadium, match.city_stadium)
                }
            }
        }

        let data_match = ref([]);
        let all_matches = [];
        const makeDataMatch = () =>{
            let current_match = [];
            for (const match of BDD){
                const new_match = new Match(match.id, match.date, match.time, match.round, match.group, match.country1, match.country1_img, match.country2, match.country2_img, match.stadium, match.capacity_stadium, match.city_stadium)

                //array for all matches
                all_matches.push(new_match);
                //array for matches by 3
                three_matches.push(new_match);
                if(three_matches.length == 3){
                    data_match.value.push(three_matches);
                    three_matches = [];
                }
            }
            data_match.value.push(three_matches);
        }

        onMounted(makeDataMatch);

        //return
        return {
            given_match,
        }
    }
}
</script>

<style>

</style>