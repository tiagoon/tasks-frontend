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
                    v-model="user.name" 
                    class="mb-3"
                    placeholder="Nome" />

                <b-form-input 
                    v-model="user.phone" 
                    v-maska="'(##)#####-####'"
                    class="mb-3"
                    placeholder="Telefone" />

                <b-form-input 
                    v-model="user.email" 
                    class="mb-3"
                    type="email"
                    placeholder="E-mail" />

                <b-form-input 
                    v-model="user.password" 
                    class="mb-3"
                    type="password"
                    placeholder="Crie uma senha" />
                
                <div v-if="messageError.length>0" class="badge badge-pill bg-danger mb-3">{{messageError}}</div>

                <div class="d-grid gap-2">
                    <b-button 
                        v-if="!loading"
                        @click="register"
                        block
                        variant="primary">Cadastrar
                        </b-button>
                    <b-spinner 
                        v-else
                        class="mx-auto"
                        type="grow"
                        variant="primary" />
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
import { maska } from 'maska'

export default {
    name: 'RegisterPage',
    directives: { maska },
    data() {
        return {
            user: {
                name: '',
                email: '',
                phone: '',
                password: ''
            },
            messageError: '',
            loading: false
        }
    },

    methods: {
        login() {
            this.$router.push('/');
        },
        
        async register() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                this.loading = true
                const response = await this.$axios.post('/auth/register', this.user, config)
                
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))

                this.loading = false
                this.$router.push('/tasks')

            } catch (error) {
                this.loading = false
                this.messageError = error.response.data.message
            }
        }
    },
}
</script>

<style lang="scss" src="@/assets/scss/auth.scss" scoped />