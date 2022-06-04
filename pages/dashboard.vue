<template>
<v-main>
     
     <v-row>
        <v-col cols="12" md="12">
          User: {{datosuser.correo}}
          {{datosuser.lvl==='3' ? 'Usuario:Administrador' : 'Usuario:Cotizador '}}
        </v-col>
      </v-row>



    <div class="display-1 text-center">Ver mis cotizaciones</div>
<v-dialog v-model="registroCotizacion" >
    <cotizador @ventanacotizador="registroCotizacion=$event" />
</v-dialog>




<seguimiento @registroCotizacion="registroCotizacion=$event" />

</v-main>
</template>
<script>
import {mapState} from 'vuex'
import cotizador from '@/components/cotizador/cotizador.vue'
import seguimiento from '~/components/seguimiento/seguimiento.vue'
export default {
    data(){
        return {
            registroCotizacion:false
        }
    },
    computed:{
        ...mapState(['is_login','datosuser'])
    },
    methods:{
        validasesion(){
            if(this.is_login===false){
                this.$router.push('/');
            }
        }
    },
    components:{
        seguimiento,
        cotizador
    }
}
</script>
<style scoped>

</style>