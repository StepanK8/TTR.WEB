<template>
    <div class="downloadLink">
        <img v-if="icon" class="downloadLink__img" src="@/assets/file.svg" alt="">
        <!-- <svg v-if="icon" class="downloadLink__img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> -->
        <!-- <path
            d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" />
        </svg> -->
        <a download :href="path">{{ name }}</a>
        <a download :href="path"><button class="downloadLink__button">скачать</button></a>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        folderName: String,
        icon: {
            type: Boolean,
            default: false,
        }

    },
    data() {
        return {
            path: '',
        }
    },
    created() {
        this.path = this.folderName + this.name
        console.log(this.folderName, this.name, this.path);
    },
}
</script>
<style lang="scss">
.downloadLink {
    text-align: left;
    display: flex;
    align-items: center;
    margin: 20px 0px;
    // padding: 10px 20px;
    // background: var(--lightGray);
    border-radius: 10px;

    &__img {
        width: 36px;
        object-fit: cover;
        margin-right: 10px;
        fill: var(--mainColor);
        opacity: 0.7;
    }

    &__button {
        margin-left: 20px;
        padding: 5px 20px 8px;
        border-radius: 100px;
        font-size: 16px;
        background: var(--lightBlue);
        color: white;
        cursor: pointer;

        &:hover {
            transition: .1s;
            background: var(--mainColor);
        }
    }
}
</style>