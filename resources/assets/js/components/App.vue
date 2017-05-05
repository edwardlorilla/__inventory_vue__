<template>

    <div id="el">
        <nav class="navbar navbar-default navbar-static-top">
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
                    <a class="navbar-brand" >
                        Inventory
                        </a>
                    </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-left">
                        <li>
                            <router-link :to="{ name: 'createTransfers' }">Create CFAT</router-link>
                        <li>
                            <router-link :to="{ name: 'products' }">Tech Items</router-link>
                        </li>
                        <li><router-link :to="{ name: 'descriptions' }" >Descriptions</router-link></li>
                        <li><router-link :to="{ name: 'brands' }" >Models</router-link></li>
                        <li><router-link :to="{ name: 'manufactures' }" >Manufacures</router-link></li>
                        <li><router-link :to="{ name: 'locations' }" >Locations</router-link></li>
                        <li><router-link :to="{ name: 'categories' }" >Categories</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        <transition name="fade" mode="in-out" >
            <router-view ></router-view>
        </transition>
    </div>
</template>
<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to  {
      opacity: 0
    }
    /* Center the loader */

</style>
<script>

    export default {

    }
</script>
