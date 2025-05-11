# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Runtime (QuickSort):
Push initial full range onto stack: $\Theta$(1)
Each partition step processes subarray (size k): $\Theta$(k)
Partition compares each element with the pivot once: $\Theta$(k)
Worst case partitioning: $\Theta$(n) calls, each sign of (n, n-1, ..., 1) -> $\Theta$(n^2) total
Total worst case work: $\Theta$(n^2)

The worst case runtime is $\Theta$(n^2). this is because if the pivot is the smallest or largest element, then the partitioning becomes very unbalanced, leading to each level to process almost the entire array.


“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”

For this assignment, I asked Chat GPT for help improving the presentation and articulation of my reasoning. I also sought help from Chat GPT for help resolving eslint's continual failure.
