### Description
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

```
Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point
```

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

```
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
```

In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

---

### Lables
✅ - Done
❌ - Error
🚧 - WIP (Work in progress)

---

### Pomodoro 1
- if has one 5 on dice rool should return 50 points ✅
- if has one 1 on dice rool should return 100 points ✅
- if has 3 times 2 on dice rool should return 200 points ✅
- if has 3 times 3 on dice rool should return 300 points ✅
- if has 3 times 4 on dice rool should return 400 points ✅
- if has 3 times 5 on dice rool should return 500 points ✅
- if has 3 times 6 on dice rool should return 600 points ✅
- if has 3 times 1 on dice rool should return 1000 points ✅
- if has 4 times 1 on dice rool should return 1100 points 🚧
- if has 5 times 1 on dice rool should return 1200 points 🚧
- if has 4 times 5 on dice rool should return 550 points 🚧
- if has 5 times 5 on dice rool should return 600 points 🚧

### Pomodoro 2
- if has 2 times 5 on dice rool should return 100 points ✅
- if has 4 times 5 on dice rool should return 550 points ✅
- if has 5 times 5 on dice rool should return 600 points ✅
- if has 2 times 1 on dice rool should return 200 points ✅
- if has 4 times 1 on dice rool should return 1100 points ✅
- if has 5 times 1 on dice rool should return 1200 points ✅
- refactor to use regex to count for each time number 2 is get 🚧

### Pomodoro 3
- refactor to use regex to count for each time number 2 is get ✅
- refactor to use regex to count for each time number 3 is get ✅
- refactor to use regex to count for each time number 4 is get ✅
- refactor to use regex to count for each time number 6 is get ✅
- refactor to use regex to count for each time number 1 is get ✅
- refactor to use regex to count for each time number 5 is get ✅


### Pomodoro 4
- refactor(test): fill input with 5 values ✅
- refactor: logic to count number occurence at once ✅
- if has many time different values