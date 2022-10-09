<template>
    <div class="HeaderMain">
        <div class="header">
            <div class="main_logo">
                <router-link style="text-decoration: none; color: inherit;" :to="{path: '/'}">
                    <img src="../assets/FifaLogo.png" alt="" srcset="">
                </router-link>
            </div>
            
            <div class="wrapper--input">
                <input v-model="user_search_match" type="text" placeholder="What are you searching for ?">
                <div class="search">
                    <router-link style="text-decoration: none; color: inherit;" onclick=window.location.reload() v-for="(match, i) in search_match" :key="i" :to="{name: 'Match', params: {name: match.id - 1}}">
                        <div class="container--match--search">
                            <div class="wrapper--img">
                                <img :src="match.country1_img" alt="">
                            </div>
                            <p>{{match.country1}} - {{match.country2}}</p>
                            <div class="wrapper--img2">
                                <img :src="match.country2_img" alt="">
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//IMPORT BDD
import BDD from '../bdd'
import {ref, watch} from 'vue'
export default {
    name:'HeaderMain',
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
        
        var all_matches = [];
        const makeDataMatch = () =>{
            //console.log(BDD);
            // all_matches.push(1);
            for (const match of BDD){
                const new_match = new Match(match.id, match.date, match.time, match.round, match.group, match.country1, match.country1_img, match.country2, match.country2_img, match.stadium, match.capacity_stadium, match.city_stadium)
                all_matches.push(new_match);
            }
        }
        makeDataMatch();

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

        //return
        return {
            user_search_match,
            search_match,
        }
    }
}
</script>


<style lang="scss">
.HeaderMain{
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

        .wrapper--input{
            position: relative;

            input{
                background-color: #f6f6f6;
                border: none;
                height: 60px;
                width: 400px;
                outline: none;
                padding-left: 10px;
            }

            .search{
                position: absolute;
                top: 100%;
                width: 100%;
                background-color: #fff;

                router-link{
                    text-decoration: none;
                    text-transform: uppercase;
                }
    

                .container--match--search{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;

                    .wrapper--img{
                        height: 60px;
                        width: 60px;
                        margin-right: 25px;
                        border-radius: 50%;
                        border: solid #962b46;
                        overflow: hidden;
                        
                        img{
                            height: 100%;
                            width: 100%;
                        }
                    }

                    .wrapper--img2{
                        height: 60px;
                        width: 60px;
                        margin-left: 25px;
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
}
</style>