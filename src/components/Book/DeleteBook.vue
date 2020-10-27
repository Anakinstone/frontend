<template>
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Estas seguro de eliminar?</h3>
                <p>Título: {{ this.element.title }}</p>
                 <p>Título: {{ this.element.description }}</p>

            </div>
        </div>
            <div class="row">
                <div class="col">
                    <b-button @click="deleteBook" variant="danger">Eliminar</b-button>
            </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Swal from 'sweetalert2'

    export default {
        name: "DeleteBook",

        data() {
            return {
                bookId: this.$route.params.bookId,
                element: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            getBook () {
                const path = `http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/` //acentos graves por que es una cadena de texto

                axios.get(path).then((response) => {

                    this.element.title = response.data.title
                    this.element.description = response.data.description

                })
                .catch((error) => {
                    console.log(error)
                })
            },
            deleteBook () {
                const path = `http://127.0.0.1:8000/api/v1.0/books/${this.bookId}/` //acentos graves por que es una cadena de texto

                axios.delete(path).then(() => {
                    location.href = '/books'
                })
                    .catch(() => {
                        Swal.fire("No es posible eliminar el libro", "", "error")
                    })
            }
        },
        created() {
            this.getBook()
        }
    }
</script>

<style scoped>

</style>