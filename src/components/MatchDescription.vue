<template>
    <div class="match--description"> 
        <div class="match_info">  
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
                        {{info_match.stadium}}
                    </p>

                    <p class="groupe_info">
                        {{info_match.date}}
                    </p>
                </div>
                <div class="bottom">
                    <p class="stadium">
                        {{info_match.city_stadium}}
                    </p>

                    <p class="groupe_info">
                        {{info_match.group == "Knockout" ? info_match.round : info_match.group  }}
                    </p>
                </div>
            
            </div>
        </div>  

        <div class="reservation_info">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d522176.1063206662!2d51.00774624396007!3d25.26133842150813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sQatar!5e0!3m2!1sfr!2sfr!4v1665412942045!5m2!1sfr!2sfr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <router-link class="router" :to="{name: 'Booking', params: {name: info_match.id - 1}}">
                <img src="../assets/tickets.png" alt="">
                <p>Book your tickets here</p>
            </router-link>
        </div>
    </div>
</template>

<script>
//import
import {computed} from 'vue'
    export default {
        match:"MatchDescription",
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

.match--description{
    height: 60vh;
    margin-bottom: 2%;
    background-color:#dcdcdc;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .match_info{
        width: 50%;
        height: 80%;
        margin-left: 1%;

        .match--image{
            height: 55%;
            margin-bottom: 3%;
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
                height: 100%;
                width: 40%;
                margin: 0% 3% 0% 3%;
            }

            .image2{
                background-image: url("https://lesplusbeauxdrapeauxdumonde.files.wordpress.com/2017/03/qatar-162396_1280.png");
                background-size: cover;
                background-position: center;
                height: 100%;
                width: 40%;
                margin: 0% 3% 0% 3%;
            }
        }
        .match--information{

            border-top: solid #962b46;
            padding-top : 1%;
            border-width: 2%;
            height: 40%;
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            line-height: 0%;

            
            .top{
                margin: 0% 10%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                
                .match{
                    font-size: 2rem;
                    font-weight: bold;
                    color: #962b46;
                }

                .time{
                    background-color: #962b46;
                    color: white;
                    width: 10%;
                    height: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.3rem;
                    border-radius: 10px;
                }
            }

            .bottom{
                margin: 0% 10%;
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

    .reservation_info{
        height: 90%;
        width: 50%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;



        iframe{
            width: 60%;
            height: 80%;
            margin-bottom: 5%;
        }

        .router{
            display: flex;
            align-items: center;
            text-decoration: none; 
            color: inherit;
            height: 15%;
            width: 35%;

            border-radius: 10px;
            background-color: #962b46;

            &:hover{
                transform: scale(1.2);
            }

            img{
                height: 100%;
            }

            p{
                margin-right:2%;
                
                    color: white;
            }

        }


    }
    
}


</style>