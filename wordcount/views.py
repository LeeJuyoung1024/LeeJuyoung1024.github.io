from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def about(request):
    return render(request, 'about.html')

def result(request):
    text = request.GET['fulltxt']
    words = text.split()
    word_dic = {}

    for i in words:
        if i in word_dic:
            word_dic[i]+=1
        else:
            word_dic[i]=1

    return render(request, 'result.html', {'full':text, 'total':len(words), 'dictionary':word_dic.items()})
