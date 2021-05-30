<template>
    <div class="container">
        <div  class="columns is-multiline">
            <div  class="card column">
                <header class="card-header">
                    <h1 class="card-header-title">
                        Animals
                    </h1>
                </header>
                <div>
                    <div style="height: 73vh; overflow: auto;" class="content">
                        <table>
                            <thead>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>SpeciesID</th>
                                <th>Created</th>
                                <th>Updated</th>
                            </thead>
                            <tr  v-for="item in animals" :key="item.id" class="card-content">
                                <td>{{item.id}}</td>
                                <td>{{item.name}}</td>
                                <td>{{item.description}}</td>
                                <td>
                                    <a @click="showSpecies(item.species_id)">
                                        {{item.species_id}}
                                    </a>
                                </td>
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
    },

    methods: {
        showSpecies(specieId){
            window.location.href = '/species/' + specieId;
        }
    }

}
</script>
