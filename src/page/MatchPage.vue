<template>
    <div class="match--page">
        <HeaderMain/>

        <match-description :info_match="current_match"/>

        <div class="other_matches">
            <h1>Other matches of same teams</h1>
            <div class="wrapper--card">
                <match-row v-for="(data, i) in team_matches" :key="i" :list_matches="data" class="row"/>
            </div>
        </div>
        <FooterMain/>
    </div>
</template>

<script>
    import BDD from '../bdd'
    import {ref} from 'vue'
    import MatchRow from '../components/MatchRow.vue'
    import HeaderMain from '../components/HeaderMain.vue'
    import FooterMain from '../components/FooterMain.vue'
    import MatchDescription from '../components/MatchDescription.vue'
    import { getCurrentInstance } from '@vue/runtime-core'
    export default {
        name:'MatchPage',
        components:{
            MatchRow,
            HeaderMain,
            MatchDescription,
            FooterMain
        },
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

            //get match index from route
            const getinstance = getCurrentInstance();
            console.log(getinstance);
            const index_match = getinstance.proxy.$route.params.name;
            console.log("tpe is : "+typeof(index_match));
            console.log(index_match);

            var all_matches = [];
            const makeDataMatch = () =>{
                for (const match of BDD){
                    const new_match = new Match(match.id, match.date, match.time, match.round, match.group, match.country1, match.country1_img, match.country2, match.country2_img, match.stadium, match.capacity_stadium, match.city_stadium)
                    all_matches.push(new_match);
                }
            }
            makeDataMatch();
            
            let current_match = ref(all_matches[index_match]);
            let team_matches = ref([]);
            let list_matches = [];

            for (let i=0; i<all_matches.length;i++){
                //define variables for clearer if
                let t1_all = all_matches[i].country1;
                let t2_all = all_matches[i].country2;
                let t1_cur = current_match.value.country1;
                let t2_cur = current_match.value.country2;
                //search for other matches of team - exept current match
                if ( (t1_all == t1_cur || t1_all == t2_cur || t2_all == t1_cur || t2_all == t2_cur) && (!(t1_all==t1_cur && t2_all==t2_cur)) ){

                    //array for matches by 2
                    list_matches.push(all_matches[i]);
                    if(list_matches.length == 2){
                        team_matches.value.push(list_matches);
                        list_matches = [];
                    }
                }
            }


        
            return {
                current_match,
                team_matches
            }
        }
    }
</script>

<style lang="scss">
    .match--page{
        .other_matches{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            .wrapper--card{
                width: 100%;
                justify-content: space-around;

                .row{
                    width: 100%;
                }
            }
        }
    }
</style>