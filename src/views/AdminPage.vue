<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h1>Admin Page</h1>
            
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/">Faculty</router-link>
            <router-link class="btn btn-primary" to="/add">Add Faculty</router-link>
            <router-link class="btn btn-primary" to="/search">Search Faculty</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'AdminPage',
        data() {
            return {};
        }
    }
</script>

<style scoped>
    .site-info {
  color: blue;
  margin-bottom: 20px;
}
 
.btn-primary {
  margin-right: 5px;
}
 
.container-fluid {
  text-align: center;
}
</style>