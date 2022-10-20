<template>
    <div class="about--us">
        <HeaderMain/>
        <div class="main_content">

            <header>
                <h1><span class="title_main"/>The MELM Team</h1>
            </header>

            <div class="person_presentation">
                <img src="../assets/matteo.jpg" alt="picture" class = "img-person" />
                <div class="text_with_title">
                    <h3><i>M</i> for Matteo PORTE-PARTARRIEU</h3>
                    <p>
                        Matteo is the first one of our 4 members. 
                        He loves Clash Royal, Working out and Mangas. After an french scientific 
                        baccalaureate, he went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                        Passionate about football and thus the world cup, Matteo thinks the world cup is going to be won by Italy at the end of the competition.
                        Fan of Federico Chiesa, he might not be able to see his favorite player during the euro, as he is only coming back from an injury.
                        Hopefully for him, his health will enable him to join the world cup and win it with Italy.
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <img src="../assets/elliot.jpg" alt="picture" class = "img-person"/>
                <div class="text_with_title">
                    <h3><i>E</i> for Elliot Touratier</h3>
                    <p>
                        Elliot is the second one of our 4 members. 
                        He loves Clash royal and parties. After an international scientific 
                        baccalaureate, he also went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                        Passionate about football and thus the world cup, Elliot thinks the world cup is going to be won by Brazil in december.
                        Fan of Lucas Paqueta, he thinks that the brazilian player can help his coutry each his sixth football world cup. In fact, seeing him play when
                        he was at Olympique Lyonnais was one of the favorite moments as a supporter of Elliot.
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <img src="../assets/louis.jpg" alt="picture" class = "img-person"/>
                <div class="text_with_title">
                    <h3><i>L</i> for Louis Rigault</h3>
                    <p>
                        Louis is the third of our 4 members.
                        He loves tennis, Paris Saint-Germain, Fortnite and KR39. After an french scientific 
                        baccalaureate, he also went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                        Passionate about football and thus the world cup, Louis thinks that France is going to win the world cup in a few months.
                        Fan of Kylian Mbappe, Louis is sure that France will do an amazing world cup, with Mbappe, the best player of 2022 ie. the ballon d'or 
                        Karim Benzema, and someone making a good comeback at Athletico, the star player Antoine Griezmann.
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <img src="https://media.discordapp.net/attachments/1032666429029359626/1032668446615408740/photo_identtite_capture_.jpg" alt="picture" class = "img-person"/>
                <div class="text_with_title">
                    <h3><i>M</i> for Manuel Muratet</h3>
                    <p>
                        Manuel is the last one of our 4 members.
                        He loves football, valorant and music. After an french scientific 
                        baccalaureate, he also went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                        Passionate about football and thus the world cup, Manuel thinks the world cup is going to be won by Argentina at the end of the year.
                        Absolute fan of the best player in history, the GOAT (according to him), he is sure that Lionel Messi will win his first world cup and
                        bring a huge joy for the summer in Argentina.
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <a href="mailto:louisrigaultpro@gmail.com"><img src="../assets/mail.png" alt="email" class="email_photo" style="max-height:165px"/></a>
                <div class="text_with_title">
                    <h3>Contact us</h3>
                    <p>
                        Don't hesitate to contact us by mail, by clicking on the email logo on your left. If you have any questions regarding our website, regarding the 2022 World Cup taking place in Qatar or if you have any suggestions concerning our website, don't hesitate to contact us by clicking on our mail logo.
                    </p>
                </div>
            </div>

        </div>
        <FooterMain/>
    </div>
</template>

<script>
    import HeaderMain from '../components/HeaderMain.vue'
    import FooterMain from '../components/FooterMain.vue'
    export default {
        components:{
            HeaderMain,
            FooterMain
        },
    }
</script>

<style lang="scss">
    .main_content{
        
        color: #962b46;
        text-align: center;
        .person_presentation{
            padding: 10px 60px;
            display: flex;
            flex-direction: row;
            text-align: center;
            align-content: stretch;
            margin-left: auto;
            margin-right: auto;
            overflow:auto;
            border-bottom: solid 2px;

            .email_photo{
                max-height: 150px;
                width: auto;
            }

            img{
                margin-right: 50px;
                width: 200px;
            }

        }
    }
</style>