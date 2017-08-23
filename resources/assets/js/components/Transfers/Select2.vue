<template>
    <select required class="input-sm" :name="name">
        <slot></slot>
    </select>
</template>
<style src="select2/dist/css/select2.min.css"></style>
<style src="select2-bootstrap-theme/dist/select2-bootstrap.min.css"></style>
<script>
    import Select2 from 'select2';
    export default{
    props: ['options', 'value', 'name', 'urlName', 'nameData'],
    data(){
        return{
            msg:''
        }
    },
    mounted(){
    var vm = this

    $(this.$el)
         // init select2
            .select2({theme: "bootstrap", data: this.options,
            placeholder: 'Select one',
            allowClear: false,
            tags:true,
            createTag: function (params) {
                var term
                if(!_.isEmpty(vm.urlName)){
                    term = $.trim(params.term) + (vm.options.some(function(r) {
                            return r.text == params.term
                            }) ? "" : " (new)");

                if (term === '' || term === ' (new)') {
                  return null;
                }
                return {
                        id: term,
                        text: term,
                        isNewFlag: true
                    }
                }
            }
            })
            .val(this.value)
            .trigger('change')
            .on( 'select2:select', function( e ) {
                if(!_.isEmpty(vm.urlName)){
                    if( e.params.data.isNewFlag ) {
                        if (/ \(new\)$/.test(e.params.data.text)) {

                            var post = $.trim(e.params.data.text.replace(/ \(new\)$/, ''));
                            axios.post(vm.urlName, {name : post}).then(response => {
                                 $(this).find('[value="'+e.params.data.id+'"]').replaceWith('<option selected value="'+response.data.data.id+'">'+response.data.data.name+'</option>');
                                vm.$emit('modelId',response.data.data)
                            })
                        }
                    }
                }else{

                    vm.$emit('selectValue',e.params.data.id )

                    vm.$emit('selectData', e.params.data.type)
                    vm.$emit('selectQuantityValue',e.params.data.quantity )
                    vm.$emit('selectStatusValue',e.params.data.status? e.params.data.status.id : 0 )
                    vm.$emit('selectManufactureValue',e.params.data.manufacture )
                    vm.$emit('selectDescriptionValue',e.params.data.description )
                    vm.$emit('selectLocationValue',e.params.data.location )
                    vm.$emit('selectCategoryValue',e.params.data.category )
                    vm.$emit('selectModelValue',e.params.data.model )

                }
                })
            // emit event on change.
            .on('change', function (e) {
            vm.$emit('input', this.value)

        })
    },
    watch: {
        value: function (value) {
        // update value
            $(this.$el).val(value).trigger('change');
        },
        options: function (options) {
        // update options
            $(this.$el).select2({ data: options })
        }
    },
        destroyed: function () {
            $(this.$el).off().select2('destroy')
        }
    }

</script>
