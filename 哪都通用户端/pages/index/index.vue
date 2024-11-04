<template>
	<view class="content">
		<view class="tab">
			<u-icon label="长治医学院" size="16" name="map-fill" color="#fff" class="location"></u-icon>
		</view>
		<u-search placeholder="搜索" input-align="center" height="80" v-model="keyword" bg-color="#fff"
			:show-action="false" :input-style="inputStyle" @search="searchClick" class="search"></u-search>
		<u-swiper :list="listSwiper" keyName="image" showTitle :autoplay="false" circular imgMode="aspectFill"
			height="150" class="swiper" radius="5"></u-swiper>
		<view class="tags">
			<swiper>
				<swiper-item>
					<u-grid :border="false" col="4" class="grid">
						<u-grid-item v-for="(listItem,listIndex) in swiperList[0]" :key="listIndex" class="sort_item"
							@click="navTab">
							<u-image :src="listItem.name" width="72rpx" height="72rpx"></u-image>
							<text class="grid-text">{{listItem.title}}</text>
						</u-grid-item>
					</u-grid>

				</swiper-item>
				<swiper-item>
					<u-grid :border="false" col="4" class="grid">
						<u-grid-item v-for="(listItem,listIndex) in swiperList[1]" :key="listIndex" class="sort_item"
							@click="navTab">
							<u-image :src="listItem.name" width="72rpx" height="72rpx"></u-image>
							<text class="grid-text">{{listItem.title}}</text>
						</u-grid-item>
					</u-grid>

				</swiper-item>
			</swiper>
		</view>
		<!-- <view class="lab">
			<u-swiper :list="indexList" keyName="url" previousMargin="80" circular :autoplay="false" radius="5">
				
				<view class="title">
					热门推荐
				</view>
				<view slot="url " class="indicator">
					<view>
<u-image :src="listItem.name" width="72rpx" height="72rpx"></u-image>
							<text class="grid-text">{{listItem.title}}</text>
					</view>
				</view>
			</u-swiper>
		</view> -->

		<view class="listBox">
			<u-list>
				<view class="title">
					附近商家
				</view>
				<u-list-item v-for="(item, index) in indexList" :key="index" class="itemBox">
					<view class="contain" @click="goDetail(item)">
						<view class="order">
							<u-image :src="item.url" width="228rpx" height="156rpx" radius="5"> </u-image>
							<view style="margin-left: 30rpx;">
								<view class="text">
									{{item.good}}
								</view>
								<view class="squ">
									<span>月售{{item.num}}</span><span style="margin-left: 38rpx;">{{item.squ}}公里</span>
								</view>
								<view class="price">
									￥{{item.price}}起送
								</view>
							</view>
							<view style="margin-left: 30rpx;">
								<u-rate active-color="#FA3534" inactive-color="#b2b2b2"></u-rate>
							</view>
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
				listSwiper: [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
				listSort: [{
						name: require('../../static/image/food.png'),
						title: '美食',
					},
					{
						name: require('../../static/image/friut.png'),
						title: '水果',
					},
					{
						name: require('../../static/image/coffe.png'),
						title: '饮品',
					},
					{
						name: require('../../static/image/tian.png'),
						title: '甜点'
					},
					{
						name: require('../../static/image/swaage.png'),
						title: '服饰',
					},
					{
						name: require('../../static/image/flower.png'),
						title: '鲜花',
					},
					{
						name: require('../../static/image/phonr.png'),
						title: '手机',
					},
					{
						name: require('../../static/image/back.png'),
						title: '全部'
					},
					{
						name: require('../../static/image/food.png'),
						title: '美食',
					},
					{
						name: require('../../static/image/friut.png'),
						title: '水果',
					},
					{
						name: require('../../static/image/coffe.png'),
						title: '饮品',
					},
					{
						name: require('../../static/image/tian.png'),
						title: '甜点'
					},
					{
						name: require('../../static/image/fukuan.png'),
						title: '服饰',
					},
					{
						name: require('../../static/image/cancel.png'),
						title: '鲜花',
					},
					{
						name: require('../../static/image/phonr.png'),
						title: '手机',
					},
					{
						name: require('../../static/image/back.png'),
						title: '全部'
					},


				],
				keyword: '',
				inputStyle: {
					'border-radius': '40rpx !important',
					'text-align': 'center'
				},

				indexList: [{
					store: '瑞星咖啡',
					status: '已退款',
					// startTime: '2024-09-30  15:00',
					price: '45.00',
					url: 'https://cdn.uviewui.com/uview/album/1.jpg',
					num: '1',
					good: '焦糖玛奇朵',
					squ: '3',
					// name: 'jack',
					phone: '17621576711',
					address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
					desc: '配送员要求态度好，配送快'
				}, {
					store: '瑞星咖啡',
					status: '已退款',
					// startTime: '2024-09-30  15:00',
					price: '45.00',
						url: 'https://cdn.uviewui.com/uview/album/1.jpg',
					num: '1',
					good: '焦糖玛奇朵',
					squ: '2',
					// name: 'jack',
					phone: '17621576711',
					address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
					desc: '配送员要求态度好，配送快'
				}, {
					store: '瑞星咖啡',
					status: '已退款',
					// startTime: '2024-09-30  15:00',
					price: '45.00',
						url: 'https://cdn.uviewui.com/uview/album/1.jpg',
					num: '1',
					good: '焦糖玛奇朵',
					squ: '1.5',
					// name: 'jack',
					phone: '17621576711',
					address: '长治市 潞州区 太行北路沁方媛1栋3号楼502',
					desc: '配送员要求态度好，配送快'
				}],
				swiperList: []
			}
		},
		onLoad() {
			this.getData()
		},

		methods: {
			goDetail(e) {
				console.log(e)
				this.$router.push({
					path: 'pages/index/good-admin/good-admin',
					query: {
						data: e
					}
				})
			},
			searchClick() {

			},
			getData() {
				this.swiperList = this.group(this.listSort, 8)
				console.log(this.swiperList)
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

			},
			group(array, subGroupLength) {
				let index = 0;
				const newArray = [];
				while (index < array.length) {
					newArray.push(array.slice(index, index += subGroupLength));
				}
				return newArray;
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
			line-height: 380rpx;
			height: 380rpx;
			background: #E44A1F;
			color: #fff;

			/deep/.u-icon__label {
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 30rpx;
				color: #fff !important;
				line-height: 36rpx;
			}

			.location {
				padding: 24rpx;
			}
		}

		.search {
			margin: 0px 24rpx !important;
			margin-top: -296rpx !important;
		}


		.swiper {
			padding: 24rpx;
			background: none !important;
			margin-top: 24rpx;
		}

		.tags {
			margin-top: 4rpx;

			.u-grid-item {
				margin-top: 44rpx;

				.grid-text {
					font-family: PingFang SC;
					font-weight: 400;
					font-size: 26rpx;
					color: #4E4E4E;
					margin-top: 18rpx;
				}
			}
		}

		.listBox {
			margin: 24rpx;
			background: #FFFFFF;
			border-radius: 20rpx;

			.title {
				font-family: PingFang SC;
				font-weight: bold;
				font-size: 32rpx;
				color: #000000;
				margin: 30rpx;
				margin-bottom: 24rpx;
			}

			.itemBox {
				border-radius: 20rpx;
				padding: 0 28rpx;
				margin-bottom: 30rpx;

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

						.text {
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 30rpx;
							color: #333333;

						}

						.squ {
							font-family: PingFang SC;
							font-weight: 500;
							font-size: 24rpx;
							color: #666666;
							margin-top: 14rpx;
						}

						.price {

							font-family: Microsoft YaHei;
							font-weight: 400;
							font-size: 22rpx;
							color: #E44A1F;
							margin-top: 36rpx;

						}

						/deep/.uicon-star {
							padding: 0 !important;
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




				}
			}
		}
	}
</style>