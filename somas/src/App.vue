<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="SWM Logo"
            class="shrink mr-2"
            contain
            src="@/assets/SWM_Logos_White.png"
            transition="scale-transition"
            width="100"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.swmaestro.org/sw/main/main.do"
        target="_blank"
        text
      >
        <span class="mr-2">SWM Homepage</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main id="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#main {
  justify-content: center;
  > div {
    background-color: gray;
    display: flex;
    flex: 0 1 480px;
    justify-content: center;
  }
}
</style>
