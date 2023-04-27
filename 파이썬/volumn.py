# -*- coding: utf-8 -*-
"""
Created on Fri Apr 14 16:33:45 2023

@author: Juyoung
"""

def volumn(vol):
    print("현재 음량은 ",vol,"입니다.")
    up = int(input("음량을 얼마나 변경할 것인가요?"))
    return up
    
now = 3
now += volumn(now)
print("증가/감소 후의 음량은 ",now,"입니다.")
