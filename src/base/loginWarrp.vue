<template>
    <div class="login">
        <form>
            <h3>{{title}}</h3>
            <slot></slot>
            <div class="btn-warrp">
                <a v-for="item in buttons" @click="buttonClick(item.click)" class="dry-button">{{item.text}}</a>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: '登錄'
            },
            buttons: {
                type: Array,
                default: [
                    {
                        text: '登錄',
                        click: 'login'
                    }
                ]
            }
        },
        methods: {
            buttonClick(event) {
                this.$emit(event)
            }
        }

    }
</script>
<style lang="scss" scoped>
    @import 'src/common/style/variable.scss';
    .login{
        display: flex;
        flex-grow: 1;
        justify-content: center;
        align-items: center;
        form{
            border-radius: .4rem;
            box-shadow: 0.15rem 0.2rem 0.3rem;
            background-color: #ffffff;    
            h3{
                text-align: center;
                border-radius: .4rem .4rem 0 0;
                background-color: $div-bgc;
                margin: 0 0 .6rem 0;
                line-height: 1.8rem;
                color: #fff;
            }
            .btn-warrp{
                padding: .5rem;
                display: flex;
                justify-content: space-around;
            }
        }
    }

</style>