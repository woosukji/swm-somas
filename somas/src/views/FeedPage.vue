<template>
  <div class="main d-flex justify-center align-center">
    <div class="main_selection d-flex flex-grow-1 flex-wrap justify-center">
      <v-btn to="/signup">Signup Page</v-btn>
      <v-btn to="/login">Login Page</v-btn>
      <v-btn to="/user/testUser123">User Page</v-btn>
      <v-btn to="/post/testPost123">Post Page</v-btn>
      <v-btn to="/create">Create Post Page</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedPage',
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.main {
  height: 100%;
}
</style>
