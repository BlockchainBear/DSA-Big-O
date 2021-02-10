Big O notation

Big O notation is a way of describing the time complexity of an algorithm.

Algorithm performance can be analyzed in terms of space or time.

Space complexity refers to the amount of physical memory that an algorithm requires to complete.

Time complexity refers to the number of operations an algorithm requires to complete.
Constant time O(1)

Constant time complexity is the "holy grail". No matter the size of your input, the algorithm will take the same amount of time to complete.
Logarithmic time O(log(n))

Logarithmic time complexity (O(log n)) is the next best thing after constant time. While logarithmic time complexity algorithms do take longer with larger inputs, running time increases slowly.
Linear time O(n)

Algorithms with linear time complexity (O(n)) have running times that are directly proportional to the size (n) of the input.
Polynomial time O(n^k)

An algorithm with polynomial time complexity has a running time that would be some input size n raised to some constant power k. The easiest way to understand polynomial time complexity is with nested loops. An algorithm that requires 2 levels of looping over an input would be O(n^2) while one requiring 3 levels of looping would be O(n^3).
Exponential time O(2^n)

Algorithms with exponential time complexity (O(2^n)) have running times that grow rapidly with any increase in input size. For an input of size 2, an exponential time algorithm will take 2^2 = 4 time.