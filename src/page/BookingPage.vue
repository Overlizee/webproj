<template>
  <div class="register">
        <HeaderMain/>
        <h1>Ticket reservation</h1>

        <form class="formm">
            <select required>
                <option class="invisible" value="">Select Number of Tickets</option>
                <option value="1">1 ticket</option>
                <option value="2">2 tickets</option>   
                <option value="3">3 tickets</option>
                <option value="4">4 tickets</option>   
            </select>

            <select required>
                <option value="">Select Seat Category</option>
                <option value="1">Category 1 tickets</option>
                <option value="2">Category 2 tickets</option>   
                <option value="3">Category 3 tickets</option>
                <option value="4">VIP tickets</option>   
            </select>
            <input type="submit" value="Buy tickets">
        </form>
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
    .register{
        margin-bottom: 5%;

        h1{
            color: #962b46;
            text-align: center;
        }
        .formm{
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            select{
                width: 50%;
                margin: 0.5%;
                color: #962b46;
                border-color: #962b46;
            }

            input{ 
                margin: 2%;
                width: 25%;
                width: 25%;
            }
        }
        
        

    }

</style>