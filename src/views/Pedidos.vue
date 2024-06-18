<template>
    <Banner/>
    <div>
        <div class="main-container">
            <h1 class="text-center mb-4 mt-4">Gerenciar pedidos:</h1>
            <Dashboard />
        </div>
    </div>
</template>

<script>
import Dashboard from '../components/Dashboard'
import Banner from "@/components/Banner";

export default {
    name: 'Pedidos',
    components: {
        Banner,
        Dashboard
    }
}
</script>