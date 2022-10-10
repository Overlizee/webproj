<template>
    <div class="about--us">
        <HeaderMain/>
        <div class="main_content">

            <header>
                <h1><span class="title_main"/>The MEL Team</h1>
            </header>

            <div class="person_presentation">
                <img src="../assets/matteo.jpg" alt="picture" class = "img-person" />
                <div class="text_with_title">
                    <h3><i>M</i> for Matteo PORTE-PARTARRIEU</h3>
                    <p>
                        Matteo is the first one of our 3 members. During this project, all of us worked a lot together and did nearly everything 
                        as a group, but Matteo worked a little bit more on the part concerning router solving for reloading pages.
                        He loves Clash Royal, Working out and Mangas. After an french scientific 
                        baccalaureate, he went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <img src="../assets/elliot.jpg" alt="picture" class = "img-person"/>
                <div class="text_with_title">
                    <h3><i>E</i> for Elliot Touratier</h3>
                    <p>
                        Elliot is the second one of our 3 members. As explained for Theo, most of the work was done together throughout 
                        this project, but Elliot worked a little bit more on the part concerning the responsive design to adapt our website.
                        He loves Clash royal and parties. After an international scientific 
                        baccalaureate, he also went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <img src="../assets/louis.jpg" alt="picture" />
                <div class="text_with_title">
                    <h3><i>L</i> for Louis Rigault</h3>
                    <p>
                        Louis is the last one of our 3 members. As explained for the others, most of the work was done together throughout 
                        this project, but Louis worked a little bit more on the part concerning the navigation bar and footers.
                        He loves tennis, Paris Saint-Germain, Fortnite and KR39. After an french scientific 
                        baccalaureate, he also went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <img src="../assets/louis.jpg" alt="picture" />
                <div class="text_with_title">
                    <h3><i>M</i> for Manuel Muratet</h3>
                    <p>
                        Manuel is the last one of our 3 members. As explained for the others, most of the work was done together throughout 
                        this project, but Manuel worked a little bit more on the part concerning the footer and the about us page.
                        He loves tennis, Paris Saint-Germain, Fortnite and KR39. After an french scientific 
                        baccalaureate, he also went to Efrei Paris where he is still currently studying in M1. 
                        <br/><br/>
                    </p>
                </div>
            </div>

            <div class="person_presentation">
                <a href="mailto:louisrigaultpro@gmail.com"><img src="../assets/mail.png" alt="email" class="email_photo" style="max-height:165px"/></a>
                <div class="text_with_title">
                    <h3>Contact us</h3>
                    <p>
                        Don't hesitate to contact us by mail, by clicking on the email logo on your left.
                        <br/>
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