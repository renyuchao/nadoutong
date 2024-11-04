<template>
	<view>
		<u--form labelPosition="left" :model="form" :rules="rules" ref="uForm" label-width="170rpx">
			<u-form-item label="门店名称" prop="storeInfo.name" borderBottom ref="item1">
				<u--input v-model="form.storeInfo.name" border="none" placeholder="请输入真实名称"></u--input>
			</u-form-item>
			<u-form-item label="门店分类" prop="storeInfo.sort" borderBottom @click="showSort = true;" ref="item1"
				style="margin-top: 2rpx;">
				<u--input v-model="form.storeInfo.sort" disabled disabledColor="#ffffff" placeholder="请选择分类"
					border="none"></u--input>
				<u-icon slot="right" name="arrow-right"></u-icon>
			</u-form-item>
			<view class="location">
				<u-form-item label="门店位置"><u-switch slot="right" v-model="form.storeInfo.switchVal"
						activeColor="#f9ae3d" placeholder="需定位您的门店"></u-switch></u-form-item>
				<view class="mapBox">

				</view>
				<u-form-item label="详细地址" prop="storeInfo.address" borderBottom ref="address">
					<u--input v-model="form.storeInfo.address" border="none" placeholder="请输入详细地址"></u--input>
				</u-form-item>
			</view>
			<view class="photoBox">
				<u-form-item label="门脸照片" prop="storeInfo.photo">

				</u-form-item>
				<u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1"
					:previewFullImage="true"></u-upload>
			</view>
			<u-form-item label="营业时间" prop="storeInfo.time" borderBottom ref="item1" style="margin-top: 2rpx;">
				<view @click="show=true"  v-if="!show">
					<view >{{time}}</view>
					<u-icon slot="right" name="arrow-right"></u-icon>
				</view>
					<uni-datetime-picker v-else v-model="datetimerange" type="datetimerange" start="6:00" end="22:00"
						rangeSeparator="至" @change="changeLog" @clear="clearLog" @cancel="cancelLog"/>
			</u-form-item>
			<u-form-item label="营业状态" prop="radio" borderBottom ref="item1" style="margin-top: 2rpx;">
				<u-radio-group v-model="radio" class="radio">
					<u-radio v-for="(item, index) in radioList" :key="index" :label="item.name" :name="item.name"
						@change="radioChange">
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="联系电话" prop="storeInfo.phone" borderBottom ref="item1" style="margin-top: 2rpx;">
				<u--input v-model="form.storeInfo.phone" border="none" placeholder="请输入联系电话"></u--input>
			</u-form-item>
		</u--form>
		<u-action-sheet :show="showSort" :actions="actions" title="请选择分类" @close="showSort = false"
			@select="sortSelect">
		</u-action-sheet>
		
		<u-button @click="submitNext" class="nextBtn">下一步</u-button>
	</view>
</template>

<script>
	import UniDatetimePicker from '../../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue'
	export default {
		components: {
			UniDatetimePicker
		},
		data() {
			return {
				time:'06:00 ~ 20:00',
				datetimerange: ["2021-03-20 20:10:10", "2021-05-10 10:10:10"],
				filterDateStart: '',
				filterDateEnd: '',
				showDatePicker: false,
				filterDate: [],
				radio: "营业中",
				show: false,
				showSort: false,
				radioList: [{
						name: '营业中',
						disabled: true
					},
					{
						name: '未营业',
						disabled: false
					}
				],
				form: {
					storeInfo: {
						name: '',
						sort: '',
						address: '',
						switchVal: true,
						photo: '',
						phone: '',
						time: ''
					},
				},
				fileList1: [],
				actions: [{
						value: '1',
						name: '美食',
					},
					{
						value: '2',
						name: '水果',
					},
					{
						value: '3',
						name: '甜品',
					},
					{
						value: '4',
						name: '烧烤',
					},
				],
				rules: {
					'storeInfo.name': {
						type: 'string',
						required: true,
						message: '请输入真实名称',
						trigger: ['blur', 'change']
					},
					'storeInfo.sort': {
						type: 'string',
						required: true,
						message: '请选择分类',
						trigger: ['blur', 'change']
					},
				},
			};
		},

		methods: {
			sortSelect(e) {
				this.form.storeInfo.sort = e.name
				// this.$refs.uForm.validateField('userInfo.sort')
			},
			submitNext() {
				this.$router.push({
					path: '../store-photo/store-photo'
				})
			},
			afterRead() {

			},
			deletePic() {

			},
			
		
			changeLog(e) {
				console.log('---- confirmFilterDate ----:', e);
				// // 通过标志变量，把值赋值到正确的表单上
				// this.datetimerange = e;
				this.time = e[0] + '~' + e[1];
				
				this.show = false;
			},
			clearLog(){
					this.show = false;
			},
			cancelLog(){
				this.show = false;
			},
			radioChange(n) {
				console.log('radioChange', n);
			},
			formatter(type, value) {

				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				return value
			},
		},
		onReady() {
			//如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
			this.$refs.uForm.setRules(this.rules)
			// this.$refs.datetimePicker.setFormatter(this.formatter)
		}
	}
</script>

<style lang="scss" scoped>
	page {
		padding: 0;
	}

	/deep/.u-form-item__body {
		padding: 30rpx;
		background: #fff;
		box-shadow: 0rpx 1rpx 0rpx 0rpx rgba(0, 0, 0, 0.02);

	}


	/deep/.u-form-item__body__left__content__label span {
		font-family: Microsoft YaHei UI;
		font-weight: 400;
		font-size: 32rpx;
		color: #333333;
		line-height: 46rpx;

	}

	.location {
		margin-top: 16rpx;
		background: #fff;
	}

	.mapBox {
		height: 316rpx;
		background: #E5E5E5;
		border-radius: 10rpx;
		margin: 0 28rpx;
	}

	.nextBtn {
		width: 660rpx;
		padding: 46rpx;
		height: 100rpx;
		background: linear-gradient(90deg, #F9713D 0%, #FFD440 100%);
		border-radius: 50rpx;
		font-size: 36rpx;
		color: #FFFFFF;
		margin: 120rpx auto;
	}

	.photoBox {
		height: 400rpx;
		background: #fff;
		margin: 8px 0;
	}

	/deep/.u-upload__button {
		width: calc(100% - 56rpx) !important;
		height: 264rpx !important;
		background: red !important;
		margin: 0 14px;
	}

	/deep/.u-line {
		border-bottom: none !important;
	}

	::v-deep .u-radio {
		margin-right: 54rpx;
	}

	::v-deep .radio .u-radio__icon-wrap {
		background-color: $uni-bg-color !important;
	}

	.radio::v-deep .u-radio-group .u-radio .u-radio__icon-wrap__icon {
		width: 100%;
		height: 100%;
		position: relative;
		justify-content: center;
	}

	// ::v-deep .u-icon {
	// 	position: absolute;
	// 	left: 50%;
	// 	top: 50%;
	// 	transform: translate(-50%, -50%);
	// }
	.radio::v-deep .u-icon__icon span {
		display: none;
	}

	.radio::v-deep .u-icon__icon::before {
		display: inline-block;
		content: "" !important;
		width: 16rpx;
		height: 16rpx;
		background-color: #ccc;
		border: none;
		border-radius: 50%;
	}

	//  选中的背景颜色
	.radio::v-deep .pitchOn>.u-radio>.u-radio__icon-wrap>.u-radio__icon-wrap__icon>.u-icon>.u-icon__icon::before {
		background-color: #b9895e;
	}
</style>