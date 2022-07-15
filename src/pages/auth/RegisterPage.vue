<template>
    <div class="auth container">
        <div class="row justify-content-center">
            <div class="col-lg-5 align-self-center">
        <div class="card">
            <h4 class="title">Cadastrar Agora</h4>
            <div class="subtitle">
                <p>Crie uma conta para começar <br>organizar suas tarefas.</p>
            </div>
            <div class="form">
                <b-form-input 
                    v-model="selectedText" 
                    class="mb-3"
                    placeholder="Nome" />

                <b-form-input 
                    v-model="selectedText" 
                    class="mb-3"
                    placeholder="E-mail" />

                <b-form-input 
                    v-model="selectedText" 
                    class="mb-3"
                    placeholder="Telefone" />

                <b-form-input 
                    v-model="selectedText" 
                    class="mb-3"
                    placeholder="Crie uma senha" />
                
                <div class="d-grid gap-2">
                    <b-button 
                        @click="register"
                        block
                        variant="primary">Cadastrar
                        </b-button>
                </div>
            </div>
            <div class="or-option">ou</div>
            <b-button 
                    @click="login"
                    block
                    variant="link">
                    voltar para o login
                </b-button>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage',
    methods: {
        login() {
            this.$router.push('/');
        },
        register() {
            this.$router.push('/tasks');
        }
    },
}
</script>

<style lang="scss" src="@/assets/scss/auth.scss" scoped />