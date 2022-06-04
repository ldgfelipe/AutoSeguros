<template>
    <v-main>
        <h3>Configuración de Sitio</h3>
        <v-dialog v-model="altaseguro">
            <v-card>
                <v-card-title>
                    Aseguradora
                </v-card-title>
                <v-card-text>
                    <v-text-field outlined v-model="editseguro.nombre" label="Nombre de Aseguradora" /> 
                    <v-textarea outlined v-model="editseguro.desc" label="Descripción de Aseguradora" ></v-textarea>
                    <v-select  v-model="editseguro.status" label="Status de Aseguradora"  :items="[
                        {
                            text:'Inactivo',
                            value:0
                        },
                        {
                            text:'activo',
                            value:1
                        }
                        ]" />
                    <v-btn class="orange black--text" @click="guardarDatos()">Guardar</v-btn>
                    <v-btn class="error white--text" @click="eliminaraseguradora()"><v-icon>mdi-delete</v-icon></v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-tabs>
            <v-tab>Aseguradoras</v-tab>
        
            <v-tab-item>
                <v-btn class="orange black--text" @click="cargaseguros()"><v-icon>mdi-reload</v-icon></v-btn>
                <v-btn class="orange black--text" @click="nuevoisitio()"><v-icon>mdi-plus</v-icon></v-btn>
                <v-data-table :headers="titulos" :items="aseguradoras">

                    <template v-slot:item.status= ' { item }' >
                        {{item.status===1 ? 'Activo' : 'Inactivo'}}
                    </template>

                    <template v-slot:item.editar="{ item }">
                        <v-btn class="primary text--white" @click="editaseguro(item)"><v-icon>mdi-briefcase-edit</v-icon></v-btn>
                    </template>
                </v-data-table>
            </v-tab-item>

        </v-tabs>



    </v-main>
</template>
<script>
export default {
    data(){
        return {
            typeaction:"",
            altaseguro:false,
            titulos:[
                {
                    text:"Nombre",
                    value:"nombre"
                },
                {
                    text:"Descripción",
                    value:"desc"
                },
                {
                    text:"Status",
                    value:"status"
                },
                {
                    text:"Editar",
                    value:"editar"
                }
            ],
            aseguradoras:[],
            editseguro:{}

        }   
    },
    mounted(){
        this.cargaseguros()
    },
    methods:{
        cargaseguros(){
            this.aseguradoras=[]
            this.$fire.firestore.collection('aseguradoras').get()
            .then((re)=>{
           var dataseg={}
                re.forEach((r)=>{
                    dataseg={ ...r.data() }   
                     dataseg.id=r.id
                        this.aseguradoras.push(dataseg)           
                })
            })
        },
        nuevoisitio(){
            this.editseguro={}
            this.typeaction="newseguro"
            this.altaseguro=true
        },
        editaseguro(p){     
            this.typeaction="editseguro"
            this.altaseguro=true
            this.editseguro=p
        },
        eliminaraseguradora(){

            this.$fire.firestore.collection('aseguradoras').doc(this.editseguro.id).delete() 
            .then((res)=>{
                console.log(res)
                 this.altaseguro=false
                         this.cargaseguros()
            })  

        },
        guardarDatos(){
            console.log(this.editseguro)
                if(this.typeaction==="newseguro"){
                    this.$fire.firestore.collection('aseguradoras').add(this.editseguro)
                    .then((ade)=>{
                        this.editseguro.id=ade.id
                        this.$fire.firestore.collection('aseguradoras').doc(ade.id)
                        .update(this.editseguro)
                        .then((res)=>{
                             this.altaseguro=false
                             this.cargaseguros()
                        })
                    })

                }
                if(this.typeaction==="editseguro"){
                    this.$fire.firestore.collection('aseguradoras').doc(this.editseguro.id).update(this.editseguro)
                    .then((re)=>{
                         this.altaseguro=false
                         this.cargaseguros()
                    })
                }
        }

    }
}
</script>   