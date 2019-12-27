<template>
<section>
  <div class="jumbotron">
<div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
  <div class="col-md-5 p-lg-5 mx-auto my-5">
    <div class="display-4"><img src="@/assets/deals.png" alt="" srcset=""></div>
    <p></p>
    <div class="btn btn-primary btn-lg" href="#">СПРОБУВАТИ БЕЗКОШТОВНО</div>
  </div>
  <div class="product-device shadow-sm d-none d-md-block"></div>
  <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>
  </div>
  <div class="container-fluid bgclass">
    <div class="text-second text-center">
      Ваш документообіг в декілька кліків
    </div>
    <div class="container">
    <div class="row">
    <div class="col text-center">
      <img src="@/static/block2-300x200.png" alt="" srcset="">
    </div>
    <div class="col text-center">
      <div class="list-group">
  <button type="button" class="list-group-item list-group-item-action">
    ПІДКЛЮЧІТЬСЯ ДО СИСТЕМИ
  </button>
  <button type="button" class="list-group-item list-group-item-action">ПІДКЛЮЧІТЬ ДО СИСТЕМИ ВАШОГО КОНТРАГЕНТА</button>
  <button type="button" class="list-group-item list-group-item-action">ПІДПИСУЙТЕ ТА ОБМІНЮЙТЕСЬ ДОКУМЕНТАМИ ОНЛАЙН</button>
</div>
    <div id="presentation" class="btn btn-primary btn-lg " href="#">ЗАМОВИТИ ПРЕЗЕНТАЦІЮ</div>

    </div>
  </div>
  </div>
  </div>
  </section>
</template>

<script>


export default {

}
</script>

<style scoped>
.jumbotron{
  background-image: url(../assets/homebg.jpg);
  background-size: cover;
   min-height: 750px;
   margin-bottom: 0!important;

}
.container-fluid {
  padding: 0!important;
}
.bgclass {
  background: -webkit-linear-gradient(left, rgb(1, 76, 146) 0%, rgb(0, 155, 233) 30%, rgb(0, 155, 233) 70%, rgb(1, 76, 146) 100%);
    min-width: 1730px;
    left: 0px;
    width: 100%;
    height: 700px;
}
.text-second{
    color: #ffffff;
    font-size: 40px;
    font-family: roboto,sans-serif;
    padding-top: 5rem;
    padding-bottom: 5rem;
}
#presentation{
  margin-top: 60px
}
</style>
