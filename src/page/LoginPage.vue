<template>
    <div class="register_page">
        <HeaderMain/>
        <div class="register">
            <h1>Login to your account</h1>
            <form>
                <label for="username">
                    <i class="fas fa-user"></i>
                </label>
                <input type="text" name="username" placeholder="Username" id="username" required>
                <label for="password">
                    <i class="fas fa-lock"></i>
                </label>
                <input type="password" name="password" placeholder="Password" id="password" required>
                <input type="submit" value="Login">
            </form>
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

    .register_page{
        .register{
            form{
                filter: drop-shadow(10px 15px 6px #962b46);
                padding: 10px;
                background-color: #962b46;
                border:3px solid #631c2e; 
                border-radius: 15px;
                width: 100%;
                max-width: 1000px;
                display: flex;
                flex-direction: column;
                text-align: center;
                align-content: stretch;
                margin-left: auto;
                margin-right: auto;

                    ::placeholder {
                        color: white;
                        opacity: 1;
                    }

                input{
                    border:2px solid; 
                    border-radius: 10px;
                    border-color: #631c2e;
                    box-shadow: 5px 5px 7px #945c6a;
                    background-color: #945c6a;
                    padding: 10px 60px;
                    margin: 15px ;
                    color: white;
                    text-decoration: none;
                    text-align: center;
                }
                
            }

        }
    }
</style>