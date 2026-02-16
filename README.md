# nexus-auth-commerce-api

JWT tabanlı kimlik doğrulama sistemine sahip ürün, kategori ve kullanıcı yönetimini sağlayan kurumsal Web API projesi.

## Teknoloji

| | |
|---|---|
| Mimari | aspnet-core |
| Frontend | React + Vite + Tailwind |
| Backend | ASP.NET Core 8 Web API |
| Veritabani | PostgreSQL |
| Deployment | Docker |

## Kurulum

```bash
cd Backend
dotnet restore
dotnet run
```

## Dosya Yapisi

```
nexus-auth-commerce-api/
  styles/variables.css
  styles/reset.css
  styles/global.css
  database/schema.sql
  database/seed.sql
  Backend/NexusCommerce.API/NexusCommerce.API.csproj
  Backend/NexusCommerce.API/appsettings.json
  Backend/NexusCommerce.API/Models/Entities.cs
  Backend/NexusCommerce.API/Data/AppDbContext.cs
  Backend/NexusCommerce.API/Controllers/AuthController.cs
  Backend/NexusCommerce.API/Controllers/ProductsController.cs
  Backend/NexusCommerce.API/Program.cs
  Frontend/package.json
  Frontend/vite.config.js
  Frontend/tailwind.config.js
  Frontend/src/index.css
  Frontend/src/services/api.js
  Frontend/src/context/AuthContext.jsx
  Frontend/src/components/ProtectedRoute.jsx
  Frontend/src/pages/Login.jsx
  Frontend/src/pages/Products.jsx
  Frontend/src/App.jsx
  tests/test-plan.md
  tests/checklist.md
  .gitignore
  Dockerfile
  docker-compose.yml
  .github/workflows/deploy.yml
```

## Uretim Raporu

- uiux: Tamamlandi
- db: Tamamlandi
- backend: Tamamlandi
- frontend: Tamamlandi
- qa: Tamamlandi
- devops: Tamamlandi

---

> Bu proje Kurumsal AI Yazilim Ajansi tarafindan otomatik olarak uretilmistir.
