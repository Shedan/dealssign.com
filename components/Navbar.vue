<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt="" width="31" height="31"></a>
  

  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <nuxt-link exact class="nav-link" active-class="active" to="/">Головна</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" active-class="active" to="/partners">Партнери</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link class="nav-link" active-class="active" to="/contacts">Контакти</nuxt-link>
      </li>
    
    </ul>

  </div>
</nav>
</template>