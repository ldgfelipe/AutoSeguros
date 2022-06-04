<template>
<v-main class="pa-0">

    <v-row>


      <v-col cols="12" md="12" class="text-center" style="background-image:url('imagenes/seguros1.jpg'); background-size:110%; background-position:-100px; height:500px; "  >
           <v-scale-transition mode="out-in" class="text-center" >
              <v-layout v-if="show" key="0" wrap class="text-center"   >
             
<div class="black" style="width:100%; max-width:400px; position:relative; margin:5% 200px; border-radius:10px; padding:10px;">
      <img src="logos/blancologo.png" width="200px" />
<br />

<h1 class="white--text" >Asegura tu futuro para tí y tu familia con AutoSegurosLDG</h1>
</div>
              </v-layout>
           </v-scale-transition>
      </v-col>


      <v-col cols="12" md="12"  >
        <v-scale-transition mode="out-in" class="text-center" >
        <v-card v-if="show">

          <v-card-title class="orange black--text">
           <h3> ¿Qué es un Seguro de Autos?</h3>
          </v-card-title>
          <v-card-text>


            <v-row>
              <v-col cols="12" md="5" >
            <div class="text-center pa-6">
            <img src="vendedores/seguroautos.png" width="100" />
            </div>
              </v-col>
              <v-col cols="12" md="7" class="pt-10">
            <p>
              <em>
              Un seguro de auto es un contrato entre el propietario de un vehículo y una aseguradora cuyo objetivo es cubrir económicamente los riesgos asociados a la conducción y tenencia del vehículo.
              </em>
              </p>
          
              <p>
                <span class="text--blue">AutoSegurosLDG</span> trabajamos con más de 20 aseguradoras para que puedas cotizar y comprar el seguro que se adecue a tus necesidades.
                </p>

              </v-col>

            </v-row>



          </v-card-text>


        </v-card>
        </v-scale-transition>
      </v-col>


      <v-col cols="12" md="6">


        <v-scale-transition mode="out-in" class="text-center" >
        <v-card v-if="show">
          <v-card-title class="orange black--text " >
           <h3> ¿Por que necesito un seguro?</h3>
          </v-card-title>
          <v-card-text>

              <div class="text-center pa-6">
            <img src="vendedores/accidente.png" width="100" />
            </div>
            <p>
            Son muchos casos por los cuales son aplicables a un seguro de autos:
            </p>
            <ul>
              <li>Accidente de auto solo daños materiales </li>
              <li>Accidente de auto daños materiales y salud </li>
              <li>Accidente de auto daños materiales y daños a terceros </li>
              <li>Accidente de auto daños materiales y demandas legales</li>
              </ul>
              <br />
              <v-btn class="black white--text" block to="/coberturas"><b>Conoce más sobre coberturas</b></v-btn>
             <br />
             <p><em> 
             El estar involucrado en alguno de estos problemas lo que mejor se intenta es tener un respaldo para poder salir adelante sin tener un desfalco económico para ti y tus seres queridos.
              </em>
              </p>
          </v-card-text>
        </v-card>
        </v-scale-transition>


      </v-col>

      <v-col cols="12" md="6">
        <v-scale-transition mode="out-in" class="text-center" >
        <v-card v-if="show">
          <v-card-title class="orange black--text"  >
           <h3>¿Como puedo cotizar y contratar?</h3>
          </v-card-title>
          <v-card-text>
            <div class="text-center pa-6">
            <img src="vendedores/cotiza.png" width="125" />
            </div>
            <p>
              <em>
              Puedes solicitar tu cotización de forma gratuita y con gusto te podemos proporcionar tu cotización sin compromiso de compra.
              </em>
              </p>
              <br />
                <v-btn to="/entrar" block class="black white--text"><b>Solicita tu Cotización</b></v-btn>
                <br />
              

              <p>
                Despues de realizar tu cotización te mandamos los formatos para poder llenar con información importante para asegurar tu auto
                </p>

                  <p>
              Te mandamos por correo toda la documentación necesaria para poder hacer valido tu seguro en caso de algún siniestro
                </p>
          </v-card-text>
        </v-card>
        </v-scale-transition>
      </v-col>

<v-col cols="12" md="12" >
        <v-scale-transition mode="out-in" class="text-center" >
        <v-card v-if="show">
          <v-card-title class="orange black--text  text-center">
        Trabajamos con las aseguradoras mas confiables de México
          </v-card-title>
          <v-card-text class="pa-5 " style="display:absolute;">
            
<v-row class="marcas">
  <v-col cols="12" md="2">
    <v-card >
      <v-card-text>

<div>    <img src="seguros/1200px-Mapfre_logo.svg.png" alt="AutoSegurosLDG seguros mapfre" width="100%" /></div>
    </v-card-text>  
    </v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/aba_logo.png"  alt="AutoSegurosLDG seguros aba seguros" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/afirme-seguros.png"  alt="AutoSegurosLDG seguros afirme" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/aig.png"  alt="AutoSegurosLDG seguros aig" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

   <v-col cols="12" md="2">
      <v-card >
      <v-card-text >
        <div>    <img src="seguros/axa-logo-4.png"  alt="AutoSegurosLDG seguros axa" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

 <v-col cols="12" md="2">
    <v-card >
      <v-card-text>

<div>    <img src="seguros/bx+.jpg"  alt="AutoSegurosLDG seguros bx+" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/ana-seguros.png"  alt="AutoSegurosLDG seguros ana" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

 <v-col cols="12" md="2">
    <v-card >
      <v-card-text>

<div>    <img src="seguros/ELPOTOSIlogook.jpg"  alt="AutoSegurosLDG seguros el potosi " width="100%" /></div>
      </v-card-text></v-card>
  </v-col>


   <v-col cols="12" md="2">
      <v-card >
      <v-card-text >
        <div>    <img src="seguros/general de seguros.jpg"  alt="AutoSegurosLDG seguros general" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>


  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/hdi-seguros.jpg"  alt="AutoSegurosLDG seguros hdi" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

 <v-col cols="12" md="2">
    <v-card >
      <v-card-text>

<div>    <img src="seguros/hot-sale-qualitas.jpg"  alt="AutoSegurosLDG seguros qualitas" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>


   <v-col cols="12" md="2">
      <v-card >
      <v-card-text >
        <div>    <img src="seguros/la latino.jpg"  alt="AutoSegurosLDG seguros la latino" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

   <v-col cols="12" md="2">
      <v-card >
      <v-card-text >
        <div>    <img src="seguros/logo-GNP.jpeg"  alt="AutoSegurosLDG seguros GNP" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

     <v-col cols="12" md="2">
        <v-card >
      <v-card-text >
        <div>  <img src="seguros/Logo-seguros-Atlas.jpg"  alt="AutoSegurosLDG seguros Atlas" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

     <v-col cols="12" md="2">
        <v-card >
      <v-card-text >
        <div>  <img src="seguros/logo-seguros-inbursa.jpg"  alt="AutoSegurosLDG seguros Inbursa" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

   <v-col cols="12" md="2">
      <v-card >
      <v-card-text >
        <div>    <img src="seguros/migo.png"  alt="AutoSegurosLDG seguros migo" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

     <v-col cols="12" md="2">
        <v-card >
      <v-card-text >
        <div>  <img src="seguros/miituo.png"  alt="AutoSegurosLDG seguros miituo" width="100%" /></div>
      </v-card-text></v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/seguros banorte.png"  alt="AutoSegurosLDG seguros banorte" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/sura.jpg"  alt="AutoSegurosLDG seguros sura" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

  <v-col cols="12" md="2">
     <v-card >
      <v-card-text >
        <div>
    <img src="seguros/zurich.png"  alt="AutoSegurosLDG seguros zurich" width="100%" />
    </div>
      </v-card-text></v-card>
  </v-col>

</v-row>




          </v-card-text>
        </v-card>
        </v-scale-transition>
      </v-col>


    </v-row>

</v-main>
</template>
<style scoped>
p {
  font-size:18px;
}
.marcas {


}

.marcas v-col v-card v-card-text{ 
 display: table;
   height:200px;
}

.marcas v-col v-card v-card-text div {
   display: table-cell;
   vertical-align: middle;
   height:200px;
}
</style>
<script>
export default {
 data(){
   return {
     show:false
   }
 },
 mounted(){
   setTimeout(()=>{
     this.show=true
   },1000)
 }
}
</script>
