<template>
    <div class="auth container">
        <div class="row justify-content-center">
            <div class="col-lg-5 align-self-center">
        <div class="card">
            <h4 class="title">Acessar Tarefas</h4>
            <div class="subtitle">
                <p>Faça seu login para acessar suas tarefas.</p>
            </div>
            <div class="form">
                <b-form-input 
                    v-model="selectedText" 
                    class="mb-3"
                    placeholder="Seu e-mail" />

                <b-form-input 
                    v-model="selectedText" 
                    class="mb-3"
                    placeholder="Sua senha" />
                
                <div class="d-grid gap-2">
                    <b-button 
                        @click="login"
                        block
                        variant="primary">Entrar
                        </b-button>
                </div>
            </div>
            <div class="or-option">ou</div>
            <div class="form d-grid gap-2">
                <b-button 
                    @click="register"
                    block
                    variant="outline-primary">Cadastrar
                </b-button>
            </div>
        </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    methods: {
        login() {
            this.$router.push('/tasks');
        },
        register() {
            this.$router.push('/register');
        }
    },
}
</script>

<style lang="scss" src="@/assets/scss/auth.scss" scoped />