これは [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) でブートストラップされた [Next.js](https://nextjs.org/) プロジェクトです。

## はじめに

[Node.js](https://nodejs.org/en)(LTSを強く推奨)&npmのセットアップを完了したあと、開発用サーバーを起動します：
```bash
npm run dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開くと結果が表示されます。

`pages/index.tsx`を修正することで、ページの編集を開始することができます。ファイルを編集すると、ページは自動的に更新されます。

[APIルート](https://nextjs.org/docs/api-routes/introduction)は[http://localhost:3000/api/hello](http://localhost:3000/api/hello)でアクセスできます。
このエンドポイントは `pages/api/hello.ts` で編集できます。

`pages/api`ディレクトリは `/api/*` にマップされる。このディレクトリのファイルはReactページではなく、[API routes](https://nextjs.org/docs/api-routes/introduction)として扱われます。

## 詳細はこちら

Next.jsの詳細については、以下のリソースをご覧ください：

- [Next.js Documentation](https://nextjs.org/docs) - Next.jsの機能とAPIについて学ぶことができます。
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsのチュートリアルです。

[Next.jsのGitHubリポジトリ](https://github.com/vercel/next.js/) - フィードバックやコントリビューションを歓迎します！

## Github Pagesへのデプロイ
Github上のSettings -> Pages内のSourceをGitHub Actionsに切り替えるとWebページがデプロイされます。
