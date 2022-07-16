<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto card mt-4">
                    <div class="card-body">
                        <h5 class="card-title">Editar Tarefa</h5>
                        <div class="form-group mb-3 mt-3">
                            <input 
                                type="text" 
                                class="form-control" 
                                id="title" 
                                v-model="task.title" 
                                placeholder="Título da tarefa">
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button 
                                    @click="updateTask()"
                                    type="button" 
                                    class="btn btn-primary btn-block">
                                    Atualizar</button>
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
    data() {
        return {
            task: {
                title: '',
            },
            messageError: '',
        }
    },
    
    created () {
        document.title = "Editar Tarefa | " + process.env.VUE_APP_NAME;
        this.task.title = this.$route.params.title;
    },
    
    methods: {
        async updateTask() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                await this.$axios.put('/tasks/' + this.$route.params.id, this.task, config);
                this.$router.push('/tasks');
            } catch (error) {
                console.log(error)
                this.messageError = error.response.data.message
            }
        },
    }
}
</script>