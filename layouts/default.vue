<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
       absolute
      temporary
      class="orange black--text"
    >
      <v-list> 
        <v-list-item class="white--text"
          v-for="(item, i) in items"
          :key="i"    
          :to="item.to"
          router
          exact
        >
          <v-list-item-action class="white--text">
            <v-icon class="black--text" >{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>




  <v-list-item class="white--text"
          to="administradorusuarios"
          router
          exact
          v-if="is_login===true && datosuser.lvl==='3'"
        >
          <v-list-item-action class="white--text">
            <v-icon class="black--text" >mdi-account-group</v-icon>   
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text"  >
            Admin Usuarios
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>


  <v-list-item class="white--text"
          to="admincotizaciones"
          router
          exact
          v-if="is_login===true && datosuser.lvl==='3'"
        >
          <v-list-item-action class="white--text">
            <v-icon class="black--text" >mdi-text-box-search</v-icon>   
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text"  >
             Admin Cotizaciones
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>



  <v-list-item class="white--text"
          to="configcotizaciones"
          router
          exact
          v-if="is_login===true && datosuser.lvl==='3'"
        >
          <v-list-item-action class="white--text">
            <v-icon class="black--text" >mdi-text-box-search</v-icon>   
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text"  >
             Configuración Gral
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>



         <v-list-item class="white--text"
          to="cerrarsession"
          router
          exact
          v-if="is_login===true"
        >

          <v-list-item-action class="white--text">
            <v-icon class="black--text" >mdi-close</v-icon>   
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="black--text"  >
              Cerrar Sesión 
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
       class="orange black--text"
       max-height="60"
    >
      <v-btn class="black white--text" @click.stop="drawer = !drawer" >
      <v-icon >mdi-menu</v-icon>
      </v-btn>       
    </v-app-bar>

    
    <v-main class="pa-8">
     

        <nuxt />

    </v-main>
    <v-footer

      app
      class="orange black--text"
    >
      <span>AutoSegurosLDG  &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Bienvenido',
          to: '/',
          isLogin:false
        },
        {
          icon: 'mdi-text-box-search-outline',
          title: 'Cotiza',
          to: '/entrar',
          isLogin:false
        },
      
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AutoSegurosLDG'
    }
  },
  mounted(){
    this.validSesion()
  },
  computed:{
    ...mapState(['is_login','datosuser'])
  },
  methods:{
    ...mapActions(['validSesion','cargaAseguradoras'])
  }
     
}
</script>
