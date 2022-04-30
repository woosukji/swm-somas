<template>
  <div class="main d-flex justify-center align-center">
    <div class="main_selection d-flex flex-grow-1 flex-wrap justify-center">
      <p>This is post page for post "{{ postId }}"</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  data() {
    return {
      postId: this.$route.params.postId,
    };
  },
  computed: {},
};
</script>

<style scoped lang="scss">
.main {
  height: 100%;
}
</style>
