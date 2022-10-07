<template>
    <div class="MatchPage">
        <div class="header">
            <MainLogo/>
        </div>
        <p>aaaaaaaaaaa</p>
        <p id="route_match">Original route : {{$route.params.name}}</p>
        
        <p>Object with hardcode value : {{matchhhhh}}</p>
        <p>Object with good value : {{current_match}}</p>

        <match-card :info_match="current_match"/>


    </div>
</template>

<script>
    import BDD from '../bdd'
    import {ref} from 'vue'
    import MatchCard from '../components/MatchCard.vue'
    import MainLogo from '../components/MainLogo.vue'
import { getCurrentInstance } from '@vue/runtime-core'
    export default {
        name:'MatchPage',
        components:{
            MatchCard,
            MainLogo
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
            const index_match = getinstance.proxy.$route.params.name;

            var all_matches = [];
            //all_matches.push(2);
            const makeDataMatch = () =>{
                //console.log(BDD);
               // all_matches.push(1);
                for (const match of BDD){
                    const new_match = new Match(match.id, match.date, match.time, match.round, match.group, match.country1, match.country1_img, match.country2, match.country2_img, match.stadium, match.capacity_stadium, match.city_stadium)
                    all_matches.push(new_match);
                }
            }
            //onMounted(makeDataMatch);
            makeDataMatch();
            const matchhhhh = new Match('1','2022-11-20','16:00','1','A','Qatar','https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png?w=600&h=400','Ecuador','https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2016/09/ecuador-162283_1280.png?w=600&h=400','Al Bayt Stadium','60000','Al Khor')
            
            let current_match = ref(all_matches[index_match]);
        
            return {
                matchhhhh,
                current_match
            }
        }
    }
</script>

<style lang="scss">
.MatchPage{

    .header{
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .main_logo{
            &:hover{
                transform: scale(1.1);
            }
        }
        
        img{
            width: 200px;
        }
    }
}

</style>