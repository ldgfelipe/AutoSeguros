import { jsPDF } from 'jspdf'
import { mapState } from 'vuex'
export default {
    data(){
        return {
            correo:"",
            datos:[],
            cabecera:[
                {
                    text:"Nombre",
                    value:"nombre"
                },
                {
                    text:"Status",
                    value:"status"
                },
                {
                    text:"Edit",
                    value:"edit"

                }
            ],
            visorDatos:{},
            visor:false

        }
    },
    computed:{
        ...mapState(['datosuser'])
    },
    methods:{
        
        async acceder(){
            this.dato=[]    
            await this.$fire.firestore.collection('Cotizaciones').where("iduser","==",this.datosuser.uid).get()
            .then((data)=>{
                data.forEach((da)=>{
                    this.datos.push(da.data())
                })     
            })
        },
        verdatos(p){
            this.visorDatos=p,
            this.visor=true
        },
        imprimirpdf(){
            const doc = new jsPDF();
            doc.addImage('logos/logosASLDG.png','PNG',10,10,27,15)
            doc.addImage('logos/goagentes.jpg','PNG',160,10,30,13)
            doc.text('Nombre:'+this.visorDatos.nombre,5,40)
            doc.text('Edad:'+this.visorDatos.edad,120,40)
            doc.text('Fecha de Nacimiento:'+this.visorDatos.fechadenacimiento,5,50)
            doc.text('Sexo:'+this.visorDatos.sexo,90,50)
            doc.text('Código Postal:'+this.visorDatos.cp,120,50)

            doc.save("cotizacion.pdf");
        }
    },

}