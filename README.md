# 通过rust为konva图片添加滤镜
一个使用rust为konva添加图片滤镜的例子。
例子采用react框架编写。

# 预览链接
[预览链接](https://yirandidi.github.io/yr_rust_konva/)

# 如何运行该项目
1. 您需要先安装rust
https://www.rust-lang.org/
2. 您需要先安装wasm-pack
https://rustwasm.github.io/wasm-pack/installer/
3. 您需要先安装nodejs
https://nodejs.org/en/
4. 您需要先安装yarn
https://yarnpkg.com/
5. 您需要先安装rsw
````
cargo install rsw
````
6. 执行yarn安装依赖
7. 执行yarn rsw build编译rust代码
8. yarn dev 运行项目

# 用到的库
1. konva
https://konvajs.org/
2. rsw
https://github.com/rwasm/vite-plugin-rsw
3. Image
https://github.com/image-rs/image
4. imageproc
https://github.com/image-rs/imageproc
5. browser-fs-access
https://github.com/GoogleChromeLabs/browser-fs-access
