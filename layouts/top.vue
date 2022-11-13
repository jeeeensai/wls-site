<template>
  <div>
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ name: 'index' }">
          <img
            src="logo.png"
            alt="Original W.L.S"
            class="logo"
          >
          <p class="logo_charcter">
            Original W.L.S
          </p>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="router-link" :to="{ name: 'concept' }" class="burger_menu">
          concept
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'picture' }" class="burger_menu">
          picture
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'schedule' }" class="burger_menu">
          schedule
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'game' }" class="burger_menu">
          game
        </b-navbar-item>
        <!-- <b-navbar-item tag="router-link" :to="{ name: 'game2' }" class="burger_menu">
          game2
        </b-navbar-item> -->
        <b-navbar-item tag="router-link" :to="{ name: 'inquiry' }" class="burger_menu">
          Q&A
        </b-navbar-item>
      </template>
    </b-navbar>
    <div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'home' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style>
.burger_menu {
  text-align:center;
}
.logo_charcter{
  font-size:larger;
  font-weight:bold;
}
::deep .is-fluid{
  padding-right:0px;
  padding-left:0px;
}
.logo{
  max-height:50px !important;
}
</style>
