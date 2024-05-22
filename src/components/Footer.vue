<template>
  <footer>
    <div class="w-full mt-20">
            <img src="@/assets/clouds.svg" alt="clouds" class="w-full">
      </div>
      <div class="container-info">
    <div class="container mx-auto w-10/12 py-6">
      <div class="row md:flex justify-between">
        <div class="col-3 pb-10 md:pb-0">
          <h4 class="font-semibold text-lg py-1 md:py-3">LOCATION</h4>
          <p>
            Fantasy festival<br>
            Nørregade 19<br>
            6700 Esbjerg
          </p>
        </div>
        <div class="col-3 pb-10 md:pb-0"> 
          <h4 class="font-semibold text-lg py-1 md:py-3">OPENING HOURS</h4>
          <p class="pb-3">
            Saturday, September 14th:<br>
            from 10 AM to 6 PM
          </p>
          <p>
            Sunday, September 15th:<br>
            from 10 AM to 4 PM
          </p>
        </div>
        <div class="col-3 pb-10 md:pb-0"> 
          <h4 class="font-semibold text-lg py-1 md:py-3">CONTACT US</h4>
          <p class="pb-3">
            Email:<br>
            <a href="mailto:fantasyfestival@esbjerg.dk">fantasyfestival@esbjerg.dk</a>
          </p>
          <p>
            Phone number:<br>
            <a href="tel:+45 21 31 09 62">+45 21 31 09 62</a>
          </p>
        </div>
        <div class="col-md-3 flex flex-row items-end justify-end gap-5">
          <a href="https://www.facebook.com/profile.php?id=61550749296031">
            <img src="@/assets/facebook.svg" alt="Facebook" class="socialmedia">
          </a>

          <a href="https://www.example.com">
            <img src="@/assets/instagram.svg" alt="Instagram" class="socialmedia">
          </a>
        </div>
      </div>

      <div class="row py-6 md:py-10">
        <div class="line"></div>
      </div>
      
      <div class="row flex flex-row justify-center items-center gap-6 md:gap-16">
        <a href="https://oplev.esbjerg.dk/">
            <img src="@/assets/oplev.svg" alt="Oplev">
          </a>

        <a href="https://www.esbjergbibliotek.dk/">
            <img src="@/assets/biblioteker.svg" alt="Bibliotek">
          </a>

        <a href="https://www.esbjerg.dk/">
            <img src="@/assets/kommune.svg" alt="Esbjerg Kommune">
          </a> 
      </div>

    </div>
  </div>
  </footer>
</template>

<style lang="scss" scoped>
  .container-info {
    background-image: linear-gradient(to bottom, #9b5fc6, #401156);
  }

  .line { 
    height: 3px;
    background-color: var(--vt-c-white);
    z-index: 100;
  }

.socialmedia {
  transition: 0.3s;
}

.socialmedia:hover {
  scale: 1.1;
  border-radius: 50%;
  transition: 0.3s;
}

</style>
