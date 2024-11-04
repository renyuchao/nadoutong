<template>
	<view class="content">
		<view class="tab">
			商品
		</view>
		<view class="head">
			<u-search placeholder="搜索" input-align="center" height="80" v-model="keyword" bg-color="#fff"
				:show-action="false" :input-style="inputStyle" @search="searchClick" class="search"></u-search>
			<view class="order">
				<u-avatar :src="detail.url" size="50"></u-avatar>
				<view style="margin-left: 30rpx;">
					<view class="text">
						{{detail.good}}
					</view>
					<view class="squ">
						<span>月售{{detail.num}}</span><span style="margin-left: 36rpx;">{{detail.squ}}公里</span>
					</view>
				</view>
				<view style="margin-left: 60rpx;">
					<u-rate active-color="#FA3534" inactive-color="#b2b2b2"></u-rate>
				</view>
			</view>
		</view>
		<view class="contain">
			<view class="navs">
				<u-tabs ref="tabs" :list="list" :is-scroll="false" :current="current" @change="change"
					:scrollable="false" bg-color="#fff" height="90" :show-bar="false" lineWidth="22" lineHeight="4"
					lineColor="#E44A1F" :activeStyle="{
				    color: '#303133',
				    fontWeight: 'bold',
				    transform: 'scale(1.05)'
				}" :inactiveStyle="{
				    color: '#606266',
				    transform: 'scale(1)'
				}"></u-tabs>
			</view>
			<view class="elvaBox" v-for="(item, index) in elvaList" :key="index" v-if="current == 1">
				<view class="top">
					<u-avatar :src="item.url" keyName="url" size="44"></u-avatar>
					<view class="mid">
						<view class="user">{{item.name}}</view>
						<view style="margin-left: -8rpx;">
							<u-rate active-color="#FA3534" inactive-color="#b2b2b2"></u-rate>
						</view>
					</view>
					<view class="seco">
						{{item.time}}
					</view>
				</view>
				<view class="bot">
					<view class="text">
						{{item.text}}
					</view>
					<view class="album">
						<view class="album__content">
							<u-album :urls="item.urls2" keyName="urls2" rowCount="4" multipleSize="64"></u-album>
						</view>
					</view>
				</view>
			</view>
			<view class="detailInfo" v-if="current == 2">
				<view class="imageBox">

				</view>
				<view class="textBox">
					<view class="title">
						瑞幸咖啡（英雄南路店）
					</view>
					<view class="address">
						长治市潞州区英雄南路108号
					</view>
					<view class="u-demo-block__content">
						<view class="album">
							<view class="album__content">
								<u-album :urls="urls2" rowCount="5" multipleSize="45"></u-album>
							</view>
						</view>
					</view>
					<view class="info">
						商家信息
					</view>
					<view class="phone">
						商家电话：15735046429
					</view>
					<view class="time">
						营业时间：06:00-22:00
					</view>
					<u-image src="../../../static/image/number.png" width="40rpx" height="40rpx" class="number">
					</u-image>
				</view>

			</view>
			<view class="u-menu-wrap" v-if="current == 0">
				<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop"
					:scroll-into-view="itemId">
					<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item"
						:class="[current == index ? 'u-tab-item-active' : '']" @tap.native.stop="swichMenu(index)">
						<text class="u-line-1">{{item.name}}</text>
					</view>
				</scroll-view>
				<scroll-view :scroll-top="scrollRightTop" scroll-y scroll-with-animation class="right-box"
					@scroll="rightScroll">
					<view class="page-view">
						<view class="class-item" :id="'item' + index" v-for="(item , index) in tabbar" :key="index">
							<view class="item-container">
								<view class="thumb-box" v-for="(item1, index1) in item.foods" :key="index1"
									@click="goToDetail">
									<image class="item-menu-image" :src="item1.icon" mode=""></image>
									<view>
										<view class="item-menu-name">{{item1.name}}</view>
										<view class="item-menu-mum">月售{{item1.cat}}</view>
										<view class="item-menu-price">￥{{item1.price}}</view>
										<view class="btnBox">
											<u-avatar src="../../../static/image/addGood.png" size="19"></u-avatar>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	import classifyData from '@/common.js';
	export default {
		data() {
			return {
				scrollTop: 0, //tab标题的滚动条位置
				oldScrollTop: 0,
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				itemId: '', // 栏目右边scroll-view用于滚动的id
				tabbar: classifyData,
				menuItemPos: [],
				arr: [],
				scrollRightTop: 0, // 右边栏目scroll-view的滚动条高度
				timer: null, // 定时器
				keyword: '',
				albumWidth: 0,
				elvaList: [{
						url: 'https://cdn.uviewui.com/uview/album/1.jpg',
						name: '会费的鱼',
						text: '味道挺香的，量大实惠，外卖配送快，很完美的一次购物体验！',
						time: '2024.10.01',
						urls2: [
							'https://cdn.uviewui.com/uview/album/1.jpg',
							'https://cdn.uviewui.com/uview/album/2.jpg',
							'https://cdn.uviewui.com/uview/album/3.jpg',
							'https://cdn.uviewui.com/uview/album/4.jpg',
							'https://cdn.uviewui.com/uview/album/5.jpg',
							'https://cdn.uviewui.com/uview/album/6.jpg',
							'https://cdn.uviewui.com/uview/album/7.jpg',
							'https://cdn.uviewui.com/uview/album/9.jpg',

						],

					},
					{
						url: 'https://cdn.uviewui.com/uview/album/1.jpg',
						name: '会费的鱼',
						text: '味道挺香的，量大实惠，外卖配送快，很完美的一次购物体验！',
						time: '2024.10.01',
						urls2: [
							'https://cdn.uviewui.com/uview/album/1.jpg',
							'https://cdn.uviewui.com/uview/album/2.jpg',
							'https://cdn.uviewui.com/uview/album/3.jpg',
							'https://cdn.uviewui.com/uview/album/4.jpg',
							'https://cdn.uviewui.com/uview/album/5.jpg',
							'https://cdn.uviewui.com/uview/album/6.jpg',
							'https://cdn.uviewui.com/uview/album/7.jpg',
							'https://cdn.uviewui.com/uview/album/9.jpg',

						],

					}

				],
				urls2: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',

				],

				inputStyle: {
					'border-radius': '40rpx !important',
					'text-align': 'center'
				},
				list: [{
					value: '1',
					name: '下单'
				}, {
					value: '2',
					name: '评价'
				}, {
					value: '3',
					name: '商家',
				}],
				current: 0,

				detail: ''
			}
		},
		onLoad() {
			this.detail = this.$route.query.data;
		},
		methods: {
			goToDetail() {
				this.$router.push({
					path: 'pages/index/store-cer/store-cer'
				})
			},
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
			change(index, e) {
				console.log(index)
				this.current = index.index;
			},
			submitOver() {

			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				console.log(index)
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (index == this.current) return;
				this.scrollRightTop = this.oldScrollTop;
				this.$nextTick(function() {
					this.scrollRightTop = this.arr[index];
					this.current = index;
					this.leftMenuStatus(index);
				})
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
						resolve();
					}).exec();
				})
			},
			// 观测元素相交状态
			async observer() {
				this.tabbar.map((val, index) => {
					let observer = uni.createIntersectionObserver(this);
					// 检测右边scroll-view的id为itemxx的元素与right-box的相交状态
					// 如果跟.right-box底部相交，就动态设置左边栏目的活动状态
					observer.relativeTo('.right-box', {
						top: 0
					}).observe('#item' + index, res => {
						if (res.intersectionRatio > 0) {
							let id = res.id.substring(4);
							this.leftMenuStatus(id);
						}
					})
				})
			},
			// 设置左边菜单的滚动状态
			async leftMenuStatus(index) {
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取右边菜单每个item到顶部的距离
			getMenuItemTop() {
				new Promise(resolve => {
					let selectorQuery = uni.createSelectorQuery();
					selectorQuery.selectAll('.class-item').boundingClientRect((rects) => {
						// 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
						if (!rects.length) {
							setTimeout(() => {
								this.getMenuItemTop();
							}, 10);
							return;
						}
						rects.forEach((rect) => {
							// 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
							this.arr.push(rect.top - rects[0].top);
							resolve();
						})
					}).exec()
				})
			},
			// 右边菜单滚动
			async rightScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (this.timer) return;
				if (!this.menuHeight) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
				}
				setTimeout(() => { // 节流
					this.timer = null;
					// scrollHeight为右边菜单垂直中点位置
					let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
					for (let i = 0; i < this.arr.length; i++) {
						let height1 = this.arr[i];
						let height2 = this.arr[i + 1];
						// 如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可
						if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
							this.leftMenuStatus(i);
							return;
						}
					}
				}, 10)
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

		.head {
			height: 260rpx;
			background: #000000;
			padding: 28rpx 24rpx !important;


			.search {
				width: 177rpx;
				height: 60rpx;
				background: #FFFFFF;
				border-radius: 30rpx;

			}

			.order {
				height: 160rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				margin-top: 96rpx;
				display: flex;
				align-items: center;
				padding: 26rpx;

				.text {
					font-family: PingFang SC;
					font-weight: 600;
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
			}
		}

		.contain {
			margin-top: 108rpx;
			background: #fff;
			height: 800rpx;

			.navs {
				padding: 20rpx 42rpx 10rpx;
				border-bottom: 2rpx solid #F2F2F2;
				;
			}

			.elvaBox {
				padding: 36rpx;
				background: #fff;

				.top {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.mid {
						margin-left: -196rpx;

						.user {
							font-family: PingFang SC;
							font-weight: 600;
							font-size: 32rpx;
							color: #333333;
						}

					}

					.seco {
						font-family: Arial;
						font-weight: 400;
						font-size: 26rpx;
						color: #999999;
					}
				}

				.bot {
					margin-left: 114rpx;
					margin-top: 12rpx;

					.text {
						font-family: Source Han Sans CN;
						font-weight: 400;
						font-size: 26rpx;
						color: #666666;
						line-height: 40rpx;
					}

					.album {
						margin-top: 16rpx;
					}
				}
			}

			.detailInfo {
				margin: 38rpx 58rpx;
				background: #FFFFFF;
				box-shadow: 0rpx 0rpx 5rpx 0rpx rgba(197, 196, 196, 0.4);
				border-radius: 10rpx;
				padding-bottom: 70rpx;

				.imageBox {
					height: 350rpx;
					background: #ccc;
				}

				.textBox {
					margin-left: 38rpx;

					.title {
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 30rpx;
						color: #000000;
						margin-top: 20rpx;
					}

					.address {
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 26rpx;
						color: #666666;
						margin-top: 12rpx;
					}

					.u-demo-block__content {
						margin-top: 16rpx;

					}

					.info {
						font-family: PingFang SC;
						font-weight: 500;
						font-size: 24rpx;
						color: #333333;
						margin-top: 34rpx;
					}

					.phone {
						font-family: Source Han Sans CN;
						font-weight: 400;
						font-size: 24rpx;
						color: #999999;
						margin-top: 10rpx;
					}

					.time {
						font-family: Source Han Sans CN;
						font-weight: 400;
						font-size: 24rpx;
						margin-top: 10rpx;
						color: #999999;
					}

					.number {
						position: absolute;
						right: 140rpx;
						bottom: 170rpx;
					}
				}
			}

			.u-menu-wrap {
				flex: 1;
				display: flex;
				overflow: hidden;
				background: #fff;
			}


			.search {
				padding: 12rpx 24rpx 36rpx 24rpx;
				display: block;
				flex-direction: column;
				flex: none;
			}

			.u-tab-view {
				width: 148rpx;
				height: 100%;
			}

			.u-tab-item {
				height: 70rpx;
				background: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: Source Han Sans CN;
				font-weight: 400;
				font-size: 26rpx;
				color: #666666;
				line-height: 36rpx;
			}

			.u-tab-item-active {
				position: relative;
				font-size: 28rpx;
				font-weight: 400;
				color: #FFFFFF;
				background: #E44A1F;
			}

			.u-tab-item-active::before {
				content: "";
				position: absolute;
				// border-left: 4px solid $u-type-primary;'
				height: 32rpx;
				left: 0;
				top: 39rpx;
			}



			.right-box {
				background-color: rgb(250, 250, 250);
			}

			.class-item {
				margin-bottom: 30rpx;
				background-color: #fff;
				padding: 30rpx;
				border-left: 1px solid #F6F6F6;
				border-radius: 8rpx;
			}

			.class-item:last-child {
				min-height: 100vh;
			}

			/deep/.u-search__action {
				display: none !important;
			}

			.thumb-box {
				display: flex;
				margin-top: 28rpx;
			}



			.item-menu-image {
				width: 168rpx;
				height: 176rpx;
				background: #F6DBD3;
				border-radius: 10rpx;
			}

			.uni-scroll-view-content {
				background-color: #fff !important;
			}

			.item-menu-mum {
				height: 24rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 24rpx;
				color: #666666;
				margin-left: 28rpx;
				margin-top: 10rpx;
			}

			.item-menu-name {
				height: 30rpx;
				font-family: Microsoft YaHei UI;
				font-weight: 600;
				font-size: 30rpx;
				color: #333333;
				margin-top: 24rpx;
				margin-left: 28rpx;
			}

			.item-menu-price {
				height: 22rpx;
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 22rpx;
				margin-left: 28rpx;
				margin-top: 40rpx;
				color: #E44A1F;
			}

			.btnBox {
				margin-left: 320rpx;
				margin-top: -24rpx;
			}

			.btn {
				width: 104rpx;
				height: 50rpx;
				background: #FDDC13;
				border-radius: 25rpx;
				border: none;
				font-family: Microsoft YaHei UI;
				font-weight: 400;
				font-size: 24rpx;
				color: #000000;
			}

			.btnXia {
				font-family: Microsoft YaHei UI;
				font-weight: 400;
				font-size: 24rpx;
				color: #666;
				background: #fff;
				border: 2rpx solid #666;
				margin-right: 28rpx;
			}

			.btnBox {
				display: flex;
			}

			.slot-icon {
				position: fixed;
				bottom: 34rpx;
				right: 28rpx;
				z-index: 99;
			}
		}


	}
</style>