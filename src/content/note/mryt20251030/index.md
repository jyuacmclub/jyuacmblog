---
title: MRYT
timestamp: 2025-11-14 17:03:19+08:00
series: 每日一题
tags: [位运算,异或]
draft: true
---

找筷子
[点击跳转](https://www.luogu.com.cn/problem/P1469)

# 异或运算求解问题题解

## 题目描述
经过一段时间的紧张筹备，电脑小组的“RP 餐厅”终于开业了，这天，经理 LXC 接到了一个定餐大单，可把大家乐坏了！员工们齐心协力按要求准备好了套餐正准备派送时，突然碰到一个棘手的问题：筷子！

CX 小朋友找出了餐厅中所有的筷子，但遗憾的是这些筷子长短不一，而我们都知道筷子需要长度一样的才能组成一双，更麻烦的是 CX 找出来的这些筷子数量为奇数，但是巧合的是，这些筷子中只有一只筷子是落单的，其余都成双，善良的你，可以帮 CX 找出这只落单的筷子的长度吗？
## 解题思路

### 解读
给定 n 个整数，求所有整数的异或值。
### 异或运算的性质

异或运算（XOR，符号为 `^`）具有以下重要性质：

1. **交换律**：`a ^ b = b ^ a`
2. **结合律**：`a ^ (b ^ c) = (a ^ b) ^ c`
3. **自反性**：`a ^ a = 0`
4. **与0的关系**：`a ^ 0 = a`
5. **可逆性**：如果 `a ^ b = c`，那么 `a ^ c = b`，`b ^ c = a`

### 解题方法

利用异或运算的性质，我们可以直接遍历所有数字，将它们依次进行异或运算：

- 初始化答案为 0
- 对于每个输入的数字 x，执行 `ans = ans ^ x`
- 根据异或的``自反性``和``与0的关系``，我们可以通过异或运算求解
- 最终 ans 就是所有数字的异或结果

时间复杂度：O(n)
空间复杂度：O(1)

## 代码实现
**代码说明：**
- 初始化时 ans 为 0，因为任何两个相同的数异或都为0，任何数与 0 异或都等于其本身
- 循环中逐个读取数字并累加异或值
### C语言解法

```c
#include<cstdio>
int x, n, ans;
int main(){
    scanf("%d", &n);
    for(int i = 1; i <= n; i++){
        scanf("%d", &x);
        ans ^= x;
    }
    printf("%d\n", ans);
    return 0;
}
```

### C++解法

```cpp
#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int ans = 0;
    for(int i = 0; i < n; i++) {
        int x;
        cin >> x;
        ans ^= x;
    }

    cout << ans << endl;
    return 0;
}
```
### Python解法



```python
n = int(input())
numbers = map(int, input().split())
ans = 0
for x in numbers:
    ans ^= x
print(ans)
```
