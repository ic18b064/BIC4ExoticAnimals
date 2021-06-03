<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="card column is-half is-offset-one-quarter">
                <header class="card-header">
                    <h1 class="card-header-title">
                        {{species}}
                        Species
                    </h1>
                </header>
                <div class="card-content">
                    <div class="content">
                        <table>
                            <thead>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Created</th>
                            <th>Updated</th>
                            </thead>
                            <tr  v-for="item in species" :key="item.id" class="card-content">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.description}}</td>
                                <td>{{item.created_at | formatDate }}</td>
                                <td>{{item.updated_at | formatDate }}</td>
                            </tr>
                        </table>
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

