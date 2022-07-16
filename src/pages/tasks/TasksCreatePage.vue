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
                                v-model="task.title" 
                                placeholder="Título da tarefa">
                        </div>
                        
                        <div 
                            v-if="messageError.length>0" 
                            class="badge badge-pill bg-danger mb-3">
                            {{messageError}}</div>

                        <div class="row">
                            <div class="col-md-12">
                                <button 
                                    v-if="!loading"
                                    @click="taskCreate()"
                                    type="button" 
                                    class="btn btn-primary btn-block">
                                    Cadastrar</button>
                                <b-spinner 
                                    v-else
                                    class="mx-auto"
                                    type="grow"
                                    variant="primary" />
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
            task: {
                title: '',
            },
            messageError: '',
            loading: false
        }
    },
    methods: {
        async taskCreate() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                this.loading = true
                await this.$axios.post('/tasks', this.task, config)
                this.loading = false
                this.$router.push('/tasks')

            } catch (error) {
                this.loading = false
                this.messageError = error.response.data.message
            }
        },
    }
}
</script>