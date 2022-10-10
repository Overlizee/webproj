<template>
    <router-link style="text-decoration: none; color: inherit;" :to="{path: '/aboutus'}">
        <div class="FooterMain">
                <div class="title">
                    <h1>About Us</h1>
                </div>
        </div>
    </router-link>
</template>

<script>
</script>


<style lang="scss">
.FooterMain{
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        transform: scale(1.2);
    }
    .title{
        color: #962b46;
        text-align: center;
        border: solid #962b46;
        background-color: #dcdcdc;
        margin: 5%;
        width: 25%;
        border-radius: 50px 15px;
    }

}
</style>