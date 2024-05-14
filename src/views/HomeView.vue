<template>
<main>
    <div class="hero">
      <!-- <video autoplay loop muted plays-inline>
        <source src="@/assets/videjko.mp4" type="video/mp4">
      </video> -->
    </div>


  <h1>MEET OUR CHARACTERS</h1>
        

        <div class="grid-wrapper mx-auto w-10/12">
          <div><img src="@/assets/Havfruedronning.jpg" alt=""></div>
            <div><img src="@/assets/Malice.jpg" alt=""></div>
            <div><img src="@/assets/Arkivaren_color_soft.jpg" alt=""></div>
            <div><img src="@/assets/Gnist_color_Soft.jpg" alt=""></div>
            <div><img src="@/assets/Gygaz.jpg" alt=""></div>
        </div>

  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .hero {
    width: 100%;
    max-height: 100vh;
    position: relative;
}

.grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); 
}

.grid-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 10px;
}

.grid-wrapper > div {
    margin-bottom: 10px;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
