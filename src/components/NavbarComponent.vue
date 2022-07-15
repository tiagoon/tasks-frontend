<template>
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
        <div class="container-fluid">
            <div class="navbar-brand" to="/tasks">
                {{appName}}
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <router-link to="/tasks" class="nav-link active" aria-current="page">Minhas Tarefas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/profile" class="nav-link">Atualizar Perfil</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <a @click="logout()" class="nav-link btn btn-link">Sair</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        return {
            appName: ''
        }
    },
    created() {
        this.appName = process.env.VUE_APP_NAME;
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    },
}
</script>