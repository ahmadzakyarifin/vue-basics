<template>
    <div class="sidebar">
        <h2>Menu Dashboard</h2>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard-home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard-create' }">Create Student</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard-update' }">Update Student</router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.sidebar {
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 10px 0;
}

a {
    color: rgb(235, 235, 239);
}

a:hover {
    color: darkblue;
}
</style>