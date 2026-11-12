/* ==========================================================================
   SITE CONFIG  ·  上线前只需要修改这一个文件
   --------------------------------------------------------------------------
   把所有「需要你确认 / 替换」的信息集中在此，其余文件无需改动。
   方括号里的 YOUR_XXX 全部是占位符，替换后主页即可直接发布。
   ========================================================================== */

window.SITE_CONFIG = {

  /* ---- 1. 账号与外链 ---------------------------------------------------- */

  // GitHub 用户名。GitHub Pages 仓库名必须是 <githubUser>.github.io
  githubUser: 'lixulong00',

  // Google Scholar 主页地址里的 user= 后面那串 ID。
  // 简历中只写了标识 "xulongli"，并非完整 ID，所以此处留占位。
  scholarId: 'YOUR_SCHOLAR_ID',

  // 简历中出现的 Scholar 标识，仅作为展示文字（不影响链接）
  scholarLabel: 'xulongli',

  // 可选外链：留空字符串则不显示该按钮
  orcid: '0009-0003-2088-8799',            // 例：'0000-0002-1825-0097'
  dblp: '',             // 例：'https://dblp.org/pid/123/4567.html'
  homepage: '',         // 学院个人主页等其他链接

  /* ---- 2. 联系方式 ------------------------------------------------------ */

  // 两个邮箱来自简历，可按需修改
  emailPrimary: 'lixulong@tyut.edu.cn',
  emailSecondary: 'lixulong0308@qq.com',

  // 手机号默认不公开展示。若要展示，填入字符串即可（例：'182-3486-6422'）
  phone: '',

  // CV 下载：文件位于 assets/cv.pdf（来自 简历.pdf，含手机号 182-3486-6422）。
  // 如需脱敏，直接替换该文件即可，此处无需改动；留空则首页不显示 CV 按钮。
  cvUrl: 'assets/cv.pdf',

  /* ---- 3. 单位信息 ------------------------------------------------------ */

  // 第二隶属单位 / 实验室。如不需要，改为 null 即可整行隐藏。
  // 注：此项来自你的工作背景记录，简历正文中未出现，请自行核对是否保留。
  lab: {
    en: 'Shanxi Key Laboratory of Industrial Internet Security (SKLIIS)',
    zh: '工业互联网安全山西省重点实验室（SKLIIS）'
  },

  /* ---- 4. 站点元信息 ---------------------------------------------------- */

  // 浏览器标签标题 / 分享标题
  siteTitle: {
    en: 'Xulong Li | Academic Homepage',
    zh: '李旭龙 | 学术主页'
  },
  siteDescription: {
    en: 'Xulong Li — Lecturer at Taiyuan University of Technology. Research on UAV-assisted industrial IoT, physical-layer security, and multi-agent reinforcement learning.',
    zh: '李旭龙，太原理工大学人工智能学院讲师，研究低空工业物联网、物理层安全与多智能体强化学习。'
  },

  // 页脚版权年份，留空则自动取当前年份
  copyrightYear: '',

  // 默认语言：'en' 或 'zh'
  defaultLang: 'en',

  // 论文列表默认展示条数（点「显示全部」后展开）
  publicationPreviewCount: 8
};
