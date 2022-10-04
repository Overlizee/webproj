<template>
  <div class="HomePage">
    <match-row v-for="(data, i) in data_match" :key="i" :three_matches="data"/>
  </div>
</template>

<script>
//IMPORT BDD
import BDD from '../bdd'
import {onMounted, ref} from 'vue'
//COMPONENTS
import MatchRow from '../components/MatchRow.vue'
export default {
    name:'HomePage',
    components:{
        MatchRow
    },
    setup(){
        class Match{
            constructor (name, note, image, time){
                this.name=name
                this.note = note
                this.image = image
                this.time = time
            }
        }
        
        let data_match = ref([]);
        const makeDataMatch = () =>{

            let three_matches = [];
            for (const match of BDD){

                const new_match = new Match(match.name, match.note, match.image, match.time)
                three_matches.push(new_match);
                if(three_matches.length == 3){
                    data_match.value.push(three_matches);
                    three_matches = [];
                }
            }
        }
        onMounted(makeDataMatch);

        //return
        return {
            data_match,
        }
    }
}
</script>

<style>

</style>