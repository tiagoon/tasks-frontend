<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <div v-if="!loading" class="row mt-4">
                <div 
                    v-for="task in tasks"
                    v-bind:key="task.id"
                    class="col-md-4 mb-3">
                    <div class="card" style="min-height: 80px;">
                        <div class="mt-2">{{task.title}}</div>
                        <div v-if="task.completed == 0" class="d-flex mt-2 mb-2" style="margin: 0 auto">
                            <div class="me-2">
                                <button
                                    @click="finishTask(task.id)"
                                    type="button" 
                                    class="btn btn-outline-success btn-sm">
                                    Concluir</button>
                            </div>
                            
                            <div class="me-2">
                                <button 
                                    @click="updateTask(task.id)"
                                    type="button" 
                                    class="btn btn-outline-secondary btn-sm">
                                    Editar</button>
                            </div>
                            
                            <div class="me-2">
                                <button
                                    @click="removeTask(task.id)"
                                    type="button" 
                                    class="btn btn-outline-danger btn-sm">
                                    Excluir</button>
                            </div>
                        </div>
                        <div v-else class="mt-2">
                            <span class="badge rounded-pill text-bg-success">Concluída em {{dateFormat(task.updated_at)}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <b-spinner 
                v-else
                class="mx-auto mt-5"
                type="grow"
                variant="primary" />
                
            <div class="row">
                <router-link to="/tasks/create" class="btn btn-primary btn-add">
                    <span class="material-icons-outlined">add</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import dayjs from 'dayjs'

export default {
    name: 'TasksIndexPage',
    components: {
        NavbarComponent
    },
    created () {
        document.title = "Minhas Tarefas | " + process.env.VUE_APP_NAME;
    },
    data() {
        return {
            tasks: [],
            loading: false
        }
    },

    async mounted() {
        this.loading = true
        await this.listTasks()
        this.loading = false
    },
    
    methods: {
        async listTasks() {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                const response = await this.$axios.get('/tasks', config);
                this.tasks = response.data
            } catch (error) {
                console.log(error)
            }
        },

        dateFormat(date) {
            return dayjs(date).format('DD/MM/YYYY')
        },

        async finishTask(taskId) {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                this.loading = true
                await this.$axios.put(
                    '/tasks/' + taskId, 
                    {completed: 1}, 
                    config
                )
                const index = this.tasks.findIndex(prop => prop.id === taskId)
                this.tasks[index].completed = "1"
                this.tasks[index].updated_at = dayjs().format('YYYY-MM-DD HH:mm:ss')
                this.loading = false
                
            } catch (error) {
                this.loading = false
                this.messageError = error.response.data.message
            }
        },
        
        updateTask(id) {
            const task = this.tasks.find(task => task.id === id)
            this.$router.push({ name: 'TasksEditPage', params: { id: task.id, title: task.title } })
        },

        async removeTask(taskId) {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }

            try {
                this.loading = true
                await this.$axios.delete('/tasks/' + taskId, config)
                const index = this.tasks.findIndex(prop => prop.id === taskId)
                this.tasks.splice(index,1)
                this.loading = false
                
            } catch (error) {
                this.loading = false
                this.messageError = error.response.data.message
            }
        },

    }
}
</script>