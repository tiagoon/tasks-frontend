<template>
    <div>
        <nav class="navbar sticky-top navbar-expand-lg bg-light">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/tasks">
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" width="30" height="30">
                    Tarefas
                </router-link>
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
                    <a class="nav-link btn btn-link">Sair</a>
                </div>
                </div>
            </div>
            </nav>
        <div class="container">
            <div class="row mt-4">
                <div 
                    v-for="task in tasks"
                    v-bind:key="task.id"
                    class="col-md-4 mb-3">
                    <div class="card bg-light">
                        <div class="mt-2">{{task.title}}</div>
                        <div class="d-flex mt-2 mb-2" style="margin: 0 auto">
                            <div class="me-2">
                                <button 
                                    type="button" 
                                    class="btn btn-outline-success btn-sm"
                                    style="padding-y: .25rem; padding-x: .2rem; font-size: .75rem;">
                                    Concluir</button>
                            </div>
                            
                            <div class="me-2">
                                <button 
                                    type="button" 
                                    class="btn btn-outline-secondary btn-sm"
                                    style="padding-y: .25rem; padding-x: .2rem; font-size: .75rem;">
                                    Atualizar</button>
                            </div>
                            
                            <div class="me-2">
                                <button 
                                    type="button" 
                                    class="btn btn-outline-danger btn-sm"
                                    style="padding-y: .25rem; padding-x: .2rem; font-size: .75rem;">
                                    Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TasksIndexPage',
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Tarefa 1',
                    done: false
                },
                {
                    id: 2,
                    title: 'Tarefa 2',
                    done: true
                },
                {
                    id: 1,
                    title: 'Tarefa 3',
                    done: false
                }
            ]
        }
    },
    methods: {
        //
    }
}
</script>