<template>
  <footer>
    <div class="container mx-auto w-10/12 py-6">
      <div class="row flex justify-between">
        <div class="col-md-3">
          <h3 class="font-semibold text-lg py-3">LOCATION</h3>
          <p>
            Fantasy festival<br>
            Nørregade 19<br>
            6700 Esbjerg
          </p>
        </div>
        <div class="col-md-3"> <!-- Apply text-right class -->
          <h3 class="font-semibold text-lg py-3">OPENING HOURS</h3>
          <p class="pb-3">
            Saturday, September 14th:<br>
            from 10 AM to 6 PM
          </p>
          <p>
            Sunday, September 15th:<br>
            from 10 AM to 4 PM
          </p>
        </div>
        <div class="col-md-3"> <!-- Apply text-right class -->
          <h3 class="font-semibold text-lg py-3">CONTACT US</h3>
          <p class="pb-3">
            EMAIL:<br>
            <a href="mailto:fantasyfestival@esbjerg.dk">fantasyfestival@esbjerg.dk</a>
          </p>
          <p>
            PHONE NUMBER:<br>
            <a href="tel:+45 21 31 09 62">+45 21 31 09 62</a>
          </p>
        </div>
        <div class="col-md-3 flex flex-row items-end justify-end gap-5">
          <a href="https://www.facebook.com/profile.php?id=61550749296031">
            <img src="@/assets/facebook.svg" alt="Facebook">
          </a>

          <a href="https://www.example.com">
            <img src="@/assets/instagram.svg" alt="Instagram">
          </a>
        </div>
      </div>

      <div class="row py-10">
        <div class="line"></div>
      </div>
      
      <div class="row flex md:flex-row justify-center items-center md:gap-16">
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
    
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    background-image: linear-gradient(to bottom, #002B59, #397490);
  }

  .line { 
    height: 3px;
    background-color: var(--vt-c-white);
    z-index: 100;
  }
</style>
