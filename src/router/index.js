import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import DemoView from '../views/Demo.vue'
import DocumentsView from '../views/Documents.vue'
import MonitoringView from '../views/Monitoring.vue'
import PlanningView from '../views/Planning.vue'
import LoginView from '../views/Login.vue'
import DashboardView from '../views/Dashboard.vue'
import CalendarView from '../views/Calendar.vue'
import TasksView from '../views/Tasks.vue'
import ProjectsView from '../views/Projects.vue'
import ReportsView from '../views/Reports.vue'
import SettingsView from '../views/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView
    },
    {
      path: '/documents',
      name: 'documents',
      component: DocumentsView
    },
    {
      path: '/monitoring',
      name: 'monitoring',
      component: MonitoringView
    },
    {
      path: '/planning',
      name: 'planning',
      component: PlanningView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router
