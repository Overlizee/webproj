<template>
    <div class="match--card"> 
        <router-link style="text-decoration: none; color: inherit;" onclick=window.location.reload() :to="{name: 'Match', params: {name: (info_match.id - 1)}}">
            <div class="match--image">
                <div :style="changeBackground" class="image1">
                </div>
                <p>-</p>
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
                <div class="bottom">
                    <p class="stadium">
                        {{info_match.stadium}} - {{info_match.city_stadium}}
                    </p>

                    <p class="groupe_info">
                        {{info_match.group}}
                    </p>
                </div>
            </div>
        </router-link>
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
                changeBackground2,
            }
        }
        
    }
</script>

<style lang="scss">

.match--card{
    width: 32%;
    height: 30vh;
    background-color:#dcdcdc;
    
    &:hover{
        transform: scale(1.1);
    }
    
    p{
        margin: 0px;
    }

    .match--image{
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            color: #962b46;
            font-size: 2rem;
        }

        .image1{
            background-image: url("https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png");
            background-size: cover;
            background-position: center;
            height: 70%;
            width: 40%;
            margin: 0.5rem;
        }

        .image2{
            background-image: url("https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png");
            background-size: cover;
            background-position: center;
            height: 70%;
            width: 40%;
            margin: 0.5rem;
        }
    }
    .match--information{

        border-top: solid #962b46;
        padding-top : 3px;
        border-width: 2px;
        .top{
            margin: 5px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .match{
                font-weight: bold;
                color: #962b46;
            }

            .time{
                background-color: #962b46;
                color: white;
                height: 100%;
                width: 10%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                border-radius: 10%;
            }
        }

        .bottom{
            margin: 0 5px 5px 5px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .stadium{
                color: #962b46;
            }

            .groupe_info{
                font-weight: bold;
                color: #962b46;
            }

        }
        

    }
    
}


</style>