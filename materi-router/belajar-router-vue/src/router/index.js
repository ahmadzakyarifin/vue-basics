import { createRouter, createWebHistory } from 'vue-router'
import HomeViews from '../views/HomeViews.vue'
import AboutViews from '../views/AboutViews.vue'
import ContactViews from '../views/ContactViews.vue'
import StudentViews from '../views/StudentViews.vue'
import NotFoundViews from '../views/NotFoundViews.vue'
import StudentIndex from '../views/student/StudentIndex.vue'
import StudentDetail from '../views/student/StudentDetails.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeViews
        },
        {
            path: "/about",
            name: "about",
            component: AboutViews
        },
        {
            path: "/contact",
            name: "contact",
            component: ContactViews
        },
        // =========================================
        //  VERSI LAMA (Sebelum Nested Route)
        // =========================================
        // {
        //     // Tambahkan (\\d+) setelah :id
        //     // artinya: "hanya terima jika isinya digit/angka"
        //     path: "/student/:id(\\d+)",
        //     name: "student",
        //     component: StudentViews
        // },

        // =========================================
        //  VERSI BARU (Nested Route)
        // =========================================
        {
            path: "/student",
            name: "student",
            component: StudentViews,
            children: [
                {
                    path: "",
                    name: "student-index",
                    component: StudentIndex
                },
                {
                    path: ":id(\\d+)",
                    name: "student-detail",
                    component: StudentDetail
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundViews
        }
    ]
})

export default router