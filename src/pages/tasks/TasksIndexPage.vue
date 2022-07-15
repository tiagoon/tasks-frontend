<template>
    <div>
        <NavbarComponent />
        <div class="container">
            <div class="row mt-4">
                <div 
                    v-for="task in tasks"
                    v-bind:key="task.id"
                    class="col-md-4 mb-3">
                    <div class="card" style="min-height: 80px;">
                        <div class="mt-2">{{task.title}}</div>
                        <div v-if="!task.completed" class="d-flex mt-2 mb-2" style="margin: 0 auto">
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
            tasks: [
                {
                    id: 1,
                    title: 'Tarefa 1',
                    completed: false,
                    updated_at: "2022-07-14T17:28:14.000000Z"
                },
                {
                    id: 2,
                    title: 'Tarefa 2',
                    completed: true,
                    updated_at: "2022-07-14T17:28:14.000000Z"
                },
                {
                    id: 1,
                    title: 'Tarefa 3',
                    completed: false,
                    updated_at: "2022-07-14T17:28:14.000000Z"
                }
            ]
        }
    },
    methods: {
        dateFormat(date) {
            return dayjs(date).format('DD/MM/YYYY')
        },

        finishTask(taskId) {
            const index = this.tasks.findIndex(prop => prop.id === taskId)
            this.tasks.splice(index,1)
        },
        
        updateTask(id) {
            const task = this.tasks.find(task => task.id === id)
            this.$router.push({ name: 'TasksUpdatePage', params: { id: task.id } })
        },

        removeTask(taskId) {
            const index = this.tasks.findIndex(prop => prop.id === taskId)
            this.tasks.splice(index,1)
        },

    }
}
</script>