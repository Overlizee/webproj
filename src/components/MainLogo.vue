<template>
    <div class="MainLogo">
        <div class="main_logo">
            <router-link style="text-decoration: none; color: inherit;" :to="{path: '/'}">
                <img src="../assets/FifaLogo.png" alt="" srcset="">
            </router-link>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss">
.MainLogo{
    .main_logo{
        &:hover{
            transform: scale(1.1);
        }
    }
    
    img{
        width: 200px;
    }
}
</style>