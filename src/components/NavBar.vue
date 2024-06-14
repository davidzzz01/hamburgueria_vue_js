<template>
    <nav  class="navbar navbar-expand-lg " style="height: 80px;  background-color:#995722;">
        <div class="container-fluid justify-content-end">
            <router-link to="/" class="navbar-brand">
                <img src="/img/logo.png"  id="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link md-3" style="color:#FCBA03;font-size:22px"><b>Home</b></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/pedidos" class="nav-link mr-3" style="color:#FCBA03;font-size:22px"><b>Pedidos</b></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
<router-view/>

</template>

<script>

export default{
name: "NavBar"
}

</script>

<style scoped>
img{
    width:70px;
    margin:auto;

}
router-link{
    color:yellow;
}



</style>