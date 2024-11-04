<template>
	<view class="content">
		<view class="tab">
			<view>
				订单详情
			</view>
			<view class="head">
				<view class="left">
					<view class="box">
						<u-image src="../../static/image/fin.png" width="40rpx" height="35rpx"></u-image>
						<view class="text">订单已完成</view>
					</view>
					<view class="text1">
						欢迎下次购买
					</view>
				</view>

				<view class="right">
					<!-- <u-image src="../../static/image/msg_order.png" width="40rpx" height="40rpx"></u-image> -->
					<u-icon name="chat" color="#fff" size="25"></u-icon>
					<view class="text">联系商家</view>
				</view>
			</view>

		</view>
		<view class="address">
			<u-cell size="large" title="张静  15735046429" label="山西省长治市城区  红枫理想城" isLink :border="false"></u-cell>
		</view>


		<view class="listBox">
			<view class="itemBox">
				<view class="item">
					<view style="display: flex;">
						<view class="title">{{list[0].store}}</view>
						<u-icon size="16" name="arrow-right" color="#666" :bold="true"
							style="margin-top: 2rpx;"></u-icon>
					</view>

				</view>
				<view class="contain">
					<view class="order" v-for="(order, index) in list" :key="index">
						<u-image :src="order.url" width="150rpx" height="150rpx" radius="5"> </u-image>
						<view style="margin-left: -244rpx;">
							<view class="text">
								{{order.good}}
							</view>
							<view class="squ">
								<span>月售{{order.num}}</span>
							</view>
							<view class="price">
								￥{{order.price}}
							</view>
						</view>
						<view class="num">
							<span>x</span>{{order.num}}
						</view>
					</view>

					<view class="total">
						<u-cell title="包装费" value="￥2.00" :border="false"></u-cell>
						<u-cell title="配送费" value="￥5.00" :border="false"></u-cell>
						<u-cell title="共计" value="￥54.00" :border="false"></u-cell>
					</view>

				</view>
			</view>
			</u-list>
			<view class="descBox">
				<u-cell title="配送时间" value="立即配送" :border="false"></u-cell>
				<u-cell title="餐具数量" value="1份" :border="false"></u-cell>
				<u-cell title="配送员" value="程成" :border="false"></u-cell>
				<u-cell title="备注" :border="false"></u-cell>
				<view class="desc">
					要特别热的，多加点糖
				</view>

			</view>
			<view class="payBox">
				<u-cell title="支付方式" value="微信支付" :border="false"></u-cell>
				<u-cell title="订单编号" value="122550487935188252" :border="false" >
					<u-button text="复制" slot="right-icon" class="copy" @click="copy"></u-button>
				</u-cell>
				<u-cell title="下单时间" value="2024.05.26" :border="false"></u-cell>
			</view>
		</view>
	
			<view class="footer">
				<u-button @click="submitOver" class="finish">删除订单</u-button>
				<u-button @click="submitOver" class="finish bg">重新支付</u-button>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						store: '瑞星咖啡',
						status: '已退款',
						// startTime: '2024-09-30  15:00',
						price: '45.00',
						url: 'https://cdn.uviewui.com/uview/album/1.jpg',
						num: '1',
						good: '焦糖玛奇朵',
						squ: '热、七分糖',
						// name: 'jack',
						phone: '17621576711',
						address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
						desc: '配送员要求态度好，配送快'
					},
					{
						store: '瑞星咖啡',
						status: '已退款',
						// startTime: '2024-09-30  15:00',
						price: '45.00',
						url: 'https://cdn.uviewui.com/uview/album/1.jpg',
						num: '1',
						good: '焦糖玛奇朵',
						squ: '热、七分糖',
						// name: 'jack',
						phone: '17621576711',
						address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
						desc: '配送员要求态度好，配送快'
					},
				]

			}
		},
		onLoad() {

		},
		methods: {
			copy() {

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
			height: 294rpx;
			line-height: 128rpx;
			background: #E44A1F;
			color: #fff;
			text-align: center;

			.head {
				display: flex;
				justify-content: space-between;

				.left {

					line-height: 15px;
					margin-left: 56rpx;

					.box {
						display: flex;

						.text {
							margin-left: 20rpx;
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 36rpx;
							color: #fff;
							line-height: 36rpx;
						}
					}

					.text1 {
						margin-top: 18rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						font-size: 24rpx;
						color: #fff;
						line-height: 36rpx;
						margin-left: 24rpx;
					}
				}

				.right {
					line-height: 15px;
					margin-right: 62rpx;
					display: flex;
					flex-direction: column;
					align-items: center;

					.text {
						margin-top: 8rpx;
					}
				}
			}
		}

		.address {
			margin: 20rpx 24rpx 18rpx;
			background: #fff;
			border-radius: 10rpx;

			/deep/ .u-cell__title-text--large {
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 30rpx;
				color: #333333;
				line-height: 38rpx;
			}

			/deep/ .u-cell__label--large {
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 26rpx;
				color: #333333;
				line-height: 38rpx;
			}
		}



		.listBox {
			padding: 0 24rpx 24rpx 24rpx;

			.itemBox {
				margin-top: 20rpx;
				background: #FFFFFF;
				border-radius: 20rpx;
				padding: 0 32rpx 48rpx;


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
					.order {
						display: flex;
						font-family: Microsoft YaHei UI;
						font-weight: 400;
						font-size: 26rpx;
						color: #666666;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 30rpx;

						.text {
							font-family: PingFang SC;
							font-weight: 600;
							font-size: 30rpx;
							color: #333333;
							margin-top: 14rpx;

						}

						.squ {
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 24rpx;
							color: #666666;

							margin-top: 10rpx;
						}

						.price {

							font-family: Microsoft YaHei;
							font-weight: 400;
							font-size: 22rpx;
							color: #E44A1F;
							margin-top: 14rpx;

						}



						.num {
							font-family: Arial;
							font-weight: 600;
							font-size: 34rpx;
							color: #333333;
							line-height: 12rpx;

							span {
								width: 17rpx;
								height: 17rpx;
								font-family: Microsoft YaHei;
								font-weight: 600;
								font-size: 40rpx;
								color: #333333;
								line-height: 12rpx;
							}
						}
					}

					.total {
						font-family: PingFang SC;
						font-weight: 600;
						font-size: 30rpx;
						color: #333333;

						/deep/.u-cell__body {
							padding: 10rpx 0 !important;

							/deep/ .u-cell__value {
								font-family: Microsoft YaHei;
								font-weight: 600;
								font-size: 24rpx;
								color: #E44A1F;
								line-height: 19rpx;
							}

							/deep/ .u-cell__value:last-child {
								font-size: 30rpx;
							}
						}
					}

					
				}
			}

			.descBox ,.payBox {
				margin-top: 18rpx;
				font-family: PingFang SC;
				font-weight: 600;
				font-size: 30rpx;
				color: #333333;
				background: #FFFFFF;
				border-radius: 20rpx;
				padding: 34rpx 28rpx;

				/deep/.u-cell__body {
					padding: 10rpx 0 !important;

					/deep/.u-cell__body__content {
						flex: inherit;
					}

					/deep/.u-cell__title {
						width: 120rpx;
					}

					/deep/ .u-cell__value {
						font-family: Microsoft YaHei;
						font-weight: 600;
						font-size: 28rpx;
						color: #333333;
						margin-left: 58rpx;
					}

					/deep/ .u-cell__value:last-child {
						font-size: 30rpx;
					}
				}
				.desc{
					height: 158rpx;
					background: #EEECEC;
					font-family: PingFang SC;
					font-weight: 500;
					font-size: 24rpx;
					color: #333333;
					padding: 30rpx;
					margin-top: 10rpx;
				}
			}
			.payBox{
				font-family: PingFang SC;
				.copy{
					width: 104rpx;
					height: 50rpx;
					border-radius: 25rpx;
					border: 1px solid #F09A7F;
					font-family: Microsoft YaHei UI;
					font-weight: 400;
					font-size: 24rpx;
					color: #EB6E3D;
					margin-left:34rpx;
				}
			}
		}
		.footer {
			display: flex;
		    height: 50px;
		    background: #FFFFFF;
		    border: 1px solid #F1F1F1;
		    align-items: center;
		    justify-content: flex-end;
		    padding: 12px;
			.finish {
				width: 148rpx;
				height: 55rpx;
				border-radius: 28rpx;
				border: 1px solid #EB6E3D;
				font-family: PingFang SC;
				font-weight: 500;
				font-size: 24rpx;
				color: #EB6E3D;
				line-height: 30rpx;
				margin-left: 40rpx;
			}
			.bg{
					color: #fff;
				background-color: #E44A1F;
			}
		}
	}
</style>