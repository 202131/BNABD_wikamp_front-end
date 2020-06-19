<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Faculty List</h4>
            <ul>
                <li v-for="(faculty, index) in faculty" :key="index">
                    <router-link :to="{
                            name: 'faculty-list',
                            params: { faculty: faculty, id: customer.id }
                        }">
                            {{faculty.faculty_name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "faculty-list",
  data() {
    return {
      faculty: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    retrievefaculty() {
      http
        .get("/faculty")
        .then(response => {
          this.faculty = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrievefaculty();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.retrievefaculty();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 450px;
  margin: auto;
}
</style>