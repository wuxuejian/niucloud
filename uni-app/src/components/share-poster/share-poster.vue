<template>
	<!-- 分享弹窗 -->
	<view @touchmove.prevent.stop class="share-popup">
	    <u-popup :show="sharePopupShow" type="bottom" @close="sharePopuClose" overlayOpacity="0.8">
	        <view @touchmove.prevent.stop>
				<image v-if="isPosterAnimation" class="poster-animation" :src="img('addon/shop/poster_animation.gif')" mode=""></image>
				<view v-if="isPosterImg" class="poster-img">
					<image :src="img(poster)" mode="aspectFit"></image>
				</view>
				<view class="share-content">
					<!-- #ifdef MP || APP-PLUS  -->
					<view class="share-box">
						<button class="share-btn" :plain="true" open-type="share">
							<view class="text-[#07c160] iconfont iconweixin11"></view>
							<text>分享给好友</text>
						</button>
					</view>
					
					<view class="share-box">
						<button class="share-btn" :plain="true" @click="saveGoodsPoster()">
							<view class="text-[#07c160] iconfont iconpengyouquan"></view>
							<text>保存海报</text>
						</button>
					</view>
					<!-- #endif -->
					
					<!-- #ifdef H5 -->
					<view class="share-box" @click="copyUrl">
						<button class="share-btn" :plain="true">
							<view class="text-[#07c160] iconfont iconfuzhilianjie"></view>
							<text>复制链接</text>
						</button>
					</view>
					<!-- #endif -->
				</view>
				<view class="share-footer" @click="sharePopuClose"><text>取消分享</text></view>
	        </view>
	    </u-popup>
	</view>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { img, copy } from '@/utils/common';
import { getPoster } from '@/app/api/system'

const props = defineProps({
    posterType: {
        type: String,
        default: ''
    },
    posterParam: {
        type: Object,
        default: {}
    },
	copyUrlParam: {
        type: String,
        default: ''
    }
})

let sharePopupShow = ref(false);
/************** 分享海报-start *******************/ 
// 复制
const copyUrl = () => {
	let data = ''
	data = location.origin +  location.pathname + props.copyUrlParam;
	copy(data, () => {
		sharePopupShow.value = false;
	});
}

const openShare = ()=>{
	sharePopupShow.value = true
	goodsPosterShowFn();
} 

//生成海报
let isPosterAnimation = ref(false)
let isPosterImg = ref(false)
// 获取分享海报
let poster = ref('');
const goodsPosterShowFn = () => {
	isPosterAnimation.value = true;
	isPosterImg.value = false;
	let obj = {
		type: props.posterType,
		param: props.posterParam
	}
	let startTime = Date.parse(new Date());
	getPoster(obj).then((res:any) => {
		poster.value = res.data && img(res.data) || '';
		
		let endTime = Date.parse(new Date());
		let time = endTime-startTime;
		let periodTime = 2200;
		if(time < periodTime){
			setTimeout(()=>{
				isPosterAnimation.value = false;
				isPosterImg.value = true;
			},(periodTime-time))
		}else{
			isPosterAnimation.value = false;
			isPosterImg.value = true;
		}
	}).catch(() => {
		sharePopuClose();
	})
}

// #ifdef MP || APP-PLUS
//小程序中保存海报
const saveGoodsPoster = () => {
	let url = img(poster.value);
	uni.downloadFile({
		url: url,
		success: (res) => {
			if (res.errMsg == "downloadFile:ok") {
				uni.saveImageToPhotosAlbum({
					filePath: res.tempFilePath,
					success: () => {
						uni.showToast({
							title: '保存成功',
							icon: 'none'
						});
					},
					fail: (err) => {
						uni.showToast({
							title: '保存失败，请稍后重试',
							icon: 'none'
						});
					}
				});
			}
		},
		fail: (err) => {
			uni.showToast({
				title: '保存失败，请稍后重试',
				icon: 'none'
			});
		}
	});
}
// #endif


const sharePopuClose = ()=>{
	sharePopupShow.value = false;
	isPosterAnimation.value = false;
	isPosterImg.value = false;
} 


defineExpose({
    openShare
})
/************** 分享海报-end *******************/ 
	
</script>

<style lang="scss" scoped>
.share-popup {
	:deep(.u-transition), :deep(.u-popup__content){
		background-color: transparent;
	}
	.share-content {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		overflow: hidden;
		display: flex;
		display: -webkit-flex;
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
		padding: 40rpx 15rpx ;
		background-color: #fff;

		.share-box {
			flex: 1;
			text-align: center;

			.share-btn {
				margin: 0;
				padding: 0;
				border: none;
				line-height: 1;
				height: auto;
				background: none;
				
				text {
					margin-top: 20rpx;
					font-size: 28rpx;
					display: block;
					color: #333;
				}
			}

			.iconfont {
				font-size: 80rpx;
				line-height: initial;
			}
			.icon-fuzhilianjie,
			.icon-pengyouquan,
			.icon-haowuquan,
			.icon-share-friend {
				color: #07c160;
			}
		}
	}

	.share-footer {
		background-color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-top: 2rpx solid #eee;
		text-align: center;
	}
}
.poster-animation{
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: -74vh;
	width: 542rpx;
	height: 960rpx;
}
.poster-img{
	position: absolute;
	top: -74vh;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
	flex-direction: column;
	image{
		width: 600rpx;
		height: 960rpx;
	}
	.save-btn{
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		background-color: var(--primary-color);
		border-radius: 10rpx;
		width: 90%;
		color: #fff;
		margin-top: 30rpx;
	}
}
</style>