import { createWebHistory, createRouter } from "vue-router";

import LoginPage from '@/pages/auth/LoginPage'
import RegisterPage from '@/pages/auth/RegisterPage'
import TasksIndexPage from '@/pages/tasks/TasksIndexPage'
import TasksCreatePage from '@/pages/tasks/TasksCreatePage'
import TasksUpdatePage from '@/pages/tasks/TasksUpdatePage'
import ProfilePage from '@/pages/account/ProfilePage'
import NotFoundPage from '@/pages/customs/NotFoundPage'

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "RegisterPage",
    component: RegisterPage,
  },
  {
    path: "/tasks",
    name: "TasksIndexPage",
    component: TasksIndexPage,
  },
  {
    path: "/tasks/create",
    name: "TasksCreatePage",
    component: TasksCreatePage,
  },
  {
    path: "/tasks/:id",
    name: "TasksUpdatePage",
    component: TasksUpdatePage,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;