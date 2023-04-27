# -*- coding: utf-8 -*-
"""
Created on Fri Apr 14 15:55:26 2023

@author: Juyoung
"""

pw = "4312"
input_pw = ""

while pw != input_pw:
    input_pw = input("비번입력: ")
    
    if pw == input_pw:
        print("패스워드가 같습니다.")
        break
    else:
        print("비밀번호가 틀렸습니다.")
