<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 align-self-center">
                <span class="material-icons-outlined">error_outline</span>
                <h2 class="mb-3">Ops, não encontramos esta página.</h2>
                <b-button 
                    @click="home"
                    block
                    variant="link">
                    Ir para o início
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFoundPage',
    methods: {
        home() {
            this.$router.push('/');
        }
    },
}
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    .material-icons-outlined {
        color: #4d4d4d;
        font-size: 100px;
    }
</style>