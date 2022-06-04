<template>
    <v-main>
            <v-row>
                <v-col cols="12" md="12"  style="background-image:url('imagenes/seguros2.jpg'); background-size:110%; background-position:-100px; height:500px; ">

                    <div class="orange" style="width:100%; max-width:250px; position:relative; margin:5% 200px; border-radius:10px; padding:10px;">
      <img src="logos/blancologo.png" width="200px" />
<br />
</div>
                </v-col>
                <v-col cols="12" md="3" class="ma-auto"  v-if="is_login===false">
                    <v-tabs  
                    background-color="deep-orange accent-4"
                    fixed-tabs
                    center-active
                    dark
                    >
                        <v-tab class="orange black--text">Login</v-tab>
                        <v-tab  class="orange black--text">Registro</v-tab>

                        <v-tab-item>
                    <login></login>
                        </v-tab-item>
                        <v-tab-item>
                          <registro></registro>
                        </v-tab-item>
                    </v-tabs>


                </v-col>
               

            </v-row>
    </v-main>
</template>
<script>
import { mapState } from 'vuex'
import login from '@/components/login/login.vue'
import registro from '@/components/registro/registro.vue'
export default {
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['is_login'])
    },
    mounted(){
        this.validasesión()     
    },
    methods:{   
        validasesión(){
            if(this.is_login===true){
                this.$router.push('dashboard')
            }
        }
    },
    components:{
        login,
        registro        
    }
}
</script>