<template>
	<view class="content">
		<view class="navbar">个人中心</view>
		<view class="head">
			<view class="avatar">
				<u-avatar :src="src" size="61"></u-avatar>
			</view>
			<view class="text">
				<view class="name">
					会飞的鱼
				</view>
				<view class="phone">
					15735046429
				</view>
			</view>
			<view class="margin-top:-56rpx">
				<u-icon style="margin-left: 260rpx;" size="14" name="arrow-right" color="#fff"></u-icon>
			</view>
		</view>
		<view class="order">
			<view class="orderBox">
				<view class="title">
					我的订单
				</view>
				<view class="text" @click="goOrder">
					<span>全部订单</span><u-icon size="10" name="arrow-right" color="#666"></u-icon>
				</view>
			</view>
			<u-grid :border="false" col="4" class="grid">
				<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex" class="sort_item" @click="navTab">
					<u-image :src="listItem.name" width="72rpx" height="72rpx"></u-image>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="basic">
			<view class="orderBox">
				<view class="title">
					基础功能
				</view>
				
			</view>
			<u-grid :border="false" col="4" class="grid">
				<u-grid-item v-for="(listItem,listIndex) in basic" :key="listIndex" class="sort_item" @click="navTab">
					<u-image :src="listItem.name" width="72rpx" height="72rpx"></u-image>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="menu">
			<u-cell-group>
				<!-- <u-cell title="店铺状态" isLink @click="goToLink('a')">
					<u-icon style="margin-right: 10rpx;" size="16" slot="icon"
						name="../../static/image/store_status.png"></u-icon>
				</u-cell>
				<u-cell title="商家收入" isLink @click="goToLink('b')">
					<u-icon style="margin-right: 10rpx;" size="16" slot="icon"
						name="../../static/image/money.png"></u-icon>
				</u-cell> -->
				<u-cell title="客服" isLink @click="goToLink('c')">
					<u-icon style="margin-right: 10rpx;" size="16" slot="icon"
						name="../../static/image/kefu.png"></u-icon>
				</u-cell>
				<u-cell title="意见反馈" isLink @click="goToLink('d')">
					<u-icon style="margin-right: 10rpx;" size="16" slot="icon"
						name="../../static/image/fede.png"></u-icon>
				</u-cell>
				<u-cell title="隐私政策" isLink @click="goToLink('e')">
					<u-icon style="margin-right: 10rpx;" size="16" slot="icon"
						name="../../static/image/safe.png"></u-icon>
				</u-cell>
				<u-cell title="用户协议" isLink @click="goToLink('f')">
					<u-icon style="margin-right: 10rpx;" size="16" slot="icon"
						name="../../static/image/user.png"></u-icon>
				</u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				list: [{
						name: require('../../static/image/fukuan.png'),
						title: '已付款',
						path: 'pages/index/store-good/store-good'
					},
					{
						name: require('../../static/image/cancel.png'),
						title: '已取消',
						path: 'pages/index/store-cer/store-cer'
					},
					{
						name: require('../../static/image/finish.png'),
						title: '已完成',
						path: '/pages/order/index'
					},
					{
						name: require('../../static/image/back.png'),
						title: '退款'
					},

				],
				basic: [{
						name: require('../../static/image/admin_address.png'),
						title: '我的地址',
						path: 'pages/index/store-cer/store-cer'
					},
					{
						name: require('../../static/image/colle.png'),
						title: '我的收藏',
						path: 'pages/index/store-cer/store-cer'
					},
					{
						name: require('../../static/image/admin_elva.png'),
						title: '我的评价',
						path: '/pages/order/index'
					},
					{
						name: require('../../static/image/admin_card.png'),
						title: '卡券'
					},

				],
			}
		},
		onLoad() {

		},
		methods: {
			goToLink(value) {
				switch (value) {
					case 'a':
						this.$router.push({
							path: '../index/store-cer/store-cer'
						})
						break;
					case 'b':
						this.$router.push({
							path: 'pages/index/store-cer/store-cer'
						})
						break;
				}
			},
			goOrder(){
				this.$router.push({
					path: '../order/index'
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 0 !important;
	}

	.navbar {
		font-family: PingFang SC;
		font-weight: 500;
		font-size: 36rpx;
		color: #FFFFFF;
		line-height: 36rpx;
		position: absolute;
		left: 50%;
		margin-left: -72rpx;
		top: 40rpx;
	}

	.head {
		height: 466rpx;
		background: url('../../static/image/bg_info.png');
		background-size: 100% 100%;
		display: flex;
		align-items: center;

		.avatar {
			margin-left: 42rpx;
			margin-top: -80rpx;
		}

		.text {
			margin-left: 24rpx;
			height: 44rpx;
			margin-top: -80rpx;

			.name {
				font-family: Microsoft YaHei UI;
				font-weight: bold;
				font-size: 32rpx;
				color: #F8F8F8;
				line-height: 23rpx;
			}

			.phone {
				font-family: Microsoft YaHei UI;
				font-weight: 400;
				font-size: 26rpx;
				color: #F8C13D;
				line-height: 22rpx;
				margin-top: 20rpx;
			}
		}

		.finish {
				margin-top: -80rpx;
			margin-left: 148rpx;
			width: 160rpx;
			height: 56rpx;
			border-radius: 30rpx;
			border: transparent !important;
			background-color: #fff;
			font-family: Microsoft YaHei;
			font-weight: bold;
			font-size: 23rpx;
			color: #EB6E3D;
			line-height: 18rpx;
		}
	}

	.order {
		width: 702rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: auto;
		margin-top: -160rpx;
		padding: 32rpx 30rpx 40rpx 30rpx;

		.orderBox {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #000000;
				line-height: 46rpx;
			}

			.text {
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
				display: flex;
			}
		}

		.grid {
			margin-top: 30rpx;

			.grid-text {
				margin-top: 18rpx;
				font-family: PingFang SC;
				font-weight: 400;
				font-size: 26rpx;
				color: #4E4E4E;
			}
		}

	}

	.basic {
		width: 702rpx;
		background: #FFFFFF;
		border-radius: 20rpx;
		margin: auto;
		margin-top: 20rpx;
		padding: 32rpx 30rpx 40rpx 30rpx;

		.orderBox {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #000000;
				line-height: 46rpx;
			}

			.text {
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #666666;
				line-height: 36rpx;
				display: flex;
			}
		}

		.grid {
			margin-top: 30rpx;

			.grid-text {
				margin-top: 18rpx;
				font-family: PingFang SC;
				font-weight: 400;
				font-size: 26rpx;
				color: #4E4E4E;
			}
		}
	}

	.menu {
		background-color: #fff;
		margin-top: 18rpx;

		/deep/ .u-cell .u-cell__body {
			height: 100rpx !important;

			.u-cell__title-text {
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 28rpx;
				color: #333333;
				line-height: 15rpx;
			}
		}

		/deep/ .u-line {
			border: none !important;
			border-bottom: 1rpx solid #F2F2F2 !important;
		}
	}
</style>