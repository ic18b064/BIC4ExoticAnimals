<template>
    <div class="container">
        <div  class="columns is-multiline">
            <div  class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        animals

                    </h1>
                </header>
                <div >
                    <div class="content">
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>SpeciesID</th>
                                <th>Created</th>
                                <th>Updated</th>
                            </tr>
                            <tr  v-for="item in animals" :key="item.id" class="card-content">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.description}}</td>
                                <td>{{item.species_id}}</td>
                                <td>{{item.created_at}}</td>
                                <td>{{item.updated_at}}</td>
                            </tr>

                        </table>
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
