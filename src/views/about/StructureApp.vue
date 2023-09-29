<template >
    <div>
        <div class="structure__grid">
            <div class="structure__card">
                <h2>Краснодар (центральный офис)</h2>
                <img class="structure__img" src="@/assets/structure/1.png" alt="">
            </div>

            <div class="structure__card">
                <h2>ст-ца Новопокровская</h2>
                <img class="structure__img" src="@/assets/structure/2.png" alt="">
            </div>

            <div class="structure__card">
                <h2>г. Апшеронск</h2>
                <img class="structure__img" src="@/assets/structure/3.jpeg" alt="">
            </div>

            <div class="structure__card">
                <h2>г. Новороссийск</h2>
                <img class="structure__img" src="@/assets/structure/4.jpeg" alt="">
            </div>

        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.structure {
    &__img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        margin-bottom: 40px;
    }

    &__grid {
        margin: 100px auto;
        max-width: 900px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    &__card {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
}
</style>