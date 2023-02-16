
import requests

path = '/mnt/c/Users/PICO/Documents/node.js/cde_debug/home.html'

with open(path, 'r') as f:
    file_cnt = f.read()

url = 'http://127.0.0.1:2229/review_cookie'
body = {
    'html_text': file_cnt,
    'req_url': 'http://www.chinadrugtrials.org.cn/clinicaltrials.searchlist.dhtml'
}

res = requests.post(url, data=body)
print(res.text)