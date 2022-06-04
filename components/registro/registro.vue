<template>

        <v-card >
             <v-card-title class="orange" >
       
             </v-card-title>
             <v-card-text class="text-center">
                 <v-text-field  outlined v-model="usera.nombre" label="Nombre" />
                  <v-text-field  outlined v-model="usera.correo" label="Correo" />
                  <v-text-field outlined v-model="usera.pass" label="Contraseña" />

                  <v-btn class="orange black--text" @click="crearCuenta()">Crear Cuenta</v-btn>
             </v-card-text>
             
        </v-card>

</template>
<script> 
import { mapState, mapActions } from 'vuex'

export default{
    data(){
        return {
            usera:{}
        }
    },
    methods:{
        ...mapActions(['registroUsuario']),
        crearCuenta(){
            console.log('creando cuenta')
            this.usera.type="manual"
            console.log(this.usera)
            this.registroUsuario(this.usera)
            .then((res)=>{
                    this.$router.push('dashboard')
            })
        }

    }
}   

</script>