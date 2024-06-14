<template>
<NavBar  />
<Form/>
<Footer/>
</template>

<style>
*{
    font-family:"Nunito";
    padding:0;
    margin:0;
    box-sizing:border-box;
}

</style>
<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
    components: {NavBar, Footer},
    data(){
        return{

        }

    }

}
</script>