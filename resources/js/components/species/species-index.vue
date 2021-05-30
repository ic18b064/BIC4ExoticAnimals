<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        {{ species }}
                    </h1>
                </header>
                <div class="card-content">
                    <div class="content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title'],
    mounted() {
        console.log('test2 mounted.')
    },data(){
        return{
            species: []
        }
    }, created() {
        axios.get('/list/species').then((response) => {
            this.species = response.data;
        });
    }
}
</script>

