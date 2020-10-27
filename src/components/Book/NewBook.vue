<template lang="html">
    <div class="container">
        <div class="row">
            <div class="clo text-left">
                <h2>Agregar Libro</h2>
            </div>
        </div>
        <div class="row">
           <div class="col">
             <b-card>
                 <b-form @submit="onSubmit">
                     <div>
                         <b-form-group class="text-left" label="Título">
                            <b-form-input v-model.trim="form.title" placeholder="Ingresa título"></b-form-input>
                         </b-form-group>
                         <b-form-group class="text-left" label="Descripción">
                             <b-form-textarea v-model.trim="form.description" placeholder="Ingresa descripción"></b-form-textarea>
                         </b-form-group>
                         <div class="rows">
                             <div class="col text-left">
                                 <b-button class="m-1" type="submit" variant="primary">Guardar</b-button>
                                 <b-button class="m-1" type="reset" variant="secondary" :to="{ name: 'ListBook' }">Cancelar</b-button>
                             </div>
                         </div>
                     </div>
                 </b-form>

             </b-card>
           </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default {
        name: "NewBook",
        data() {
            return {
                form: {
                   title: '',
                    description: '',
                }
            }
        },
        methods: {
            onSubmit(event){
                event.preventDefault()
                const path = 'http://127.0.0.1:8000/api/v1.0/books/'

                axios.post(path, this.form).then((response) => {

                    this.form.title = response.data.title
                    this.form.description = response.data.description


                    Swal.fire('Guardado','','success')
                    //Puedo agregar otro boton para volver o no mostrar la animacion y usar location


                })
                .catch(() => {
                    Swal.fire('No se pudo guardar',"","error")
                })
            },

        },
        created() {

        }
    }
</script>

<style scoped>

</style>