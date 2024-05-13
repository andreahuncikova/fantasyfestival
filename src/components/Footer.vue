<template>
  <footer>
    <div class="container mx-auto w-10/12">
      <div class="row flex justify-between grid grid-cols-4 gap-4">
        <div class="col">
          <h3 class="font-semibold text-lg py-3">LOCATION</h3>
          <p>
            Fantasy festival<br>
            Nørregade 19<br>
            6700 Esbjerg
          </p>
        </div>
        <div class="col">
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
        <div class="col">
          <h3 class="font-semibold text-lg py-3">CONTACT US</h3>
          <p class="pb-3">
            EMAIL:<br>
            fantasyfestival@esbjerg.dk
          </p>
          <p>
            PHONE NUMBER:<br>
            +45 21 31 09 62
          </p>
        </div>
        <div class="col">
          <p>Obsah štvrtého stĺpca</p>
        </div>
      </div>

      <div class="row">
        <div class="line w-10/12"></div>
      </div>
      
      <div class="row">
        <div class="col">
          <p>Druhý riadok pätiky</p>
        </div>
      </div>
    </div>
    
  </footer>
</template>
  
  <script setup>
  
  </script>
  
  <style lang="scss" scoped>
    footer {
      background-image: linear-gradient(to bottom, #002B59, #397490);
    }

    .line { 
      height: 1px;
      background-color: var(vt-c-white);
    }
  </style>