<template>
<v-main>
    <h3>Administración de Cotizaciones</h3>

    <v-dialog fullscreen v-model="editcot" max-width="800">
        <v-card>
            <v-card-title class="orange black--text">
                Edita Cotización <v-spacer></v-spacer> <v-btn @click="editcot=false " ><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text>

               <v-row>
                   <v-col cols="12" md="4">
                       <h4>Datos Generales</h4>
                    ID:<b>{{editacot.id}}</b><br />

                    Nombre: <b>{{editacot.nombre}}</b><br />
                    Edad: <b> {{editacot.edad}}</b> <br />
                    Correo: <b> {{editacot.correo}}</b> <br />
                    <hr /><br />
                    <h4>Datos de Pago   </h4>
                    Frecuencia: <b> {{editacot.frecuencia}}</b> <br />
                    Tipo de Pago: <b> {{editacot.tipopago}}</b> <br />

                    <hr /><br />
                    Status:<b><v-select :items="['pendiente','en espera','cancelado','contratado']" /> {{editacot.status}}</b>



                      <h3>Vehiculo registrados </h3>

                      <ul>
                          <li v-for="(autos, index) in editacot.autos" :key="index">
                              <h2>Vehiculo {{index+1}}</h2>
                              Año:<b>{{autos.año}}</b><br />
                              Desc:<b>{{autos.desc}}</b><br />
                              Marca:<b>{{autos.marca}}</b><br />
                              modelo:<b>{{autos.modelos}}</b><br />
                              Serie:<b>{{autos.serie}}</b><br />
                              Tipo:<b>{{autos.tipo}}</b><br />
                              Uso:<b>{{autos.uso}}</b><br />

                          </li>
                          </ul>

                     <hr />
                    <h3>Cotización</h3>

                        <v-file-input v-if="!editacot.cotizacion" v-model="imagenCotizacion"  />  <br />
                       <h3 v-if="!editacot.cotizacion" > Progreso updload {{progresoUpload}}%</h3>
                        <br />

                        <v-btn class="primary" @click="subircotizacion()"  v-if="!editacot.cotizacion">Subir Archivo</v-btn>

                        <v-btn v-if="editacot.cotizacion" @click="eliminarArchivo()" class="error white--text" >
                            <v-icon>mdi-delete</v-icon>
                            <v-icon>mdi-image</v-icon>
                        </v-btn>



                   </v-col>
                    <v-col cols="12" md="6" >
                        Aseguradoras
                      <ul style="list-style:none;">
                           <li  v-for="(item,index) in editacot.aseguradoras" :key="index" >
                            <v-checkbox v-model="editacot.aseguradoras[index].select" :label="editacot.aseguradoras[index].nombre" />
                            </li>

                        </ul>
                    </v-col>

                    <v-col cols="12" md="12" >
                        <v-btn class="orange black--text" @click="finalizarEdicion()">Finalizar</v-btn>
                    </v-col>

               </v-row>


            </v-card-text>
        </v-card>
    </v-dialog>


    <v-data-table :headers="titulos" :items="cotizaciones" >

            <template v-slot:item.editar="{item}">
                <v-btn class="orange black--text" @click="editarCotizacion(item)" ><v-icon>mdi-content-save</v-icon></v-btn>
            </template>


    </v-data-table>

</v-main>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data(){
        return {
            aseg:[],
            titulos:[
                {
                    text:'Nombre',
                    value:'nombre'
                },
                {
                    text:'Correo',
                    value:'correo'
                },
                {
                    text:'Status',
                    value:'status'
                },

                {
                    text:'Editar',
                    value:'editar'
                }
            ],
            cotizaciones:[],
            editacot:{},
            editcot:false,
            imagenCotizacion:"",
            progresoUpload:0,
            listaaseguradoras:[]

        }
    },
    computed:   {
        ...mapState(['datosuser'])
    },
    mounted(){
        this.cargaCotizaciones()
        this.caragaAseguradoras()
    },
    methods:{
        caragaAseguradoras(){
                this.$fire.firestore.collection('aseguradoras').get()
                .then((aseg)=>{
                        aseg.forEach((re)=>{
                            this.listaaseguradoras.push(re.data())
                        })
                })
        },
        async cargaCotizaciones(){

            await this.$fire.firestore.collection('Cotizaciones').get()
            .then((cot)=>{

                cot.forEach((co)=>{

                   let cotiza={
                        ...co.data()
                    }
                    cotiza.id=co.id
                    cotiza.aseguradoras=[]
                        console.log(cotiza)

                    if(cotiza.aseguradoras.length!==this.listaaseguradoras){
                        cotiza.aseguradoras=this.listaaseguradoras
                    }
                   this.cotizaciones.push(cotiza)
                })
            })
        },
          editarCotizacion(p){
        this.editacot=p
        this.editcot=true

    },
    eliminarArchivo(){
          ///// elimina el archivo
             var storage = this.$fire.storage

               var desertRef = storage.refFromURL(this.editacot.cotizacion);
                desertRef.delete().then((elim)=>{
                    this.editacot.cotizacion=""
                })
                .catch((error)=>{
                    this.editacot.cotizacion=""
                    console.log(error)
                })
    },
    subircotizacion(){

       var file=this.imagenCotizacion

        var storageRef = this.$fire.storage.ref();

    var uploadTask = storageRef.child(this.editacot.id+'/'+file.name).put(file);
uploadTask.on('state_changed',
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    this.progresoUpload=progress;
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    // Handle unsuccessful uploads
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
       this.editacot.cotizacion=downloadURL

        this.guardarcambios()
        this.imagenCotizacion=""
    });
  }
);

    },

    guardarcambios(){

        this.$fire.firestore.collection('Cotizaciones').doc(this.editacot.id).update(this.editacot)

    },

    finalizarEdicion(){
            this.editcot=false
            this.guardarcambios()
    }

    },

}
</script>
