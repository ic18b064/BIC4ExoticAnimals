<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        <ul id="example-1">
                        <li v-for="item in animals" :key="item.id">
                            {{ item.name }}
                        </li>
                        </ul>
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
        console.log('index mounted.')
    }, data() {
        return {
            animals: []
        }
    },
    created() {
        axios.get('/list/animal').then((response) => {
            this.animals = response.data;
        });
    }

}
</script>
