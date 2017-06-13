<template>

    <div  id="el">

        <nav class="navbar navbar-default navbar-static-top">
        <!--<nav class="navbar navbar-inverse navbar-static-top">-->
            <div class="container-fluid">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </button>

                    <!-- Branding Image -->
                    <router-link class="navbar-brand" :to="{ name: 'indexTransfers' }" >Inventory</router-link>
                    </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse" >
                    <!-- Left Side Of Navbar -->

                    <ul v-hotkey="keymap" class="nav navbar-nav navbar-left">
                        <router-link tag="li" :to="{ name: 'createTransfers' }"><a>Create CFAT</a></router-link>
                        <router-link tag="li" :to="{ name: 'products' }"><a>Tech Items</a></router-link>
                        <router-link tag="li" :to="{ name: 'descriptions' }" ><a>Descriptions</a></router-link>
                        <router-link tag="li" :to="{ name: 'brands' }" ><a>Models</a></router-link>
                        <router-link tag="li" :to="{ name: 'manufactures' }" ><a>Manufacures</a></router-link>
                        <router-link tag="li" :to="{ name: 'locations' }" ><a>Locations</a></router-link>
                        <router-link tag="li" :to="{ name: 'categories' }" ><a>Categories</a></router-link>
                        </ul>
                    </div>
                </div>
            </nav>
        <transition name="fade" mode="out-in" appear >
                <router-view ></router-view>
        </transition>
        <vue-particles
                color="#8eb4cb"
                :clickEffect="false"
        ></vue-particles>
        <div class="navbar navbar-default navbar-fixed-bottom">
            <div class="container">
                <p class="navbar-text pull-left">Copyright &copy; {{dataDate}}
                    <router-link  :to="{ name: 'developer' }" >Mindanao Kokusai Daigaku</router-link>
                </p>


            </div>


        </div>

    </div>
</template>
<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity 0.3s
    }

    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -10;
     }
</style>

<script>
    import fetchAll from './Filtering/fetchAll.js';
    export default {
        data(){
            return{
                dataDateString: '',
            }
        },
        methods:{
            fetchAll(){
                fetchAll.fetchAll()
            },
            createCfat(){
                 this.$router.push({ name: 'createTransfers' })
            },
            product(){
                this.$router.push({ name: 'products' })
            },
            descriptions(){
                this.$router.push({ name: 'descriptions' })
            },
            brands(){
                this.$router.push({ name: 'brands' })
            },
            manufactures(){
                this.$router.push({ name: 'manufactures' })
            },
            locations(){
                this.$router.push({ name: 'locations' })
            },
            categories(){
                this.$router.push({ name: 'categories' })
            },
        },
        mounted(){
            this.fetchAll()
        },
        computed:{
            dataDate(){
                var d = new Date();
                var vm = this
                return d.getFullYear()
            },
             keymap (){
                return {
                    'ctrl+shift+1': this.createCfat,
                    'ctrl+shift+2': this.product,
                    'ctrl+shift+3': this.descriptions,
                    'ctrl+shift+4': this.brands,
                    'ctrl+shift+5': this.manufactures,
                    'ctrl+shift+6': this.locations,
                    'ctrl+shift+7': this.categories,
                }
            },
        },
    }
</script>
