<template>
    <v-main>
<h3>Administrador de Usuarios</h3>


<v-dialog v-model="editauser">
    <v-card>
        <v-card-title class="orange black--text">
            Edita Usuario
        </v-card-title>
        <v-card-text>   
            UID: {{useredit.uid}}<br />
            ID: {{useredit.id}}
        <v-text-field label="Nombre" v-model="useredit.nombre"></v-text-field>
        <v-text-field label="Correo" v-model="useredit.correo"></v-text-field>

            <v-select v-model="useredit.lvl" :items="[
            {
                text:'administrador',
                value:'3'
                },
            {
                text:'cotizador',
                value:'0'
                }
            ]" />

            <v-btn @click="guardaDatosUser()" class="orange black--text"><v-icon>mdi-content-save</v-icon></v-btn>
        </v-card-text>
    </v-card>
</v-dialog>


<v-data-table :headers="titulos" :items="usuarios">
    <template v-slot:item.editar="{ item }"  >


        <v-btn class="orange black--text" @click="cargaUsuario(item)" >
                <v-icon>mdi-account-edit</v-icon>   
        </v-btn>
    </template>
</v-data-table>


    </v-main>
</template>
<script>
import {mapState} from 'vuex' 
export default {
    data(){
        return {
            titulos:[
                {
                    text:'Correo',
                    value:'correo'
                },
                {
                    text:'Nombre',
                    value:'nombre'
                },
                {
                    text:'Editar',
                    value:'editar'
                }
            ],
            usuarios:[],
            editauser:false,
            useredit:{}
        }
    },
    mounted(){
        if(this.datosuser.lvl!=='3'){
            this.$router.push('/')
        }else{
            this.cargausuarios()
        }

    },
    computed:{
        ...mapState(['datosuser'])
    },
    methods:{
        cargaUsuario(p){
            this.useredit={}
            this.editauser=true
            this.useredit=p
        },
       async cargausuarios(){
           var userdatos={}
           await this.$fire.firestore.collection('usuarios').get()
           .then((res)=>{
               
               res.forEach((d)=>{
                   userdatos={}

                    userdatos={
                        ...d.data()
                    }
                    userdatos.id=d.id

                   this.usuarios.push(userdatos)
               })
           })
        },
        guardaDatosUser(){
            this.$fire.firestore.collection('usuarios')
            .doc(this.useredit.id)
            .update(this.useredit)
            .then((us)=>{
                this.editauser=false
            })
        }
    }
}
</script>