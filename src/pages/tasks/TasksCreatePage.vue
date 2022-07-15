<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto card mt-4">
                    <div class="card-body">
                        <h5 class="card-title">Criando uma Tarefa</h5>
                        <div class="form-group mb-3 mt-3">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="title" 
                                v-model="title" 
                                placeholder="Título da tarefa">
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button 
                                    @click="taskCreate()"
                                    type="button" 
                                    class="btn btn-primary btn-block">
                                    Cadastrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent';

export default {
    name: 'TasksCreatePage',
    components: {
        NavbarComponent
    },
    created () {
        document.title = "Criar Tarefa | " + process.env.VUE_APP_NAME;
    },
    data() {
        return {
            //
        }
    },
    methods: {
        taskCreate() {
            this.$router.push('/tasks');
        },
    }
}
</script>