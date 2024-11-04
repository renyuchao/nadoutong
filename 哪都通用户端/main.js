import Vue from 'vue'
import App from './App'
import uView from 'uview-ui';
Vue.use(uView);
Vue.config.productionTip = false

import {
	request,
	uploadImage
} from 'api/http.js'; // 引入封装的请求函数
import uts from 'api/http.js'; // 引入封装的请求函数

Vue.prototype.$uts = uts.YM

Vue.prototype.$request = request;
Vue.prototype.$uploadImage = uploadImage;
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()