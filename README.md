# 纸条?节点?小岛?岛屿?树洞?

目标平台：小程序、native、h5?，pc?、桌面?

总体技术选型：

​	小程序：taro 3（react、ts）+ taro-ui 3 等更新

​	native：react-native + react-native-ui-kitten 5 + react-navigation 5.7

​	h5：taro 或 react-native-web，哪个效果好选哪个

​	pc：展示页，选一个动画库？3D？

​	桌面：electron 或 react-native-windows，末优先级



​	后端：总体基于 serve less 架构，云函数、云队列、云数据库，方便便宜



## native

react-native + react-native-ui-kitten 5 + react-navigation 5.7 + react-redux 



redux-thunk？redux-saga？



### 遇到的坑

- react-navigation 5.x 多 Tab，Tab 和 Stack 嵌套，二级页面隐藏 Tabbar。官网的解决方案是 Stack 中嵌套 Tab，但此时 切换Tab ，是在 某一个 Stack 作用域内切换，需要手动切换至别的 Stack（做不到）。

  仔细看了一眼，官方提供的解决方案是在只包含一个 Stack 的情况下。。。。老老实实看 Index 隐藏。。。

  没想到有两篇文章。。 https://reactnavigation.org/docs/screen-options-resolution/ 

  官方一直说不建议设置不可见。。。

  最后就这样解决了，Tab 里面不留 Stack，全放在外面，到时候统一在 index.js 里配置路由（需要隐藏 tab 的页面），如果不需要隐藏tab，那就再在对应 page 下创建 Stack。

  ```jsx
  <Stack.Navigator>
    <Stack.Screen
      name="Message"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="HomeDetails"
      component={HomeDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MessageDetails"
      component={MessageDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MineDetails"
      component={MineDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>;
  ```

- 