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
                    v-model="user.email" 
                    class="mb-3"
                    placeholder="Seu e-mail" />

                <b-form-input 
                    v-model="user.password" 
                    class="mb-3"
                    type="password"
                    placeholder="Sua senha" />
                
                <div v-if="messageError.length>0" class="badge badge-pill bg-danger mb-3">{{messageError}}</div>

                <div class="d-grid gap-2">
                    <b-button 
                        v-if="!loading"
                        @click="login"
                        block
                        variant="primary">Entrar
                        </b-button>
                    <b-spinner 
                        v-else
                        class="mx-auto"
                        type="grow"
                        variant="primary" />
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
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            messageError: '',
            loading: false
        }
    },

    methods: {
        async login() {
            try {
                this.loading = true
                const response = await this.$axios.post('/auth/login', this.user);
                this.loading = false

                this.messageError = ''
                
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                
                this.$router.push('/tasks')
                
            } catch (error) {
                this.loading = false
                this.messageError = error.response.data.error
            }
        },

        async register() {
            this.$router.push('/register');
        }
    },
}
</script>

<style lang="scss" src="@/assets/scss/auth.scss" scoped />