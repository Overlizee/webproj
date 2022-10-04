<template>
    <div class="match--card"> 
        <div :style="changeBackground" class="match--image">
        </div>

        <div class="match--information">
            <div class="top">
                <p class="name">
                    {{info_match.name}}
                </p>
                <p class="note">
                    <span>
                        4.5
                    </span>
                </p>
            </div>
            <p class="time">
                16:00 / Stadium name
            </p>
                
        </div>
    </div>
</template>

<script>
//import
import {computed} from 'vue'
    export default {
        name:"MatchCard",
        props:{
            info_match: Object
        },
        setup(props){
            const changeBackground = computed( () =>{
                return{
                    backgroundImage: `url(${props.info_match.image})`
                }
            })

            //return
            return{
                changeBackground
            }
        }
    }
</script>

<style lang="scss">

.match--card{
    width: 32%;
    height: 30vh;
    p{
        margin: 0px;
    }

    .match--image{
        background-image: url("https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png");
        height: 70%;
        background-size: cover;
        background-position: center;
    }
    .match--information{
        .top{
            margin: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .note{
                background-color: grey;
                height: 30px;
                width: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border-radius: 40%;
            }
        }
        
        .time{
            font-size: 0.9rem;
        }
    }
    
}


</style>