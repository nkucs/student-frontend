# 前端框架使用说明
[帮助索引](https://www.jianshu.com/p/e2d4957993dd)
由于fork后没有issue, 不再fork开发, 请大家勤`git pull`


## 配置 yarn
可以通过以下代码检验是否安装了yarn
`yarn -v` or `yarn --version`

如果没有安装yarn可以尝试用npm代替, 如果不行可根据以下步骤安装yarn

#### macOS
可以通过Homebrew安装
```
brew install yarn
```


#### windows
可以通过[安装程序](https://yarnpkg.com/latest.msi)安装

#### [Ubuntu](https://yarnpkg.com/zh-Hans/docs/install#debian-stable)
```
sudo apt remove cmdtest
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## 安装

`yarn install --registry=https://registry.npm.taobao.org`

## 运行
`yarn run serve`


## 使用的UI

已配置Ant Design Vue, 可以参考的[文档](https://vue.ant.design/docs/vue/introduce-cn/)


## 发送请求

推荐做法如下：

1. 把`vue.config.js`70行的target修改为自己想要的后端，可以是本地(http://127.0.0.1) ，也可以是服务器地址，取决于自己要测的后端地址。

   注意加上`http://`或者`https://`
   
   注意url末尾没有斜杠
   
   根据观察，`yarn run serve`以后修改这里的url似乎不会被热加载，所以修改url后应重新`yarn run serve`。
   
   在最终的后端地址确定之前，本地修改这行地址就好了，不建议将这部分修改放到Git仓库中，否则容易引发冲突（即不add它，具体询问身边大佬）。
   


2. 在`src/api`文件夹下新建文件，可以参考`example.js`

   get方法指定params，post方法指定data

   ！！后端应获取对应参数，query_params或data！！
   
3. 调用例子在`Login.vue` 123行和168行

   查看具体效果：
   
   `yarn run serve`，打开网页，打开调试控制台（Windows Chrome: F12; Mac Chrome: command + option + i），点击“确定”按钮，就会看到如下输出：
   
   ![image](https://i.loli.net/2019/05/29/5cee73ed4f43975746.png)
 

## axios
实例
#### get
```js
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
#### post
```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
#### 同时发送多请求
```
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```
