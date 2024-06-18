<template>
    <div class="container mb-4">
        <div v-if="burgers && burgers.length > 0">
            <table class="table table-striped table-hover">
                <thead>
                <tr >
                    <th scope="col">#</th>
                    <th scope="col">Cliente</th>
                    <th scope="col">Pão</th>
                    <th scope="col">Carne</th>
                    <th scope="col">Opcionais</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="burger in burgers" :key="burger.id">
                    <td>{{ burger.id }}</td>
                    <td>{{ burger.nome }}</td>
                    <td>{{ burger.pao }}</td>
                    <td>{{ burger.carne }}</td>
                    <td>
                        <span v-if="burger.opcionais.length === 0">-</span>
                        <template v-else>
                            <template v-if="burger.opcionais.length <= 3">
                                {{ burger.opcionais.join(', ') }}
                            </template>
                            <template v-else>
                                {{ burger.opcionais.slice(0, 3).join(', ') }}...
                            </template>
                        </template>
                    </td>
                    <td>
                        <select class="form-select" @change="updateBurger($event, burger.id)">
                            <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="burger.status == s.tipo">{{ s.tipo }}</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn btn-danger" style="background-color: #222;color:#fcba03;border: solid 1px #fcba03;" @click="deleteBurger(burger.id)">Excluir</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <h2 class="text-center">Não há pedidos no momento!</h2>
        </div>
    </div>



</template>
<script>
export default {
    name: "Dashboard",
    data() {
        return {
            burgers: null,
            burger_id: null,
            status: []
        }
    },
    methods: {
        async getPedidos() {
            const req = await fetch('http://localhost:3000/burgers')

            const data = await req.json()

            this.burgers = data

            // Resgata os status de pedidos
            this.getStatus()

        },
        async getStatus() {

            const req = await fetch('http://localhost:3000/status')

            const data = await req.json()

            this.status = data

        },
        async deleteBurger(id) {

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "DELETE"
            });

            const res = await req.json()

            this.getPedidos()

        },
        async updateBurger(event, id) {

            const option = event.target.value;

            const dataJson = JSON.stringify({status: option});

            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: "PATCH",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });

            const res = await req.json()

            console.log(res)

        }
    },
    mounted () {
        this.getPedidos()
    }
}
</script>

<style scoped>


</style>