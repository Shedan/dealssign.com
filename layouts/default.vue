<template>
  <div>
    <Navbar />
    <main>
      <div class="container-fluid">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
 
 components : {
    Navbar
  },
   computed: {
      fas () {
         return fas
      },
      faGithub () {
         return faGithub
      }
    },
}
</script>

<style>
.container-fluid{
  padding: 0;
  margin: 0;
}
</style>
