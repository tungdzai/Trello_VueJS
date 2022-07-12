<template>
<div class="infoWrap">
    <div class="infoLabel">
        Email :{{email}}
        <br>
        Password: {{password}}
    </div>
</div>
</template>

<script>
export default {
    name: "LoginMessage",
    // Lấy data từ component cha thông qua props
    props: ['email', 'password']
}
</script>

<style lang="scss" scoped>
.infoWrap {
        background: #fff;
        border: 1px solid #6E6E6E;
        padding: 24px;
        height: 250px;
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 24px;

        .infoLabel {
            font-weight: bold;
            color: #00AAAA;
            text-align: left;
        }
    }
</style>
