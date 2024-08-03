<template>
    <div class="home">
        <div class="header">
            <el-input v-model="keyword" style="width: 100%" placeholder="请输入关键字" />
            <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        </div>
        <div class="book-content">
            <div class="book-item" v-for="item in bookList" :key="item.searchIdx" @click="handleClic(item)">
                <div class="img"><img :src="item.bookInfo.cover" alt="图片"></div>
                <div class="title">{{ item.bookInfo.title }}</div>
                <div class="author">作者 —— <span>{{ item.bookInfo.author }}</span></div>
                <div class="desc">{{ item.bookInfo.intro.substring(0, 25) + '...' }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons'
import axios from 'axios'

const keyword = ref('') // 搜索关键字
const bookList = ref() // 书籍列表

// 获取接口函数
const getBooksData = async () => {
    let res = await axios.get(`https://weread.qq.com/web/search/global?keyword=${keyword.value}&maxIdx=0&fragmentSize=10&count=30`)
    bookList.value = res.data.books
}
// 搜索事件
const handleSearch = () => {
    getBooksData()
}
// 点击事件
const handleClic = (item: any) => {
    console.log(item)
}
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    height: 100%;
    padding: 10px;
    -webkit-app-region: drag;
    .header {
        width: 100%;
        height: 50px;
        -webkit-app-region: no-drag;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .book-content {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        -webkit-app-region: no-drag;
        .book-item {
            flex: calc((100% - 20px) / 3);
            background-color: #fff;
            box-shadow: 1px 5px 2px #bf6262;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 10px;
            cursor: pointer;
            &:hover {
                background-color: #008c8c;
            }
            .img {
                width: 120px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .title {
                width: 200px; /* 设置容器宽度 */
                text-align: center;
                white-space: nowrap; /* 文字不换行 */
                overflow: hidden; /* 超出部分隐藏 */
                text-overflow: ellipsis; /* 使用省略号表示超出部分 */
            }
            .author span {
                color: red;
                font-weight: bold;
                font-size: 14px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .desc {
                color: rgb(9, 23, 172);
            }
        }
    }
}
</style>
