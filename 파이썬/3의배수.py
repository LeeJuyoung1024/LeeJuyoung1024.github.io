# -*- coding: utf-8 -*-
"""
Created on Fri Apr 14 16:20:41 2023

@author: Juyoung
"""

result = 0
i = 1

while i <= 1000:
    if i % 3 == 0:
        result += i
        i += 1
    else:
        i += 1

print(result)

        