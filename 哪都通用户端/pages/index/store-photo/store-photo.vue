<template>
	<view class="content">
		<view class="box">
			<view class="title" style="margin-top: 10rpx;">
				门脸照片
			</view>
			<view class="uploadBox">
				<u-image src="../../../static/image/upload_pho.png" width="82rpx" height="58rpx">
				</u-image>
				<view class="text">请上传照片</view>
			</view>
		</view>
		<view class="box">
			<view class="title">
				上传营业执照
			</view>
			<view class="uploadBox">
				<u-image src="../../../static/image/upload_pho.png" width="82rpx" height="58rpx">
				</u-image>
				<view class="text">请上传照片</view>
			</view>
		</view>
		<view class="box">
			<view class="title">
				上传法人身份证正反面
			</view>
			<view class="phoBox">
				<u-image src="../../../static/image/upload_ze.png" width="402rpx" height="300rpx">
				</u-image>
				<view class="text" style="margin-top: 42rpx;">上传身份证信息面</view>
				<u-image src="../../../static/image/upload_fan.png" width="402rpx" height="300rpx">
				</u-image>
				<view class="text" style="margin-top: 42rpx;">上传身份证国徽面</view>
			</view>
		</view>

		<view class="footer">

			<view class="notice">注意事项</view>
			<view class="line">1.请手持当前日期的纸张和身份证拍照；</view>
			<view class="line">2.请确保照片的内容完整并清晰可见，仅支持jpg、png格式，图
				片大小小于5M；</view>
			<view class="line">3.请上传彩色图像；</view>

			<u-button @click="submitNext" class="finshBtn">完成</u-button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 30rpx;

		.box {
			.title {
				font-family: Microsoft YaHei UI;
				font-weight: 400;
				font-size: 32rpx;
				color: #333333;
				line-height: 46rpx;
				margin: 24rpx 0;
			}

			.phoBox {
				/deep/.u-image {
					margin: auto;
					margin-top: 44rpx;
				}

				.text {
					font-family: HiraginoSansGB;
					font-weight: normal;
					font-size: 24rpx;
					color: #999999;
					line-height: 46rpx;
					text-align: center;
					margin-top: 36rpx;
				}
			}

			.uploadBox {
				margin-top: 24rpx;
				width: 100%;
				height: 264rpx;
				background: #FFFFFF;
				border: 2rpx solid #E5E5E5;

				/deep/.u-image {
					margin: auto;
					margin-top: 74rpx;
				}

				.text {
					font-family: HiraginoSansGB;
					font-weight: normal;
					font-size: 24rpx;
					color: #999999;
					line-height: 46rpx;
					text-align: center;
					margin-top: 36rpx;
				}
			}


		}

		.footer {
			margin-top: 54rpx;

			.notice {
				font-family: HiraginoSansGB;
				font-weight: normal;
				font-size: 24rpx;
				color: #EB6E3D;
				line-height: 46rpx;
				margin-bottom: 22rpx;
			}

			.line {
				font-family: Microsoft YaHei;
				font-weight: 400;
				font-size: 24rpx;
				color: #B3B3B3;
				line-height: 36rpx;
			}

			.finshBtn {
				width: 659rpx;
				height: 99rpx;
				background: linear-gradient(90deg, #F9713D 0%, #FFD440 100%);
				border-radius: 49rpx;
				font-family: Microsoft YaHei UI;
				font-weight: 400;
				font-size: 36rpx;
				color: #FFFFFF;
				margin: 96rpx 0;
			}
		}
	}
</style>