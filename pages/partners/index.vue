<template>
    <section>
        <div class="container">
        <h1>Партнерство</h1>


        <ul>
            <li v-for="partner of 15" :key="partner">
                <a href="#" @click.prevent="openPartner(partner)">Партнери {{partner}}</a>
                </li>
        </ul>
        </div>
    </section>
</template>

<script>
export default {
    methods:{
        openPartner(partner){
            this.$router.push('/partners/' + partner)
        }
    }
}
</script>