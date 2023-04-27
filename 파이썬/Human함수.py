# -*- coding: utf-8 -*-
"""
Created on Fri Apr 14 18:31:58 2023

@author: Juyoung
"""

class Human:
    def __init__(self, name, age, sex):
        self.name = name
        self.age = age
        self.sex = sex
        
    def who(self):
        print(f"이름: {self.name}, 나이: {self.age}, 성별 {self.sex}")

jy = Human("이주영", 24, "여자")
jy.who()