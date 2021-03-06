import "./goods_common.css"
import "./goods_custom.css"
import "./goods.css"
import "./goods_theme.css"
import "./goods_mars.css"
import "./goods_sku.css"


import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'

import Swipe from 'components/Swipe.vue'

let {id}=qs.parse(window.location.search.substring(1))
let detailTags=['商品详情','本店成交']
let scrollTop
let view=new Vue({
    el:'#app',
    data:{
        id,
        detailsLists:null,
        dealLists:null,
        bannerLists:null,
        detailTags,
        curIndex:0,
        showSku:false,
        skuType:1,
        skuValue:1,
        addToCart:false
    },
    created(){
        this.getDetails()
    },
    methods:{
        getDetails(){
            axios.post(url.details,{id}).then((response)=>{
                this.detailsLists=response.data.data
                this.bannerLists=[]
                this.detailsLists.imgs.forEach((value)=>{
                    this.bannerLists.push({
                        img:value,
                        clickUrl:'javascript:;'
                    })
                })
            })
        },
        chageCurIndex(index){
            this.curIndex=index
            if (index){
                this.getDeal()
            }
        },
        getDeal(){
            axios.post(url.deal,{id}).then((response)=>{
                this.dealLists=response.data.data.lists
            })
        },
        changeSkuType(num){
            this.showSku=true
            this.skuType=num
        },
        closeSku(){
            this.showSku=false
        },
        changeSkuValue(num){
            if (num<0){
                if (this.skuValue===1) return 
                this.skuValue--
            } else {
                this.skuValue++
            }
        },
        addCart(){
            this.addToCart=true
            this.closeSku()
        }
    },
    components:{
        Swipe
    },
    mixins:[mixin],
    watch:{
        showSku(val,oldVal){
            if (val){
                scrollTop = document.scrollingElement.scrollTop
                document.body.style.top = -scrollTop + 'px'
            }
            document.body.style.position=val?'fixed':'static'
            // document.body.style.margin=val?`0 0 ${window.scrollY}px 0`:'0px'
            document.querySelector('html').style.overflow=val?'hidden':'auto'
            document.body.style.width=val?'100%':'auto'
            document.querySelector('html').style.height=val?'100%':'auto'
            if (!val){
                document.scrollingElement.scrollTop = scrollTop
            }
        }
    }
})
