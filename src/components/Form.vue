<template>

    <form id="burger-form" method="POST" @submit.prevent="inserirPedido" class="container mt-4 card mb-5" style="width:700px;">
        <div class="mb-3">
            <label for="nome" class="form-label mt-2"><b>Nome do cliente:</b></label>
            <input type="text" id="nome" name="nome" v-model="nome" class="form-control" placeholder="Digite o seu nome" required>
        </div>
        <div class="mb-3">
            <label for="pao" class="form-label mt-2"><b>Escolha o pão:</b></label>
            <select name="pao" id="pao" v-model="pao" class="form-select" required>
                <option value="">Selecione o seu pão</option>
                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="carne" class="form-label"><b>Escolha a carne do seu Burger:</b></label>
            <select name="carne" id="carne" v-model="carne" class="form-select" required>
                <option value="">Selecione o tipo de carne</option>
                <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
            </select>
        </div>
        <div id="opcionais-container" class="mb-3">
            <label id="opcionais-title" class="form-label"><b>Selecione os opcionais:</b></label>
            <div class="form-check" v-for="opcional in opcionaisdata" :key="opcional.id">
                <input type="checkbox" class="form-check-input" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                <label class="form-check-label">{{ opcional.tipo }}</label>
            </div>
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary" style="background-color: #222;color:#fcba03;border: solid 1px #fcba03;">Criar meu Burger!</button>
        </div>
    </form>


</template>

<script>


export default {
    name: 'Form',

    data(){
        return{
            paes: null,
            carnes: null,
            opcionaisdata: null,
            nome: null,
            pao: null,
            carne: null,
            opcionais: [],
            status: "Solicitado",
            msg: null

        }


    },
    methods: {
        async getIngredientes(){
        const req= await  fetch("http://localhost:3000/ingredientes");
        const data= await req.json();

        this.paes=data.paes;
        this.opcionaisdata = data.opcionais
        this.carnes=data.carnes

        },
        async inserirPedido(e){
            e.preventDefault();
            const data = {
                nome: this.nome,
                carne: this.carne,
                pao:this.pao,
                opcionais: Array.from(this.opcionais),
                status: "Solicitado"


            }
            const dataJson = JSON.stringify(data);

            const req = await fetch('http://localhost:3000/burgers', {
                method:"POST",
                headers: { "Content-Type" : "application/json" },
                body: dataJson
            });
            const res = await req.json()


        }


    },
mounted() {
        this.getIngredientes();
}
}

</script>

<style scoped>
/*#burger-form {*/
/*    max-width: 400px;*/
/*    margin: 0 auto;*/
/*}*/

/*.input-container {*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    margin-bottom: 20px;*/
/*    !*align-items:center;*!*/
/*}*/
/*.input-button{*/
/*    align-items:center;*/
/*    margin-bottom:10px;*/
/*}*/

/*label {*/
/*    font-weight: bold;*/
/*    margin-bottom: 15px;*/
/*     align-items:center;*/
/*    color: #222;;*/
/*    padding: 5px 10px;*/
/*    border-left: 4px solid #fcba03;*/
/*}*/

/*input, select {*/
/*    padding: 5px 10px;*/
/*    width: 300px;*/
/*}*/

/*#opcionais-container {*/
/*    flex-direction: row;*/
/*    flex-wrap: wrap;*/

/*}*/

/*#opcionais-title {*/
/*    width: 100%;*/
/*}*/

/*.checkbox-container {*/
/*    display: flex;*/
/*    align-items: flex-start;*/
/*    width: 50%;*/
/*    margin-bottom: 20px;*/
/*}*/

/*.checkbox-container span,*/
/*.checkbox-container input {*/
/*    width: auto;*/
/*}*/

/*.checkbox-container span {*/
/*    margin-left: 6px;*/
/*    font-weight: bold;*/
/*}*/

/*.submit-btn {*/
/*    background-color: #222;*/
/*    color:#fcba03;*/
/*    font-weight: bold;*/
/*    border: 2px solid #222;*/
/*    padding: 10px;*/
/*    font-size: 16px;*/
/*    margin: 0 auto;*/
/*    cursor: pointer;*/
/*    transition: .5s;*/
/*}*/

/*.submit-btn:hover {*/
/*    background-color: transparent;*/
/*    color: #222;*/
/*}*/

</style>