```
SSR -> Server side rendering
CSR -> Client side rendering

Rotas:
  - Static / SSG
  - Dynamic
  - ISR <- Incremental static regeneration (SSG + Dynamic)
    - Depois de 60s quero atualizar o conteúdo dela (por tempo);
    - Depois que eu atualizar algum conteúdo ela renderizza (por ação);

/ (Pública)
/post/[slug] (Pública)

/admin/post (Privado - Dynamic)
/admin/post/[id] (Privado - Dynamic)
/admin/post/new (Privado - Dynamic)
```
