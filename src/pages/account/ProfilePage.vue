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
                name: 'Tiago Oliveira',
                phone: '(79) 99999-9999',
                email: 'tiago.on@live.com'
            }
        }
    },
    created () {
        document.title = "Minha Conta | " + process.env.VUE_APP_NAME;
    },
    methods: {
        updateProfile() {
            this.$router.push('/tasks');
        },
        accountDelete() {
            this.$router.push('/');
        }
    },
}
</script>