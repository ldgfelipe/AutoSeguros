import { CatalogoAutos,CatalogoMotocicletas } from '~/listaautos.js' 
import { mapState } from 'vuex'

export default {
    data(){
        return {
            cotizacion:{},
            sexo:['Masculino','Femenino'],
            Marca:[],
            edad:[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
            marcas:[],
            modelos:[],
            autos:[],
            tipov:["Motocicleta","Automóvil"],
            baseSelect:[],
            años:[],
            Uso:["Particular","Uber","Multiplataforma"],
            tipopago:["Efectivo","Tarjeta Crédito","Tarjeta Débito","Transferencia"],
            frecuencia:["Anual","Semestral","Trimestral","Mensual"],
            registroexitoso:false
        }
    },
    created(){

    var anActual=parseInt(new Date().getFullYear())
        for(var v=1900;v<anActual;v++){
            this.años.push(v)
        }
    },
    computed:{
        ...mapState(['datosuser'])
    },
    methods:{
        seleccionamarcas(p,i){
            switch(p){
                case 'Motocicleta':
                    this.marcas[i]=Object.keys(CatalogoMotocicletas)
                    this.marcas[i].push('Otra Marca')
                    this.baseSelect[i]=CatalogoMotocicletas

                break;
                case 'Automóvil':
                    this.marcas[i]=Object.keys(CatalogoAutos)
                    this.marcas[i].push('Otra Marca')
                    this.baseSelect[i]=CatalogoAutos
                break;
            }
        },
        selectmodelos(p,i){
            if(p!=='Otra Marca'){
            this.modelos[i]=this.baseSelect[i][p]
            this.modelos[i].push('Otro Modelo')
            }
        },
        addauto(){
            this.autos.push({
                marca:""
            })
        },
        deleteVehiculo(p){
            var vei=this.autos.indexOf(p)
            this.autos.splice(vei,1)
        },
        EnviarSolicitud(){
            this.cotizacion.iduser=this.datosuser.uid
            this.cotizacion.autos=this.autos
            this.cotizacion.status="pendiente"
            this.$fire.firestore.collection('Cotizaciones').add(this.cotizacion)
            .then((p)=>{
            this.registroexitoso=true
           })
        },
        cerrarVentana(){
            this.$emit('ventanacotizador',false)
        },
        finalizaRegistro(){
            this.registroexitoso=false
            this.$emit('ventanacotizador',false)
        }
    }
}