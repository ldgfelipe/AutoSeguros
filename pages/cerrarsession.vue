<template>
    <v-card>
        <v-card-text>
            <h2>Cerrando Sesión</h2>
        </v-card-text>
    </v-card>
</template>
<script>
import {mapActions} from 'vuex' 
export default{
    data(){
        return {

        }
    },
    mounted(){
        this.cerrarSesion() 
    },
    methods:{
        ...mapActions(['cerrarSesion']),
        
    }
}
</script>