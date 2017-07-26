<template>
    <div class="content-header">
        <h2><span v-text="title"></span></h2>
        <p class="content-header-time">
            <span v-text="time"></span>
            &nbsp&nbsp
            <span>(<span v-text="day"></span>)</span>
        </p>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            day() {
                let now = new Date();
                let day = now.getDay();
                let dList = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];
                return dList[day];
            },
            time() {
                let now = new Date();
                let year = now.getFullYear();
                let month = now.getMonth() + 1;
                month = month > 9 ? month : '0' + month; 
                let date = now.getDate();
                date = date > 9 ? date : '0' + date; 
                return `${year}/${month}/${date}`
            },
            ...mapGetters({
                title:'title'
            })
        }
    }
</script>
<style lang="scss" scoped>
    @import 'src/common/style/variable.scss';
    .content-header{
        width: 96%;
        margin-left: auto;
        margin-right: auto;
        flex-shrink: 0;
        height: 3.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            font-size: 1.5rem;
        }
        p{
            font-size: 1.2rem;
            span{
                font-size: $font-text;
            }
        }
    }
</style>