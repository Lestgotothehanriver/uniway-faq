# UNIWAY Support / FAQ (Render 배포용)

깔끔한 하얀색 테마의 공식 FAQ 단일 페이지입니다. **Render**에 바로 올릴 수 있도록 준비된 Node/Express 서버가 포함되어 있습니다.

## 로컬 실행
```bash
npm ci
npm start
# http://localhost:3000
```

## Render에 배포 (가장 쉬운 방법)
1) 이 폴더를 새 GitHub 저장소로 올립니다.
```bash
git init
git add .
git commit -m "Add Uniway FAQ"
git branch -M main
git remote add origin https://github.com/<your-username>/uniway-faq.git
git push -u origin main
```

2) Render 대시보드 → **New** → **Web Service** → 방금 올린 저장소 선택  
3) Build Command: `npm ci` / Start Command: `node server.js` / Region은 가까운 곳 선택  
4) 생성 후 초록불이 되면 발급된 URL로 접속하면 됩니다.

> 참고: `render.yaml`를 사용해서 **Blueprint**로 배포해도 됩니다. (Render → New → Blueprint → 저장소 선택)

## 파일 구조
```
uniway-faq/
├─ public/
│  ├─ index.html     # FAQ 페이지
│  └─ styles.css     # 스타일
├─ server.js         # Express 서버
├─ package.json
└─ render.yaml       # Render 배포 설정(웹 서비스)
```
