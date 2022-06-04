<template>
    <v-card  class="ma-auto" elevation="5">
        <v-card-title  class="orange">

        </v-card-title>
        <v-card-text class="text-center">

            <img src="logos/redlogo.png" width="100" />

    <v-text-field outlined v-model="user.correo" @keyup.enter="Iniciarsesion()" label="Ingresa el correo" ></v-text-field>
    <v-text-field outlined v-model="user.pass" @keyup.enter="Iniciarsesion()"   type="password" label="ingrese la contraseña" ></v-text-field>
    <v-btn class="orange" @click="Iniciarsesion()">Iniciar Sesión</v-btn>

        </v-card-text>
    </v-card>
</template>
<script>
import {mapState,mapMutatios,mapActions} from 'vuex'
export default {
    data(){
        return {
            user:{}
        }
    },
    methods:{
        ...mapActions(['validalogin']),
        Iniciarsesion(){
            this.validalogin(this.user)
             .then((res)=>{
                 console.log(res)
                    this.$router.push('dashboard')
            })  
        }       
    }
}
</script>