WeiPHP5.0，公众号与小程序结合的最佳开发框架,，它实现一个后台同时管理和运营多个客户端（公众号，微信小程序，后续将支持支付宝小程序，百度小程序等）

安装教程及二次开发文档：https://www.weiphp.cn/doc.html

问题反馈及建议：https://bug.weiphp.cn/index.php?s=/w10/Bug/Wap/invite/project_id/88

环境php7.3 mysql8 

代码框架：thinkphp5

php需要下载fileinfo扩展

宝塔部署网站目录根目录，运行目录为public

设置thinkphp伪静态，可以支持优化url

```
location / {
	if (!-e $request_filename){
		rewrite  ^(.*)$  /index.php?s=$1  last;   break;
	}
}
```

重新安装删除public/uploads/install.lock