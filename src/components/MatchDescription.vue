<template>
    <div class="match--card"> 
        <div class="match--image">
            <div :style="changeBackground" class="image1">
            </div>
            <div :style="changeBackground2" class="image2">
            </div>
        </div>

        <div class="match--information">
            <div class="top">
                <p class="match">
                    {{info_match.country1}} - {{info_match.country2}}
                </p>
                <p class="time">
                    <span>
                        {{info_match.time}}
                    </span>
                </p>
            </div>
            <p class="time">
                {{info_match.stadium}} - {{info_match.city_stadium}}
            </p>
                
        </div>
    </div>
</template>

<script>
//import
import {computed} from 'vue'
    export default {
        match:"MatchCard",
        props:{
            info_match: Object
        },
        setup(props){
            const changeBackground = computed( () =>{
                return{
                    backgroundImage: `url(${props.info_match.country1_img})`
                }
            })

            const changeBackground2 = computed( () =>{
                return{
                    backgroundImage: `url(${props.info_match.country2_img})`
                }
            })    
            //return
            return{
                changeBackground,
                changeBackground2
            }
        }
    }
</script>

<style lang="scss">

.match--card{
    width: 32%;
    height: 30vh;
    
    border: solid;
    border-color: black;
    p{
        margin: 0px;
    }

    .match--image{
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        border: solid;
        border-color: black;

        .image1{
            background-image: url("https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png");
            background-size: cover;
            background-position: center;
            height: 70%;
            width: 40%;
            margin: 0.5rem;
            border: solid;
            border-color: black;

        }

        .image2{
            background-image: url("https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png");
            background-size: cover;
            background-position: center;
            height: 70%;
            width: 40%;
            margin: 0.5rem;
            border: solid;
            border-color: black;
        }
    }
    .match--information{
        .top{
            margin: 5px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .time{
                background-color: grey;
                height: 100%;
                width: 10%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border-radius: 25%;
            }
        }
        
        .time{
            font-size: 0.9rem;
        }
    }
    
}


</style>