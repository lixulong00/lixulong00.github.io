/* ==========================================================================
   SITE DATA  ·  全部内容数据（中英双语）
   --------------------------------------------------------------------------
   所有内容均整理自：简历.pdf、一作论文总结.docx、非一作论文.docx、专利.docx
   双语字段统一写成 { en: '...', zh: '...' }，由 main.js 按当前语言取值。
   ========================================================================== */

window.SITE_DATA = {

  /* ---------------------------------------------------------------- 身份 */
  identity: {
    name: { en: 'Xulong Li', zh: '李旭龙' },
    nameFull: { en: 'Xulong Li (李旭龙)', zh: '李旭龙 (Xulong Li)' },
    title: {
      en: 'Lecturer, College of Artificial Intelligence',
      zh: '讲师 · 人工智能学院'
    },
    affiliation: {
      en: 'Taiyuan University of Technology',
      zh: '太原理工大学'
    },
    location: { en: 'Taiyuan, Shanxi, China', zh: '山西 · 太原' },
    birth: { en: 'Born Mar 1997 · Shanxi Lvliang', zh: '1997 年 3 月生 · 山西吕梁' },
    party: { en: 'Member of the CPC', zh: '中共党员' }
  },

  /* -------------------------------------------------------------- About */
  about: {
    paragraphs: [
      {
        en: 'I am a Lecturer at the College of Artificial Intelligence, Taiyuan University of Technology, joining in August 2026. I received my Ph.D. in Information and Communication Engineering from the University of Science and Technology Beijing in July 2026 under the supervision of Prof. Wei Huangfu, through a combined Master–Ph.D. program (advisor during the Master phase: Prof. Keping Long). I completed my B.Eng. in Electronic Information Engineering at Shanxi University in 2020.',
        zh: '2026 年 8 月起任太原理工大学人工智能学院讲师。2026 年 7 月毕业于北京科技大学，获信息与通信工程博士学位（硕博连读），导师皇甫伟教授；硕士阶段导师隆克平教授。2020 年毕业于山西大学电子信息工程专业，获学士学位。'
      },
      {
        en: 'My research lies at the intersection of multi-agent deep reinforcement learning and low-altitude industrial Internet of Things. I work on secure UAV-assisted data collection, computation offloading and resource allocation, information-age (AoI) minimization under physical-layer security constraints, and two-timescale reconfiguration of network slices and polymorphic networks. Methods I develop build on TD3 / SAC / PPO / MAPPO / MASAC, combined with random network distillation, attention mechanisms, cooperative-game Shapley values, primal–dual optimization and transfer learning.',
        zh: '研究聚焦多智能体深度强化学习与低空工业物联网的交叉方向，包括无人机辅助的安全数据收集、计算卸载与资源分配、物理层安全约束下的信息年龄（AoI）优化，以及网络切片与多态网络的两时间尺度动态重构。方法上以 TD3 / SAC / PPO / MAPPO / MASAC 为基础，结合随机网络蒸馏置信评估、注意力机制、合作博弈 Shapley 值、原对偶优化与迁移学习，重点解决动态性、异构性、部分可观测性、维度变化与安全约束下的决策问题。'
      },
      {
        en: 'During my doctoral study I published 12 first-author SCI/EI papers (6 in CAS Q1 Top journals, 2 in CAS Q2 Top journals, including one ESI Highly Cited Paper), co-authored 10 further papers, and filed 10 patents. I have served as a reviewer for IEEE TWC, TMC, TCCN and TITS, and presented work orally in English at ACM CoNEXT 2025 and IEEE UCom 2023/2025.',
        zh: '博士在读期间以第一作者发表 SCI/EI 论文 12 篇（中科院一区 Top 6 篇、二区 Top 2 篇，含 ESI 高被引论文 1 篇），合作发表论文 10 篇，申请/授权专利 10 项。长期担任 IEEE TWC、TMC、TCCN、TITS 等期刊审稿人，并在 ACM CoNEXT 2025、IEEE UCom 2023/2025 等会议进行全英文口头报告。'
      }
    ],
    interestsShort: {
      en: ['Multi-Agent Deep RL', 'UAV-Assisted Industrial IoT', 'Physical-Layer Security', 'Mobile Edge Computing', 'AoI & Data Freshness', 'Network Slicing'],
      zh: ['多智能体深度强化学习', '无人机辅助工业物联网', '物理层安全', '移动边缘计算', '信息年龄与数据新鲜度', '网络切片']
    }
  },

  /* --------------------------------------------------------------- News */
  news: [
    { date: { en: 'Aug 2026', zh: '2026.08' }, text: { en: 'Joined Taiyuan University of Technology as a Lecturer at the College of Artificial Intelligence.', zh: '入职太原理工大学人工智能学院，任讲师。' } },
    { date: { en: '2026', zh: '2026' }, text: { en: 'Received the USTB Outstanding Doctoral Dissertation Award (the only recipient in the school).', zh: '获北京科技大学优秀博士毕业论文（学院唯一）。' } },
    { date: { en: '2025', zh: '2025' }, text: { en: 'Received the National Scholarship for Doctoral Students and a nomination for the USTB Top-10 Academic Star.', zh: '获博士研究生国家奖学金，并获北京科技大学研究生十佳学术之星提名奖。' } }
  ],

  /* ----------------------------------------------------------- Education */
  education: [
    {
      period: { en: 'Sep 2022 – Jul 2026', zh: '2022.09 – 2026.07' },
      degree: { en: 'Ph.D. (combined Master–Ph.D. program)', zh: '博士（硕博连读）' },
      school: { en: 'University of Science and Technology Beijing', zh: '北京科技大学' },
      major: { en: 'Information and Communication Engineering', zh: '信息与通信工程' },
      extra: { en: 'Advisor: Prof. Wei Huangfu', zh: '导师：皇甫伟教授' }
    },
    {
      period: { en: 'Sep 2020 – Jul 2022', zh: '2020.09 – 2022.07' },
      degree: { en: 'M.Sc. (recommendation-based admission)', zh: '硕士（推免）' },
      school: { en: 'University of Science and Technology Beijing', zh: '北京科技大学' },
      major: { en: 'Information and Communication Engineering', zh: '信息与通信工程' },
      extra: { en: 'Advisor: Prof. Keping Long', zh: '导师：隆克平教授' }
    },
    {
      period: { en: 'Sep 2016 – Jul 2020', zh: '2016.09 – 2020.07' },
      degree: { en: 'B.Eng.', zh: '学士' },
      school: { en: 'Shanxi University', zh: '山西大学' },
      major: { en: 'Electronic Information Engineering', zh: '电子信息工程' },
      extra: { en: '', zh: '' }
    }
  ],

  appointments: [
    {
      period: { en: 'Aug 2026 – Present', zh: '2026.08 – 至今' },
      degree: { en: 'Lecturer', zh: '讲师' },
      school: { en: 'College of Artificial Intelligence, Taiyuan University of Technology', zh: '太原理工大学 人工智能学院' },
      major: { en: '', zh: '' },
      extra: { en: '', zh: '' }
    }
  ],

  /* ------------------------------------------------------------ Research */
  research: [
    {
      icon: 'uav',
      title: { en: 'UAV-Assisted Industrial IoT & MEC', zh: '低空工业物联网与无人机辅助边缘计算' },
      desc: {
        en: 'Joint optimization of UAV 3D trajectories, task offloading ratios, spectrum and computing resources for low-latency, high-success-rate services in industrial and vehicular networks.',
        zh: '面向工业与车联网场景，联合优化无人机三维轨迹、任务卸载比例、频谱与算力资源分配，提升任务成功率、降低时延并保障用户公平性。'
      },
      keywords: {
        en: ['Computation Offloading', 'Trajectory Planning', 'Resource Allocation', 'KMASAC / PMASAC'],
        zh: ['计算卸载', '轨迹规划', '资源分配', 'KMASAC / PMASAC']
      }
    },
    {
      icon: 'shield',
      title: { en: 'Physical-Layer Security & Adversarial Eavesdropping', zh: '物理层安全与对抗智能窃听' },
      desc: {
 en: 'Modeling intelligent eavesdropping UAVs as adversarial agents; zero-sum games, cooperative jamming, UAV-IRS phase design and secrecy-rate maximization under worst-case guarantees.',
        zh: '将智能窃听无人机建模为对抗智能体，研究零和博弈、协同人工噪声干扰、UAV-IRS 相移设计与最坏情况下的保密速率最大化。'
      },
      keywords: {
        en: ['Adversarial MARL', 'Zero-Sum Game', 'Cooperative Jamming', 'ARL-MAPPO / PD-CMASAC'],
        zh: ['对抗多智能体强化学习', '零和博弈', '协同干扰', 'ARL-MAPPO / PD-CMASAC']
      }
    },
    {
      icon: 'pulse',
      title: { en: 'Information Freshness (AoI) & Variable-Dimension Decisions', zh: '信息新鲜度（AoI）与变维智能决策' },
      desc: {
        en: 'Attention-driven policy and critic networks for time-varying observation/action dimensions, minimizing average or weighted Age of Information while balancing energy and fairness.',
        zh: '利用注意力机制处理时变的观测与动作维度，最小化平均/加权信息年龄，并兼顾能耗与公平性；引入随机网络蒸馏置信加权提升样本效率。'
      },
      keywords: {
        en: ['Age of Information', 'Attention Mechanism', 'Random Network Distillation', 'ATD3 / AMATD3 / CTD3'],
        zh: ['信息年龄', '注意力机制', '随机网络蒸馏', 'ATD3 / AMATD3 / CTD3']
      }
    },
    {
      icon: 'layers',
      title: { en: 'Network Slicing & Polymorphic Network Reconfiguration', zh: '网络切片与多态网络动态重构' },
      desc: {
        en: 'Two-timescale reinforcement learning that decides whether and when to reconfigure slices from critic-value or confidence estimates, rather than fixed time windows; guided by the free-energy-minimization principle.',
        zh: '以两时间尺度强化学习，依据评论家网络收益预测或置信度评估，自动决定是否及何时重构网络切片，替代固定周期方案；并以自由能最小化原理指导多态网络形态演化。'
      },
      keywords: {
        en: ['Two-Timescale RL', 'Self-Adjusting Slicing', 'Free Energy Principle', 'SaTPPO / CST-RL / FEM-TRL'],
        zh: ['两时间尺度强化学习', '自调整网络切片', '自由能原理', 'SaTPPO / CST-RL / FEM-TRL']
      }
    },
    {
      icon: 'network',
      title: { en: 'Integrated Sensing, Communication & Computation', zh: '通感算一体化与应急空地协同' },
      desc: {
        en: 'Air–ground collaborative ISAC/ISCC for emergency rescue and industrial PONs; transfer learning and primal–dual DRL for rapidly changing environments and constrained optimization.',
        zh: '面向应急救援与工业无源光网络的空地协同通感一体化/通感算一体化；用迁移学习与原对偶深度强化学习应对环境突变和约束优化。'
      },
      keywords: {
        en: ['ISAC / ISCC', 'Transfer DRL', 'Primal–Dual SAC', 'Industrial PON'],
        zh: ['通感一体化 / 通感算一体化', '迁移强化学习', '原对偶 SAC', '工业 PON']
      }
    }
  ],

  /* ------------------------------------------------------- Publications */
  /* rank 用于默认排序：1–12 为一作（前 8 篇即简历列出的代表作），13–22 为合作论文 */
  publications: [
    {
      rank: 1, year: 2024, type: 'journal', role: 'first', algo: 'ARL-MAPPO',
      title: { en: 'Secure Offloading With Adversarial Multi-Agent Reinforcement Learning Against Intelligent Eavesdroppers in UAV Enabled Mobile Edge Computing', zh: '面向智能窃听者的无人机辅助移动边缘计算对抗多智能体强化学习安全卸载' },
      authors: 'Xulong Li, Wei Huangfu, Xinyi Xu, Jiahao Huo, Keping Long',
      venue: { en: 'IEEE Transactions on Mobile Computing (TMC)', zh: 'IEEE Transactions on Mobile Computing (TMC)' },
      detail: 'vol. 23, no. 12, pp. 13914–13928, Dec. 2024 · IF 9.2',
      tags: [
        { en: 'CCF-A', zh: 'CCF-A', kind: 'ccfa' },
        { en: 'CAS Q1 Top', zh: '中科院一区 Top', kind: 'q1' }
      ],
      note: {
        en: 'Intelligent eavesdropping UAVs are modeled as adversarial agents; alternating zero-sum training (ARL-MAPPO) with a historical opponent-policy pool improves worst-case energy efficiency.',
        zh: '将窃听者建模为可动态调整轨迹的智能体，构建合法/窃听无人机零和博弈，以交替训练和敌方历史策略集提升最坏情况下的物联网设备能效。'
      }
    },
    {
      rank: 2, year: 2026, type: 'journal', role: 'first', algo: 'CST-RL',
      title: { en: 'Dynamic and Heterogeneous Network Slicing for Vehicular Edge Computing Based on Two-Timescale Reinforcement Learning', zh: '基于两时间尺度强化学习的车辆边缘计算动态异构网络切片' },
      authors: 'Xulong Li, Wencan Mao, Xinyi Xu, Yaxi Liu, Wei Huangfu, Keping Long, Yu Xiao, Yusheng Ji',
      venue: { en: 'IEEE Transactions on Mobile Computing (TMC)', zh: 'IEEE Transactions on Mobile Computing (TMC)' },
      detail: '2026 · IF 9.2',
      tags: [
        { en: 'CCF-A', zh: 'CCF-A', kind: 'ccfa' },
        { en: 'CAS Q1 Top', zh: '中科院一区 Top', kind: 'q1' }
      ],
      note: {
        en: 'Critic-predicted gains and random-network-distillation confidence decide when to reconfigure slices; system cost drops by 27.77% vs. no slicing and 15.15% vs. fixed slicing.',
        zh: '用评论家网络预测重构收益、随机网络蒸馏评估置信度，自动决定切片重构时机；系统成本较无切片方案降低 27.77%，较固定切片方案降低 15.15%。'
      }
    },
    {
      rank: 3, year: 2026, type: 'journal', role: 'first', algo: 'PD-CMASAC',
      title: { en: 'Secrecy Sum Rate Maximization in UAV-IRS Assisted Networks With Credit-Aware Cooperative Multi-Agent Reinforcement Learning', zh: '基于信用感知协作多智能体强化学习的 UAV-IRS 网络保密速率和最大化' },
      authors: 'Xulong Li, Wei Huangfu, Jiahao Huo, Keping Long, Haijun Zhang',
      venue: { en: 'IEEE Transactions on Wireless Communications (TWC)', zh: 'IEEE Transactions on Wireless Communications (TWC)' },
      detail: 'vol. 25, pp. 3186–3200, 2026 · IF 10.7',
      tags: [{ en: 'CAS Q1 Top', zh: '中科院一区 Top', kind: 'q1' }],
      note: {
        en: 'Shapley-value credit assignment resolves the lazy-agent problem among cooperative UAV-IRS units, while primal–dual optimization constrains non-cooperative behavior.',
        zh: '以合作博弈 Shapley 值解决团队共享奖励下的信用分配与「懒惰智能体」问题，并用原对偶优化约束 UAV-IRS 的非合作行为。'
      }
    },
    {
      rank: 4, year: 2026, type: 'journal', role: 'first', algo: 'SaTPPO',
      title: { en: 'Self-Adjusting Network Slicing for Dynamic Heterogeneous Task Offloading in UAV-Enabled Mobile Edge Computing', zh: '无人机辅助移动边缘计算中面向动态异构任务卸载的自调整网络切片' },
      authors: 'Xulong Li, Wencan Mao, Xinyi Xu, Yaxi Liu, Huifeng Zhang, Wei Huangfu',
      venue: { en: 'IEEE Transactions on Cognitive Communications and Networking (TCCN)', zh: 'IEEE Transactions on Cognitive Communications and Networking (TCCN)' },
      detail: 'vol. 12, pp. 673–687, 2026 · IF 7.0',
      tags: [
        { en: 'CAS Q1 Top', zh: '中科院一区 Top', kind: 'q1' },
        { en: 'ESI Highly Cited', zh: 'ESI 高被引', kind: 'esi' }
      ],
      note: {
        en: 'The critic state-value function predicts the benefit of reconfiguration and compares it with its cost, replacing fixed slicing windows; convergence analysis via policy iteration is provided.',
        zh: '利用评论家网络拟合的状态值函数预测重构收益并与重构成本比较，取代固定切片时间窗口；给出基于贝尔曼算子与策略迭代的收敛分析。'
      }
    },
    {
      rank: 5, year: 2026, type: 'journal', role: 'first', algo: 'CTD3',
      title: { en: 'Efficient and Secure UAV-Assisted Industrial Internet of Things Based on Confidence-Weighted Reinforcement Learning', zh: '基于置信加权强化学习的高效安全无人机辅助工业物联网' },
      authors: 'Xulong Li, Yunhui Qin, Yaxi Liu, Xinyi Xu, Wei Huangfu, Keping Long',
      venue: { en: 'IEEE Transactions on Cognitive Communications and Networking (TCCN)', zh: 'IEEE Transactions on Cognitive Communications and Networking (TCCN)' },
      detail: 'vol. 12, pp. 5307–5319, 2026 · IF 7.0',
      tags: [{ en: 'CAS Q1 Top', zh: '中科院一区 Top', kind: 'q1' }],
      note: {
        en: 'Heterogeneous UAVs separate data collection from cooperative jamming; confidence-weighted TD3 (CTD3) with random network distillation minimizes average AoI under eavesdropping.',
        zh: '以空中基站无人机与干扰无人机分离数据收集与安全干扰功能；引入随机网络蒸馏置信加权的 CTD3，在窃听威胁下最小化平均信息年龄。'
      }
    },
    {
      rank: 6, year: 2023, type: 'journal', role: 'first', algo: 'HRJO-PMASAC',
      title: { en: 'Heuristically Assisted Multiagent RL Based Framework for Computation Offloading and Resource Allocation of Mobile-Edge Computing', zh: '启发式辅助多智能体强化学习的移动边缘计算卸载与资源分配框架' },
      authors: 'Xulong Li, Yunhui Qin, Jiahao Huo, Wei Huangfu',
      venue: { en: 'IEEE Internet of Things Journal (IoT-J)', zh: 'IEEE Internet of Things Journal (IoT-J)' },
      detail: 'vol. 10, no. 17, pp. 15477–15487, 2023 · IF 8.9',
      tags: [{ en: 'CAS Q1 Top', zh: '中科院一区 Top', kind: 'q1' }],
      note: {
        en: 'Heuristic search decouples server-side allocation from the time-coupled problem, and a parameterized MASAC splits the action space into stochastic and deterministic parts.',
        zh: '用启发式搜索将边缘服务器资源分配从时间耦合中解耦；参数化 MASAC 按动作是否影响其他智能体拆分动作空间，降低学习难度。'
      }
    },
    {
      rank: 7, year: 2025, type: 'journal', role: 'first', algo: 'AMATD3',
      title: { en: 'Attention-Driven MARL for AoI Minimization in UAV-Assisted Intelligent Transport Systems', zh: '面向无人机辅助智能交通系统信息年龄最小化的注意力驱动多智能体强化学习' },
      authors: 'Xulong Li, Wei Huangfu, Xinyi Xu, Jiahao Huo, Keping Long',
      venue: { en: 'IEEE Transactions on Intelligent Transportation Systems (TITS)', zh: 'IEEE Transactions on Intelligent Transportation Systems (TITS)' },
      detail: 'vol. 26, no. 11, pp. 20348–20362, Nov. 2025 · IF 8.4',
      tags: [{ en: 'CAS Q2 Top', zh: '中科院二区 Top', kind: 'q2' }],
      note: {
        en: 'Multi-head attention in both actor and critic handles varying numbers of served vehicles without padding or truncation; weighted average AoI is reduced by 13.1%–56.2%.',
        zh: '在策略与评论家网络中引入多头注意力处理变维输入输出，避免填充/截断造成的信息损失；加权平均信息年龄较先进方案降低 13.1%–56.2%。'
      }
    },
    {
      rank: 8, year: 2024, type: 'journal', role: 'first', algo: 'KMASAC',
      title: { en: 'Computation Offloading and Trajectory Planning of Multi-UAV-Enabled MEC: A Knowledge-Assisted Multiagent Reinforcement Learning Approach', zh: '知识辅助多智能体强化学习的多无人机 MEC 计算卸载与轨迹规划' },
      authors: 'Xulong Li, Yunhui Qin, Jiahao Huo, Wei Huangfu',
      venue: { en: 'IEEE Transactions on Vehicular Technology (TVT)', zh: 'IEEE Transactions on Vehicular Technology (TVT)' },
      detail: 'vol. 73, no. 5, pp. 7077–7088, May 2024 · IF 7.1',
      tags: [{ en: 'CAS Q2 Top', zh: '中科院二区 Top', kind: 'q2' }],
      note: {
        en: 'Suboptimal UAV-position solutions serve as decaying-probability expert knowledge to guide MASAC, improving success rate, latency and fairness.',
        zh: '将无人机位置优化子问题的次优解作为专家知识，以随训练衰减的概率辅助 MASAC 学习，显著提升任务成功率、时延与公平性。'
      }
    },
    {
      rank: 9, year: 2025, type: 'journal', role: 'first', algo: 'CMASAC',
      title: { en: 'Computation Offloading Scheme for Multi-UAV-RIS Cooperative MEC Networks', zh: '多 UAV-RIS 协作辅助的 MEC 网络计算卸载方案' },
      authors: '李旭龙, 高子慧, 霍佳皓, 皇甫伟',
      venue: { en: 'Journal of Xidian University', zh: '《西安电子科技大学学报》' },
      detail: { en: 'vol. 52, no. 6, Dec. 2025 (in Chinese)', zh: '第 52 卷第 6 期，2025 年 12 月（中文核心）' },
      tags: [{ en: 'Chinese Core Journal', zh: '中文核心期刊', kind: 'cn' }],
      note: {
        en: 'Collaborative-game Shapley credit assignment enables distributed cooperation among multiple UAV-RIS units to minimize task offloading latency.',
        zh: '引入融合多智能体强化学习与合作博弈论的分布式协作机制，用 Shapley 值公平分配个体奖励，联合优化轨迹与 RIS 相移以最小化卸载时延。'
      }
    },
    {
      rank: 10, year: 2025, type: 'workshop', role: 'first', algo: 'FEM-TRL',
      title: { en: 'The Law of Network Morphic Evolution: Dynamic Reconfiguration in Polymorphic Networks via Free Energy Minimization', zh: '网络形态演化定律：基于自由能最小化的多态网络动态重构' },
      authors: 'Xulong Li, Xiying Fan, Yaxi Liu, Huifeng Zhang, Quanming Yao, Wei Huangfu',
      venue: { en: "ACM CoNEXT 2025 Workshop on the Polymorphic Network (PN '25)", zh: "ACM CoNEXT 2025 多态网络研讨会 (PN '25)" },
      detail: '2025 · 6 pages',
      tags: [{ en: 'ACM Workshop', zh: 'ACM Workshop', kind: 'conf' }],
      note: {
        en: 'Free energy, composed of service-fit loss and a critic-predicted future adaptation penalty, triggers network morphic reconfiguration.',
        zh: '将演化目标分解为业务适配损失与评论家网络预测的未来动态适配惩罚，用自由能最小化原理触发网络形态重构。'
      }
    },
    {
      rank: 11, year: 2023, type: 'conference', role: 'first', algo: 'ATD3',
      title: { en: 'AoI Minimization in UAV-Assisted IoT Network: A Reinforcement Learning Approach', zh: '无人机辅助物联网中的信息年龄最小化：一种强化学习方法' },
      authors: 'Xulong Li, Xinyi Xu, Jiahao Huo, Wei Huangfu',
      venue: { en: 'IEEE UCom 2023', zh: 'IEEE UCom 2023' },
      detail: '2023 International Conference on Ubiquitous Communication',
      tags: [{ en: 'Conference', zh: '会议论文', kind: 'conf' }],
      note: {
        en: 'An attention-based TD3 handles the changing number of covered IoT devices without fixed-K padding, with a communicating UAV and a jamming UAV cooperating.',
        zh: '通信无人机与干扰无人机协作收集数据；基于注意力机制的 ATD3 处理覆盖设备数变化导致的变维观测与动作，显著降低平均信息年龄。'
      }
    },
    {
      rank: 12, year: 2025, type: 'conference', role: 'first', algo: 'SAC',
      title: { en: 'Achieving Ultra-Low Latency in Industrial PONs: A SAC Reinforcement Learning Approach', zh: '工业无源光网络的超低时延实现：一种 SAC 强化学习方法' },
      authors: 'Xulong Li, Xiaoying Zhang, Xinyi Xu, Kaiqiang Gao, Jiahao Huo',
      venue: { en: 'IEEE UCom 2025', zh: 'IEEE UCom 2025' },
      detail: '2025',
      tags: [{ en: 'Conference', zh: '会议论文', kind: 'conf' }],
      note: {
        en: 'SAC jointly minimizes AoI and maximizes Jain fairness in industrial PONs; average AoI drops by 36.5%–64.9% over TD3, PPO, DDPG and random baselines.',
        zh: '面向工业 PON 低时延安全数据采集，SAC 同时优化信息年龄与 Jain 公平性；平均 AoI 约 4.0，较基线降低 36.5%–64.9%。'
      }
    },

    /* ---- 合作论文（非一作） ---- */
    {
      rank: 13, year: 2024, type: 'conference', role: 'co', authorPos: { en: '3rd author', zh: '第三作者' },
      title: { en: 'UAV-Assisted Integrated Sensing and Communication for Emergency Rescue Activities Based on Transfer Deep Reinforcement Learning', zh: '基于迁移深度强化学习的应急救援无人机辅助通感一体化' },
      authors: 'Yaxi Liu, Wencan Mao, Xulong Li, Wei Huangfu, Yusheng Ji, Yu Xiao',
      venue: { en: 'ACM MobiCom 2024', zh: 'ACM MobiCom 2024' },
      detail: 'Nov. 18–22, 2024, Washington D.C. · 6 pages · DOI 10.1145/3636534.3698220',
      tags: [{ en: 'Top Conference', zh: '顶级会议', kind: 'ccfa' }],
      note: { en: 'Transfer DRL adapts to sudden changes in base-station availability after a disaster.', zh: '用迁移深度强化学习快速适应灾后地面基站可用性突变。' }
    },
    {
      rank: 14, year: 2026, type: 'journal', role: 'co', authorPos: { en: '3rd author', zh: '第三作者' },
      title: { en: 'Resource Allocation for UAV-Enabled Spatio-Temporal Crowdsourcing in Smart Cities', zh: '智慧城市中无人机使能时空众包的资源分配' },
      authors: 'Yaxi Liu, Wencan Mao, Xulong Li, Wei Huangfu, Yu Xiao, Yusheng Ji, Haijun Zhang, Keping Long',
      venue: { en: 'IEEE Transactions on Vehicular Technology (TVT)', zh: 'IEEE Transactions on Vehicular Technology (TVT)' },
      detail: 'vol. 75, no. 1, pp. 1238–, 2026 · online 23 Jul 2025',
      tags: [{ en: 'SCI', zh: 'SCI 期刊', kind: 'q1' }],
      note: { en: 'AoI and energy optimization under real urban building no-fly-zone data.', zh: '在真实城市建筑禁飞区数据下联合优化信息年龄与能耗。' }
    },
    {
      rank: 15, year: 2025, type: 'journal', role: 'co', authorPos: { en: '4th author', zh: '第四作者' },
      title: { en: 'Multi-Modal Trajectory Planning for Emergency-Oriented Air-Ground Collaborative Sensing and Communication', zh: '面向应急的空地协同感知通信多模态轨迹规划' },
      authors: 'Yaxi Liu, Quanxi Zhou, Wencan Mao, Xulong Li, Wei Huangfu, Manabu Tsukada, Yusheng Ji, Keping Long',
      venue: { en: 'IEEE Transactions on Cognitive Communications and Networking (TCCN)', zh: 'IEEE Transactions on Cognitive Communications and Networking (TCCN)' },
      detail: 'vol. 11, no. 5, pp. 3103–, 2025',
      tags: [{ en: 'SCI', zh: 'SCI 期刊', kind: 'q1' }],
      note: { en: 'Emergency vehicles and robot dogs join UAVs for multi-modal air–ground ISAC.', zh: '引入应急车辆与机器狗构成多模态空地协同感知通信网络。' }
    },
    {
      rank: 16, year: 2025, type: 'journal', role: 'co', authorPos: { en: '3rd author', zh: '第三作者' },
      title: { en: 'Joint Task Scheduling and Resource Allocation for UAV-Assisted Air-Ground Collaborative Integrated Sensing, Computation, and Communication', zh: '无人机辅助空地协同通感算一体化的联合任务调度与资源分配' },
      authors: 'Yaxi Liu, Wencan Mao, Xulong Li, Wei Huangfu, Yusheng Ji, Yu Xiao, Keping Long',
      venue: { en: 'IEEE Transactions on Communications (TOC)', zh: 'IEEE Transactions on Communications (TOC)' },
      detail: '',
      tags: [{ en: 'SCI', zh: 'SCI 期刊', kind: 'q1' }],
      note: { en: 'Centralized and decentralized DRL schemes for ISCC with multi-source environmental data.', zh: '比较多源环境数据下通感算一体化的集中式与分散式深度强化学习方案。' }
    },
    {
      rank: 17, year: 2025, type: 'journal', role: 'co', authorPos: { en: '3rd author', zh: '第三作者' },
      title: { en: 'Primal-Dual Deep Reinforcement Learning for Periodic Coverage-Assisted UAV Secure Communications', zh: '周期覆盖辅助无人机安全通信的原对偶深度强化学习' },
      authors: 'Yunhui Qin, Zhifang Xing, Xulong Li, Zhongshan Zhang, Haijun Zhang',
      venue: { en: 'IEEE Transactions on Vehicular Technology (TVT)', zh: 'IEEE Transactions on Vehicular Technology (TVT)' },
      detail: '',
      tags: [{ en: 'SCI', zh: 'SCI 期刊', kind: 'q1' }],
      note: { en: 'A constrained MDP with reward and cost critics maximizes worst-case secrecy rate.', zh: '以约束马尔可夫决策过程与奖励/成本双评论家最大化最坏情况保密速率。' }
    },
    {
      rank: 18, year: 2024, type: 'journal', role: 'co', authorPos: { en: '2nd author', zh: '第二作者' },
      title: { en: 'UAV-Enabled Diverse Data Collection via Integrated Sensing and Communication Functions Based on Deep Reinforcement Learning', zh: '基于深度强化学习的通感一体化无人机多样数据收集' },
      authors: 'Yaxi Liu, Xulong Li, Boxin He, Meng Gu, Wei Huangfu',
      venue: { en: 'Drones', zh: 'Drones' },
      detail: 'vol. 8, no. 647, 2024 · DOI 10.3390/drones8110647',
      tags: [{ en: 'SCI', zh: 'SCI 期刊', kind: 'q2' }],
      note: { en: 'Dual freshness metrics for uplink communication and radar sensing, with a Pareto frontier.', zh: '提出通信数据新鲜度与感知检测新鲜度双指标并给出帕累托前沿。' }
    },
    {
      rank: 19, year: 2025, type: 'journal', role: 'co', authorPos: { en: '2nd author', zh: '第二作者' },
      title: { en: 'Resource Allocation for UAV Spatio-Temporal Crowdsourcing in Industrial Scenarios', zh: '面向工业场景的无人机时空众包资源分配' },
      authors: '刘娅汐, 李旭龙, 霍佳皓, 皇甫伟',
      venue: { en: 'Chinese Journal of Engineering', zh: '《工程科学学报》' },
      detail: 'vol. 47, no. 1, pp. 91–100, 2025 · DOI 10.13374/j.issn2095-9389.2024.06.01.001',
      tags: [{ en: 'Chinese Core', zh: '中文核心', kind: 'cn' }],
      note: { en: 'No-fly zones and eavesdroppers are jointly considered in SAC-based trajectory and power optimization.', zh: '同时考虑禁飞区与窃听者，用 SAC 联合优化无人机轨迹与发射功率。' }
    },
    {
      rank: 20, year: 2025, type: 'journal', role: 'co', authorPos: { en: '2nd author', zh: '第二作者' },
      title: { en: 'Reinforcement-Learning-Based Cooperative Task Offloading for Multi-UAV MEC', zh: '基于强化学习的多无人机协同 MEC 任务卸载方案' },
      authors: '尤昕阳, 李旭龙, 王浩彬, 皇甫伟',
      venue: { en: 'Journal of Xidian University (online first)', zh: '《西安电子科技大学学报》（网络首发）' },
      detail: '2 Dec 2025 · DOI 10.19665/j.issn1001-2400.20251111',
      tags: [{ en: 'Chinese Core', zh: '中文核心', kind: 'cn' }],
      note: { en: 'MU-SAC jointly improves task success rate (~3.9%) and user fairness (~4.0%).', zh: '多无人机 SAC 联合优化卸载与算力分配，任务成功率与公平性分别提升约 3.9% / 4.0%。' }
    },
    {
      rank: 21, year: 2024, type: 'conference', role: 'co', authorPos: { en: '2nd author', zh: '第二作者' },
      title: { en: 'UAV-RIS Assisted AoI Minimization in IoT Networks: A Reinforcement Learning Approach', zh: 'UAV-RIS 辅助物联网信息年龄最小化的强化学习方法' },
      authors: 'Zihui Gao, Xulong Li, Jiahao Huo, Wei Huangfu',
      venue: { en: 'IEEE UCom 2024', zh: 'IEEE UCom 2024' },
      detail: 'pp. 401–',
      tags: [{ en: 'Conference', zh: '会议论文', kind: 'conf' }],
      note: { en: 'RIS phase shifts are solved first to decouple the joint trajectory-and-scheduling problem.', zh: '先求解 RIS 最优相移实现解耦，再用 SAC 联合优化无人机轨迹与设备调度。' }
    },
    {
      rank: 22, year: 2025, type: 'conference', role: 'co', authorPos: { en: '2nd author', zh: '第二作者' },
      title: { en: 'Task Offloading and Resource Allocation for Low-Latency Edge Computing in Industrial PONs', zh: '工业 PON 低时延边缘计算中的任务卸载与资源分配' },
      authors: 'Xiaoying Zhang, Xulong Li, Jiahao Huo, Kaiqiang Gao, Wei Huangfu',
      venue: { en: 'IEEE UCom 2025', zh: 'IEEE UCom 2025' },
      detail: '2025',
      tags: [{ en: 'Conference', zh: '会议论文', kind: 'conf' }],
      note: { en: 'PPO reaches about 97% task success rate in ONU-assisted edge offloading.', zh: '以 PPO 求解工业 PON 光网络单元边缘卸载，任务成功率约 97%。' }
    }
  ],

  /* ------------------------------------------------------------ Patents */
  patents: [
    { number: 'ZL202410515391.4', date: '2024-08-13', status: 'granted', title: { en: 'Secure Computation Offloading Method and System Against Intelligent Eavesdroppers', zh: '一种针对智能窃听者的安全计算卸载方法和系统' } },
    { number: 'ZL202410717045.4', date: '2025-04-25', status: 'granted', title: { en: 'Resource Allocation Method and Apparatus for UAV Spatio-Temporal Crowdsourcing', zh: '一种无人机时空众包的资源分配方法及装置' } },
    { number: 'ZL202510313982.8', date: '2025-11-04', status: 'granted', title: { en: 'Maximum-Entropy-RL-Based Resource Allocation for ISAC Networks', zh: '基于最大熵强化学习的通感融合网络资源分配方法及装置' } },
    { number: 'ZL202510313981.3', date: '2025-11-25', status: 'granted', title: { en: 'Flexible-Antenna-Assisted Resource Scheduling for ISAC-NOMA Networks', zh: '一种灵活天线辅助的通感融合 NOMA 网络资源调度方法及装置' } },
    { number: 'ZL202411486254.9', date: '2025-11-28', status: 'granted', title: { en: 'Task Scheduling and Resource Allocation for Post-Disaster UAV ISAC Systems', zh: '灾后无人机通感系统的任务调度与资源分配方法及装置' } },
    { number: 'ZL202411221968.7', date: '2025-12-02', status: 'granted', title: { en: 'UAV-Assisted ISCC Resource Allocation for Forest Firefighting', zh: '面向森林救火的无人机协助通感算一体化资源分配方法' } },
    { number: 'ZL202510464078.7', date: '2026-03-10', status: 'granted', title: { en: 'DRL-Based User Clustering and Resource Allocation for ISAC', zh: '基于深度强化学习的通感一体化用户成簇与资源分配方法' } },
    { number: 'ZL202510471293.X', date: '2026-03-20', status: 'granted', title: { en: 'Power Optimization for Multi-Waveguide Pinching-Antenna ISAC-NOMA Networks', zh: '一种多波导多 pinching 天线辅助的通感融合 NOMA 网络功率优化方法' } },
    { number: '202510191064.2', date: '2025-02-20', status: 'pending', title: { en: 'Two-Timescale-RL-Based Network Modality Configuration and Adjustment', zh: '基于双时间尺度强化学习网络模态配置与调整方法及装置' } },
    { number: '202411168436.1', date: '2024-08-23', status: 'pending', title: { en: 'Task Scheduling and Resource Allocation in UAV-Assisted ISCC Systems', zh: '一种无人机辅助通感算系统中任务调度和资源分配的方法' } }
  ],

  /* ----------------------------------------------------------- Projects */
  projects: [
    {
      role: { en: 'Core Member', zh: '核心骨干' },
      name: { en: 'National Key R&D Program of China (2023YFB2903901): Symbiotic Evolution Model and Architecture of Network Modalities', zh: '国家重点研发计划（2023YFB2903901）：网络模态共生演化模型与体系结构' },
      duty: { en: 'Designed a resource-scheduling algorithm based on autonomous symbiotic evolution, significantly improving network adaptability.', zh: '设计基于自主共生演化机制的资源调度算法，显著提升网络适应性。' }
    },
    {
      role: { en: 'Core Member', zh: '核心骨干' },
      name: { en: 'NSFC (U21A200845): High-Precision Sensing of Urban Low-Altitude UAVs Based on 5G/B5G Signals', zh: '国家自然科学基金（U21A200845）：基于 5G/B5G 信号的城市低空无人机高精度感知技术研究' },
      duty: { en: 'Led the multi-UAV secure communication module; addressed communication security under intelligent eavesdropping using game theory and reinforcement learning.', zh: '负责多无人机安全通信模块，利用博弈论与强化学习解决智能窃听下的通信安全问题。' }
    },
    {
      role: { en: 'Main Participant', zh: '主要参与' },
      name: { en: 'National Key R&D Program of China (2021YFB2900801): Architecture and Fundamental Research of Ultra-Low-Latency, Massive-Connection Industrial PON', zh: '国家重点研发计划（2021YFB2900801）：超低延迟、超大连接工业 PON 的体系架构与前沿基础研究' },
      duty: { en: 'Designed and implemented the multi-dimensional network resource scheduling mechanism for industrial PON systems.', zh: '负责工业 PON 系统中多维度网络资源调度机制的设计与实现。' }
    }
  ],

  /* ------------------------------------------------------------- Awards */
  awards: [
    { year: '2026', text: { en: 'USTB Outstanding Doctoral Dissertation Award (only recipient in the school)', zh: '北京科技大学优秀博士毕业论文（学院唯一）' } },
    { year: '2026', text: { en: 'USTB Outstanding Graduate', zh: '北京科技大学优秀毕业生' } },
    { year: '2025', text: { en: 'Nomination for USTB Top-10 Graduate Academic Star (the university’s highest academic honor, 10 recipients campus-wide)', zh: '北京科技大学研究生十佳学术之星提名奖（全校最高学术荣誉，仅 10 人）' } },
    { year: '2025', text: { en: 'National Scholarship for Doctoral Students', zh: '博士研究生国家奖学金' } },
    { year: '2023–2025', text: { en: 'USTB Outstanding Graduate Student (2023–2024 and 2024–2025 academic years)', zh: '北京科技大学优秀三好研究生（2023–2024、2024–2025 学年）' } }
  ],

  /* ------------------------------------------------------------ Service */
  service: {
    review: {
      en: 'Long-term reviewer for IEEE Transactions on Wireless Communications (TWC), IEEE Transactions on Mobile Computing (TMC), IEEE Transactions on Cognitive Communications and Networking (TCCN), and IEEE Transactions on Intelligent Transportation Systems (TITS).',
      zh: '长期担任 IEEE TWC、IEEE TMC、IEEE TCCN、IEEE TITS 等国际顶级期刊审稿人。'
    },
    talks: {
      en: 'English oral presentations at ACM CoNEXT 2025, IEEE UCom 2025 and IEEE UCom 2023.',
      zh: '在 ACM CoNEXT 2025、IEEE UCom 2025、IEEE UCom 2023 等国际会议进行全英文口头汇报（Oral Presentation）。'
    }
  },

  /* ----------------------------------------------------------- Teaching */
  teaching: [
    {
      title: { en: 'Teaching Assistant — Data Structures and Algorithms', zh: '课程助教 · 数据结构与算法' },
      desc: { en: 'Supported course delivery, in-class Q&A and assignment grading.', zh: '辅助导师完成课程教学，负责课堂答疑及作业批改，积累教学互动经验。' }
    },
    {
      title: { en: 'Supervision — Undergraduate & Master Thesis Projects', zh: '学生指导 · 本科及硕士毕业设计' },
      desc: { en: 'Co-supervised several undergraduate and Master students on topic selection, algorithm design and academic writing.', zh: '协助指导多名本科生及硕士研究生完成毕业设计与论文，覆盖课题选题、算法设计与论文撰写。' }
    }
  ]
};
