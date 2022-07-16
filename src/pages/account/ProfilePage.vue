<template>
    <div>
        <NavbarComponent />
        <div class="row">
            <div class="col-md-8 mx-auto card mt-4">
                <div class="card-body">
                    <h5 class="card-title">Editar Perfil</h5>
                    <p class="mb-4">{{user.email}}</p>
                    <input 
                        type="text" 
                        class="form-control mb-3 mt-3"
                        id="title" 
                        v-model="user.name" 
                        placeholder="Seu Nome">

                    <input 
                        type="text" 
                        class="form-control mb-3 mt-3"
                        id="title" 
                        v-model="user.phone" 
                        placeholder="Telefone">
                    
                    <div 
                        v-if="messageError.length>0" 
                        class="badge badge-pill bg-danger mb-3">
                        {{messageError}}</div>

                    <div v-if="!loading">
                        <button 
                            @click="updateProfile()"
                            type="button" 
                            class="btn btn-primary me-2">
                            Atualizar dados</button>
                        
                        <button 
                            @click="accountDelete()"
                            type="button" 
                            class="btn text-danger">
                            Excluir Conta</button>
                    </div>
                    <b-spinner 
                        v-else
                        class="mx-auto"
                        type="grow"
                        variant="primary" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent';

export default {
    name: 'ProfilePage',
    components: {
        NavbarComponent
    },
    data() {
        return {
            user: {
                name: '',
                phone: '',
                email: ''
            },
            messageError: '',
            loading: false
        }
    },

    created () {
        document.title = "Minha Conta | " + process.env.VUE_APP_NAME;
        this.user = JSON.parse(localStorage.getItem('user'));
    },
    
    methods: {
        async updateProfile() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                this.loading = true;
                await this.$axios.put('/accounts', this.user, config);
                localStorage.setItem('user', JSON.stringify(this.user));
                this.loading = false;
                this.$router.push('/tasks');
            } catch (error) {
                console.log(error)
                this.messageError = error.response.data.message
                this.loading = false;
            }
        },

        async accountDelete() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                this.loading = true
                await this.$axios.delete('/accounts', config)
                this.loading = false
                this.$router.push('/')
            } catch (error) {
                this.loading = false
                this.messageError = error.response.data.message
            }
        }
    },
}
</script>