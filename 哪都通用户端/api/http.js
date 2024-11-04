const BASE_URL = 'https://xxxxxxxxx'; //接口封装域名
 
export default({
	YM:'https://xxxxxxxx'  //全局公用域名
})
 
/**
 * 封装请求函数
 * @param {string} url - 请求的接口地址
 * @param {object} data - 请求的数据
 * @param {string} method - 请求的方法，默认为 GET
 * @returns {Promise} - 返回一个 Promise 对象
 */
export function request(url, data = {}) {
	// 假设你从本地存储或其他位置获取 token
	const token = uni.getStorageSync('token'); // 请根据实际情况获取 token
 
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}${url}`,
			method: 'POST',
			header: {
				token: `${token}`
			},
			data: data,
			success: (res) => {
				if (res.statusCode === 200) {
					resolve(res.data);
				} else {
					reject(new Error(`请求失败，状态码：${res.statusCode}`));
				}
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
}
 
 
export function uploadImage(uploadUrl) {
    return new Promise((resolve, reject) => {
        // 选择图片
        uni.chooseImage({
            success: (chooseImageRes) => {
                const tempFilePaths = chooseImageRes.tempFilePaths; // 获取选择的图片路径
 
                // 上传图片
                uni.uploadFile({
                    url: `${BASE_URL}${uploadUrl}`, // 接口地址
                    filePath: tempFilePaths[0], // 选择的第一张图片
                    name: 'file',
                    success: (res) => {
                        let Ima = JSON.parse(res.data); // 解析返回的数据
                        const imageUrl = Ima.data.url; // 提取图片 URL
                        resolve(imageUrl); // 返回上传的图片 URL
                    },
                    fail: (err) => {
                        console.error('上传图片失败:', err); // 处理上传失败的情况
                        reject(err); // 传递错误信息
                    }
                });
            },
            fail: (err) => {
                console.error('选择图片失败:', err); // 处理选择图片失败的情况
                reject(err); // 传递错误信息
            }
        });
    });
}
 