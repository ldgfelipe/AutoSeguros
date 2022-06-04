import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
      state: () => ({
          login:"logeado",
          is_login:false,
          datosuser:{},
          centrokumon:"",
          centros:[],
          fechasistema:new Date().toISOString().split('T')[0],
          aseguradoras:[]
      }),

      actions:{

        consoleshow(context,dat){
            var dominio = window.location.protocol+"//"+window.location.host
            if(dominio==='http://localhost:3000'){
                console[dat.type](dat.content)
            }
        },
       async cargaAseguradoras(context,data){

          this.$fire.firebase.collection('aseguradoras').get()
          .then((ase)=>{
            ase.forEach((r)=>{
              var asegu={...r.data()}
              asegu.id=r.id
              this.aseguradoras.push(asegu)
            })

          })
        },
    ///funciones Firebase
          /// valida sesion
        validSesion({state,dispatch,commit}){
         this.$fire.auth.onAuthStateChanged((user)=>{

          if(user){
            state.is_login=true
            state.user=user
            //// carga datos de usuario
            this.$fire.firestore.collection('usuarios').where('correo','==',user.email).get()
            .then((res)=>{
              var datos=res.docs[0].data()
              commit('cambiaDatosdeUsuario',datos)

            })

            dispatch('consoleshow',{type:'log',content:'usuario logeado'})
          }else{
            dispatch('consoleshow',{type:'log',content:"usuario no logeado"})
          }
         })
        },


        async validalogin({state, dispatch},data){
          try {
            await this.$fire.auth.signInWithEmailAndPassword(data.correo,data.pass)
            dispatch('consoleshow',{type:'log',content:'Usuario Logeado'})
            return "Acces Ok";
          } catch (e) {
           dispatch('consoleshow',{type:'error',content:e})
           return "Acces Error";
          }
        },
        cerrarSesion({state,dispatch,commit}){

          this.$fire.auth.signOut()
          .then(() => {
            state.is_login=false
            state.user={}
            this.$router.push('/')


            commit('cambiaDatosdeUsuario',{})

            dispatch('consoleshow',{type:'log',content:'Sesión cerrada'})
          }).catch((error) => {
            dispatch('consoleshow',{type:'log',content:error})
          });
        },
        async registroUsuario({dispatch},datos){
          try {
            switch(datos.type){
            case 'manual':
              await this.$fire.auth.createUserWithEmailAndPassword(datos.correo, datos.pass)
              .then((us)=>{
                dispatch('consoleshow',{type:'log',content:us.user})
                datos.uid=us.user.uid
                datos.emailVerified=us.user.emailVerified
                this.$fire.firestore.collection('usuarios').add(datos)
                return 'Registro correcto'

              })
              dispatch('consoleshow',{type:'log',content:'registro manual de usuario'})
              this.$fire.auth.currentUser.sendEmailVerification()
              .then(() => {
                dispatch('consoleshow',{type:'log',content:'Se envío un correo para verificar su cuenta'})

                });
              break;
             case 'facebook':
               break;
            }
            /// registro de usuario en base de datos
          } catch (e) {
            dispatch('consoleshow',{type:'error',content:e})
          }

        }


      },
      mutations:{
        cambiaDatosdeUsuario(state,data){
          state.datosuser=data
        },
      }
    })
}

export default createStore;
