<template>
  <div class="HomePage">

    <div class="header">
        <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="" srcset="">
        
        <div class="wrapper--input">
            <input v-model="user_search_match" type="text" placeholder="What are you searching for ?">
            <div class="search">
                <div v-for="(match, i) in search_match" :key="i" class="container--match--search">
                    <div class="wrapper--img">
                        <img :src="match.country1_img" alt="">
                    </div>
                    <p>{{match.country1}}</p>
                </div>
            </div>
        </div>
        
        
    </div>
    <div class="banner">

    </div>

    <match-row v-for="(data, i) in data_match" :key="i" :three_matches="data"/>
  </div>
</template>

<script>
//IMPORT BDD
import BDD from '../bdd'
import {onMounted, ref, watch} from 'vue'
//COMPONENTS
import MatchRow from '../components/MatchRow.vue'
export default {
    name:'HomePage',
    components:{
        MatchRow
    },
    setup(){
        class Match{
            constructor (date, time, round, group, country1, country1_img, country2, country2_img, stadium, capacity_stadium, city_stadium){
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
        
        let data_match = ref([]);
        let all_matches = [];
        const makeDataMatch = () =>{

            let three_matches = [];
            for (const match of BDD){
                const new_match = new Match(match.date, match.time, match.round, match.group, match.country1, match.country1_img, match.country2, match.country2_img, match.stadium, match.capacity_stadium, match.city_stadium)

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

        //Search option to search for a match - ref is because it will always change
        let user_search_match = ref('');
        let search_match = ref([]);
        //watch so that it does something when there is a change
        watch(user_search_match, new_value=> {
            
            let regex = RegExp(new_value.toLowerCase());

            let new_search_match = all_matches.filter(match => regex.test(match.country1.toLowerCase()) || regex.test(match.country2.toLowerCase()) || regex.test(match.date) || regex.test(match.time) || regex.test(match.round) || regex.test(match.group.toLowerCase()) || regex.test(match.stadium.toLowerCase()) || regex.test(match.capacity_stadium) || regex.test(match.city_stadium.toLowerCase()));

            if (new_value == 0){
                search_match.value = [];
            }
            else{
                search_match.value = new_search_match;
            }
        })


        onMounted(makeDataMatch);

        //return
        return {
            data_match,
            user_search_match,
            search_match,
        }
    }
}
</script>

<style lang="scss">
.HomePage{
    .header{
        height: 120px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 200px;
        }

        .wrapper--input{
            position: relative;

            input{
                background-color: #f6f6f6;
                border: none;
                height: 60px;
                width: 400px;
                outline: none;
            }

            .search{
                position: absolute;
                top: 100%;
                width: 100%;
                background-color: #fff;
    

                .container--match--search{
                    display: flex;
                    align-items: center;
                    padding: 10px;

                    &:hover{
                        background-color: #f6f6f6;
                    }


                    .wrapper--img{
                        height: 60px;
                        width: 60px;
                        margin-right: 25px;
                        border-radius: 50%;
                        overflow: hidden;
                        
                        img{
                            height: 100%;
                            width: 100%;
                        }
                    }

                }
            }
        }
    }

    .banner{
        height: 200px;
        width: 100%;
        background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
        background-size: cover;
        background-position: center center;
    }
}
</style>