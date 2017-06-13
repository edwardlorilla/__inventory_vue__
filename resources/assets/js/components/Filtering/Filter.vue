
<template>
    <div>
        <div style="margin-top: 8px;" class="panel panel-default">
            <div class="panel-heading">{{titleHead}}</div>
            <div class="panel-body ">
                <div class="table-responsive">
                <table  class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th v-for="key in columns"  @click="sortBy(key)" v-show="key === 'id' ? false : true" :class="{ active: sortKey == key }">{{ key | capitalize }}<span class="glyphicon" :class="sortOrders[key] > 0 ? 'glyphicon-sort-by-attributes' : 'glyphicon-sort-by-attributes-alt'"></span></th>
                    </tr>
                    </thead>
                    <thead>
                    <tr>
                        <th v-for="key in columns"
                            v-show="key === 'id' ? false : true"
                        >

                            <input  class="input form-control" v-model="searchOrder[key]" :placeholder="key"/>
                        </th>
                    </tr>
                    </thead>

                    <transition-group
                            name="staggered-fade"
                            tag="tbody"
                            v-bind:css="false"
                            v-on:before-enter="beforeEnter"
                            v-on:enter="enter"
                            v-on:leave="leave"

                    >
                        <tr v-for="(entry, index) in paginatedData"
                            :key="index"
                            :data-index="index"
                        >

                            <td v-for="(key,index) in columns"
                                v-show="entry[key] === entry['id'] ? false : true"
                                :key="index"
                                :data-index="index"
                            >
                                <span v-if="entry[key] === entry['serial'] && titleHead === 'Products'"><router-link :to="'/techitem/' + entry['id'] + '/edit'" >{{entry[key]}}</router-link></span>
                                <span v-else-if="entry[key] === entry['name'] && titleHead === 'Manufactures'"><a @click="editEntry({id:entry['id']})">{{entry[key]}}</a></span>
                                <span v-else-if="entry[key] === entry['name'] && titleHead === 'Locations'"><a @click="editEntry({id:entry['id'],name:entry['name'],BU:entry['BU'],OU:entry['OU']})">{{entry[key]}}</a></span>
                                <span v-else-if="entry[key] === entry['name'] && titleHead === 'Descriptions'"><a @click="editEntry({id:entry['id'],name:entry['name']})">{{entry[key]}}</a></span>
                                <span v-else-if="entry[key] === entry['name'] && titleHead === 'Categories'"><a @click="editEntry({id:entry['id']})">{{entry[key]}}</a></span>
                                <span v-else-if="entry[key] === entry['name'] && titleHead === 'Models'"><a @click="editEntry({id:entry['id']})">{{entry[key]}}</a></span>
                                <span v-else>{{entry[key]}}</span>
                            </td>

                        </tr>
                    </transition-group>
                </table>
                </div>
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li>
                            <a @click="setPage(currentPage-1)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li :class="{'active': currentPage === 0}"><a @click="setPage(0)">1</a></li>
                        <li v-for="pageNumber in totalPages"
                            v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0"
                            :class="{'active': currentPage === pageNumber}">
                            <a @click="setPage(pageNumber)"
                               :class="{'active': currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">
                                <span>{{ pageNumber+1 }}<span v-if="currentPage === pageNumber" class="sr-only">(current)</span></span>
                            </a>
                        </li>
                        <li>
                            <a @click="setPage(currentPage+1)" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props: {
        data: Array,
        columns: Array,
        filterKey: String,
        titleHead:String
        },
        data: function () {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        var searchKeys = {}
        this.columns.forEach(function (key) {
            searchKeys[key] = ''
        })
        return {
            sortKey: '',
            sortOrders: sortOrders,
            searchOrder: searchKeys,

            currentPage: 0,
            itemsPerPage: 10,
            resultCount: 0,

            loading: false,
            post: null,
            error: null
        }
        },
        mounted(){
            document.title = this.titleHead
        },
        computed: {
            totalPages: function() {
            return Math.ceil(this.filteredData.length / this.itemsPerPage)
            },
            paginatedData: function(){
            if (this.currentPage >= this.totalPages) {
            this.currentPage = this.totalPages
            }
            var index = this.currentPage * this.itemsPerPage
            return this.filteredData.slice(index, index + this.itemsPerPage)
            },
            filteredData: function () {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var searchKey = this.searchOrder
            var order = this.sortOrders[sortKey] || 1
            var data = this.data

            if(filterKey || searchKey)
                        data = data.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            var filter;
                            if(_.size(searchKey) == 2 || _.size(searchKey) == 1){
                                filter = (String(row[key]).toLowerCase().indexOf(filterKey)) ||
                                (String(row['name']).toLowerCase().indexOf(searchKey['name'].toLowerCase()));
                            }else if( _.size(searchKey) == 2 || _.size(searchKey) == 3){
                                filter = (String(row[key]).toLowerCase().indexOf(filterKey)) ||
                                (String(row['id']).toLowerCase().indexOf(searchKey['id'].toLowerCase())) ||
                                (String(row['name']).toLowerCase().indexOf(searchKey['name'].toLowerCase())) ||
                                (String(row['productCount']).toLowerCase().indexOf(searchKey['productCount'].toLowerCase()));
                            }else if( _.size(searchKey) == 5 ){
                                filter = (String(row[key]).toLowerCase().indexOf(filterKey)) ||
                                (String(row['updated']).toLowerCase().indexOf(searchKey['updated'].toLowerCase())) ||
                                (String(row['serial']).toLowerCase().indexOf(searchKey['serial'].toLowerCase()))||
                                (String(row['to']).toLowerCase().indexOf(searchKey['to'].toLowerCase()))||
                                (String(row['from']).toLowerCase().indexOf(searchKey['from'].toLowerCase())) ||
                                (String(row['status']).toLowerCase().indexOf(searchKey['status'].toLowerCase()));
                            }
                            else if (_.size(searchKey) >= 10){
                            filter =(String(row[key]).toLowerCase().indexOf(filterKey)) ||
                                    (String(row['id']).toLowerCase().indexOf(searchKey['id'].toLowerCase())) ||
                                    (String(row['updated']).toLowerCase().indexOf(searchKey['updated'].toLowerCase())) ||
                                    (String(row['serial']).toLowerCase().indexOf(searchKey['serial'].toLowerCase())) ||
                                    (String(row['assetSerial']).toLowerCase().indexOf(searchKey['assetSerial'].toLowerCase())) ||
                                    (String(row['quantity']).toLowerCase().indexOf(searchKey['quantity'].toLowerCase())) ||
                                    (String(row['status']).toLowerCase().indexOf(searchKey['status'].toLowerCase())) ||
                                    (String(row['description']).toLowerCase().indexOf(searchKey['description'].toLowerCase())) ||
                                    (String(row['location']).toLowerCase().indexOf(searchKey['location'].toLowerCase())) ||
                                    (String(row['manufacture']).toLowerCase().indexOf(searchKey['manufacture'].toLowerCase())) ||
                                    (String(row['model']).toLowerCase().indexOf(searchKey['model'].toLowerCase())) ||
                                    (String(row['category']).toLowerCase().indexOf(searchKey['category'].toLowerCase()));
                                    }
                            return (filter) > -1
                    })
                })


            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                a = a[sortKey]
                b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
            }
        },
        filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        padend: function(str){
            return _.toString(str).padEnd(3)
        }
        },
        methods: {
            editEntry:function(index){
            var vm = this;
                vm.$emit('editData', index)
            },
            sortBy: function (key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            },
            setPage: function(pageNumber) {
				if (pageNumber >= 0 && pageNumber < this.totalPages) {
				  this.currentPage = pageNumber;   
				} 
            },
            beforeEnter: function (el) {
              el.style.opacity = 0
              el.style.height = 0
            },
            enter: function (el, done) {
              var delay = el.dataset.index * 50
              setTimeout(function () {
                Velocity(
                  el,
                  { opacity: 1, height: '1.6em' },
                  { complete: done }
                )
              }, delay)
            },
            leave: function (el, done) {
              var delay = el.dataset.index * 50
              setTimeout(function () {
                Velocity(
                  el,
                  { opacity: 0, height: 0 },
                  { complete: done }
                )
              }, delay)
            }

        }
    }



</script>
