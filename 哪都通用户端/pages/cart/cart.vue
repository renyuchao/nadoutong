<template>
	<view class="content">
		<view class="tab">
			购物车
		</view>
		
		<!-- <view class="tabs">
			<u-tabs ref="tabs" :list="list" :is-scroll="false" :current="current" @change="change" bg-color="#fff"
				height="90" :show-bar="false" lineWidth="22" lineHeight="4" lineColor="#E44A1F" :activeStyle="{
            color: '#303133',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }" :inactiveStyle="{
            color: '#606266',
            transform: 'scale(1)'
        }"></u-tabs> -->
		<!-- </view> -->

		<view class="listBox">
			<u-list @scrolltolower="scrolltolower">
				<view class="">
					
				</view>
				<u-list-item v-for="(item, index) in indexList" :key="index" class="itemBox">
					<view class="item">
						<view style="display: flex;">
							<view class="title">{{item.store}}</view>
							<u-icon size="16" name="arrow-right" color="#666" :bold="true"
								style="margin-top: 2rpx;"></u-icon>
						</view>
						<view class="status">{{item.status}}</view>
					</view>
					<view class="contain">
						<view class="order">
							<u-image :src="item.url" width="134rpx" height="134rpx"></u-image>
							<view style="margin-left: 30rpx;">
								<view class="text">
									{{item.good}}
								</view>
								<view class="squ">
									{{item.squ}}
								</view>
							</view>
							<view style="margin-left: 100rpx;">
								<view class="price">
									￥{{item.price}}
								</view>
								<view class="num">
									共{{item.num}}份
								</view>
							</view>
						</view>

						<view class="footer">
							<u-button @click="submitOver" class="finish">查看详情</u-button>
							<u-button @click="submitOver" class="finish">重新支付</u-button>
							<u-button @click="submitOver" class="finish">去评价</u-button>
						</view>
					</view>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				inputStyle: {
					'border-radius': '40rpx !important',
					'text-align': 'center'
				},
				list: [{
					value: '1',
					name: '全部'
				}, {
					value: '2',
					name: '已取消'
				}, {
					value: '3',
					name: '已付款',
				}, {
					value: '4',
					name: '已完成'
				}, {
					value: '5',
					name: '退款',
				}],
				current: 0,
				indexList: [{
					store: '瑞星咖啡',
					status: '已退款',
					// startTime: '2024-09-30  15:00',
					price: '45.00',
					url: require('../../static/image/store.png'),
					num: '1',
					good: '焦糖玛奇朵',
					squ: '热、七分糖',
					// name: 'jack',
					phone: '17621576711',
					address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
					desc: '配送员要求态度好，配送快'
				}, {
					store: '瑞星咖啡',
					status: '已退款',
					// startTime: '2024-09-30  15:00',
					price: '45.00',
					url: require('../../static/image/store.png'),
					num: '1',
					good: '焦糖玛奇朵',
					squ: '热、七分糖',
					// name: 'jack',
					phone: '17621576711',
					address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
					desc: '配送员要求态度好，配送快'
				}, {
					store: '瑞星咖啡',
					status: '已退款',
					// startTime: '2024-09-30  15:00',
					price: '45.00',
					url: require('../../static/image/store.png'),
					num: '1',
					good: '焦糖玛奇朵',
					squ: '热、七分糖',
					// name: 'jack',
					phone: '17621576711',
					address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
					desc: '配送员要求态度好，配送快'
				}],
			}
		},
		onLoad() {

		},
		methods: {
			searchClick() {

			},
			scrolltolower() {
				// this.loadmore()
			},
			loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			},
			change(index) {
				console.log(index)
				this.current = index.index
			},
			submitOver() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 0 !important;
	}

	.content {
		.tab {
			height: 128rpx;
			line-height: 128rpx;
			background: #E44A1F;
			color: #fff;
			text-align: center;
		}

		.search {
			padding: 24rpx;
		}

		.tabs {
			width: 100%;
			height: 90rpx;
			// background: #FFFFFF;
			font-family: Microsoft YaHei;
			font-weight: 400;
			font-size: 30rpx;
			color: #666666 !important;
			line-height: 36rpx;
			margin-top: 6rpx;
		}

		.listBox {
			padding:0 24rpx 24rpx 24rpx;

			.itemBox {
				margin-top: 20rpx;
				background: #FFFFFF;
				border-radius: 20rpx;
				padding: 0 32rpx;


				.item {
					display: flex;
					font-family: Microsoft YaHei UI;
					font-weight: 400;
					font-size: 28rpx;
					color: #333333;
					line-height: 86rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.title {
						font-family: PingFang SC;
						font-weight: bold;
						font-size: 32rpx;
						color: #000000;
					}

					.status {
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 24rpx;
						color: #666666;
					}
				}

				.contain {
					.text {
						font-family: Microsoft YaHei UI;
						font-weight: 400;
						font-size: 36rpx;
						color: #000000;
				

						.span {
							font-size: 48rpx;
							font-weight: bold;
						}
					}

					.order {
						display: flex;
						font-family: Microsoft YaHei UI;
						font-weight: 400;
						font-size: 26rpx;
						color: #666666;
						align-items: center;
						margin: 30rpx 0 24rpx;

						.text {
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 30rpx;
							color: #333333;
							width: 240rpx;

						}

						.squ {
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 24rpx;
							color: #666666;
							margin-top: 16rpx;
						}

						.price {
							font-family: Microsoft YaHei;
							font-weight: bold;
							font-size: 36rpx;
							color: #E44A1F;

						}

						.num {
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 24rpx;
							color: #666666;
							margin-top: 14rpx;
							text-align: right;
						}
					}

					

					.footer {
						display: flex;
						float: right;
						margin-bottom: 36rpx;

						.finish {
							width: 148rpx;
							height: 56rpx;
							border-radius: 28rpx;
							border: 1px solid #E44A1F;
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 24rpx;
							color: #E44A1F;
							line-height: 30rpx;
							margin-left: 10rpx;
						}
					}
				}
			}
		}
	}
</style>