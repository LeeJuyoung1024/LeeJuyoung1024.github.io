# -*- coding: utf-8 -*-
"""
Created on Fri Apr 14 15:48:24 2023

@author: Juyoung
"""

user_list = ["Kim", "Hong", "Lee"]
user_id = input("아이디 입력: ")

if user_id in user_list:
    password = input("패스워드 입력: ")
    if password == "12345678":
        print("환영합니다.")
    else:
        print("패스워드가 일치하지 않습니다.")
        
        


