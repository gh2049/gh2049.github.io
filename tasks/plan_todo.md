# 视觉风格重构: 现代报纸与重工业风交织 (Modern Newspaper & Industrial Print)

针对“一行三个卡片略显呆板”的反馈，我们将引入高度动态的、具有极强结构感的**现代报纸排版 (Editorial/Newspaper Layout)**，并在细节中融入**重工业风 (Heavy Industrial)**。

## 1. 核心视觉定义 (Aesthetic Definition)
- [x] **字体革新 (Typography)**: 引入衬线字体 `Cormorant Garamond` (大标题与引言) 与现代干净的无衬线体 `DM Sans` (正文)，并辅以 `DM Mono` (元数据与数字)。
- [x] **调色板重构 (Colors)**: 保持高级的暖白黑墨报纸基调，局部加入抢眼的印刷强调色（Terracotta、Ochre）。
- [x] **环境纹理 (Textures)**: 底噪 (Subtle paper grain) 模拟实体书页纸张质感。

## 2. 空间排版与组件解构 (Spatial & Components) **[大幅度更新]**
- [x] **重工业报刊风格排版 (Brutalist Newspaper Layout)**: 
  - 彻底干掉平庸的 3 栏等宽网格。
  - **新闻主标题**: 引入“头版头条 (Headline Feature)”概念。列表的第一个项目会横跨多列，呈现超大字号与极重的黑线边框 (`border-t-4 border-text`)。
  - **排版流 (Masonry/Columns)**: 其他新闻不再是各自为阵的“小盒子”，而是去掉了四周封闭边框，变成具有报纸栏位感的“带顶部粗线 (Top-bordered) 资讯块”，并使用多列瀑布流 (`columns-2/3`) 或非对称网格。
  - **紧凑数据面板**: GitHub 榜单将模拟“报纸分类广告/股票行情表”，采用更为干练紧凑的排版布局，减少废话，提高密度感。

## 3. 动效设计编排 (Motion Architecture)
- [x] **优雅登场 (Elegant Reveals)**: 将卡片以极尽柔和的透明度与微偏移从下方浮现 (Soft drift up)，就像翻开书页。
- [x] **阅读交互反馈**: Hover 效果变为经典的底部划线扫过 (Underline sweep) 或者整个模块的墨水偏移投影 (Solid Sharp Shadow)，带来独特的精致回馈。

## 4. 落地与自测
- [ ] **重构组件**: 更新 `App.tsx` 和 `CardItem.tsx` 引入 Feature Card 和 List Card。
- [ ] **编译产出**: 使用 Vite 重新编译部署，保证在 Subagent 中通过视觉测验。
