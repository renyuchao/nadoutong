<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>



<style>
	/*自定义的每个页面可直接使用公共css */
	@import 'api/commom.scss';
	@import 'api/index.rpx.scss';

	view {
		box-sizing: border-box;
	}

	/*每个页面都会生效的css */
	page {
		/*这里一定要设置，否则小程序会有问题 */
		width: auto;
		padding: 24rpx;
		box-sizing: border-box;
		background-color: #F8F8F8;
		font-family: Microsoft YaHei;
	}
</style>