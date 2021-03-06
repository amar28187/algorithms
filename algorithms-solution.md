<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [算法问题求解](#%E7%AE%97%E6%B3%95%E9%97%AE%E9%A2%98%E6%B1%82%E8%A7%A3)
  - [解决问题的思路](#%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E7%9A%84%E6%80%9D%E8%B7%AF)
  - [粗略估算](#%E7%B2%97%E7%95%A5%E4%BC%B0%E7%AE%97)
    - [量纲检验的快速检验法](#%E9%87%8F%E7%BA%B2%E6%A3%80%E9%AA%8C%E7%9A%84%E5%BF%AB%E9%80%9F%E6%A3%80%E9%AA%8C%E6%B3%95)
    - [Little 定律](#little-%E5%AE%9A%E5%BE%8B)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 算法问题求解

摘录整理自：

- 算法（第四版）
- 编程珠玑（第二版）

### 解决问题的思路

**在设计算法时，面对的第一个任务是精准地定义问题**

1. **明确问题，明确问题，明确问题**。完整且详细地定义问题，研究问题产生的背景，找出解决问题所必需的**基本抽象操作**
2. 简洁快速的实现一个基本初级算法
3. 逐步改进实现，通过经验性分析和数学分析来验证改进后的结果
4. 用更高层次的抽象表示数据结构或算法，来设计更高级的改进版本
5. 尽可能为最坏情况下的性能提供保证，但在处理普通数据时也要有良好的性能
6. 很多情况下，需要在空间-时间中进行折中。往往难以找到最优解，但最符合实际需求的就是最好的

进一步简化而言，核心关键是：

- 正确的问题
- 由正确的问题，选择合适的数据结构。数据的表现形式是程序设计的根本
- 在空间和时间上折中
- 简单的设计。过于复杂的算法往往不是好算法。已经达到完美的标准不是不能再增加任何东西，而是不能再删减东西。
- 任何事都应尽量简单，但不宜过于简单

代码的开发是自上而下进行的：从一般思想开始，逐步将其完善为独立的代码行。而正确性分析则是自下而上进行的：从每个独立的代码行开始，检查它们是如何协同运作并解决问题的。

### 粗略估算

在估算软件系统性能的时候，可以以2、4 或者 6 的系数来降低对性能的估计；在做出可靠性/可用性保障的时候，给出一个比我们认为能达到的目标相差 10 倍的结果；在估算规模、开销、时间进度时，给出保守 2~4 倍的结果。

#### 量纲检验的快速检验法

1. *和式*中，各项的量纲必须相同。该量纲同时也是返回结果的量纲
2. *乘式*中，乘积的量纲是各乘数量纲的乘积

#### Little 定律

系统中物体的平均数量等于物体离开系统的平均速率和每个物体在系统中停留的平均时间的乘积。如果物体离开和进入系统的总体出入流是平衡的，则离开速率也就是进入速率。

可以用 Little 定律和流平衡的原理来证明多用户系统中的响应时间公式。假定平均思考时间为`z`的`n`个用户同时登录到响应时间为`r`的任意系统中。 每个用户周期都由思考和等待系统响应两个阶段组成， 因此整个元系统 （包括用户和计算机系统）中的作业总数固定为`n`。如果切断系统输出到用户的路径，则元系统的平均负荷为`n`、 平均响应时间为`z + r`而吞吐量为`x`（用每个时间单位处理的作业数来度量）。Little 定律告诉我们`n = x × (z + r)`，对`r`求解得到`r = n / x - z`。
