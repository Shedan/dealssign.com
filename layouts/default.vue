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


export default {
  components : {
    Navbar
  }
}
</script>

<style>
.container-fluid{
  padding: 0;

}
</style>
