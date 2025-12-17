## Tasks Application - Projeto de gerenciamento de tarefas moderno

### Aplicação web completa com React e Node.js

## 📁 Estrutura do Projeto

```
tasks-application/
├── app/
│   ├── frontend/          # React App
│   │   ├── src/           # Código fonte React
│   │   ├── public/        # Arquivos públicos
│   │   ├── build/         # Build de produção
│   │   └── package.json   # Dependências frontend
│   ├── backend/           # Node.js API
│   │   ├── api/           # Controllers e rotas
│   │   ├── config/        # Configurações
│   │   ├── database/      # Migrations
│   │   ├── lib/           # Utilitários
│   │   ├── index.js       # Servidor principal
│   │   └── package.json   # Dependências backend
│   └── Dockerfile         # Container da aplicação
├── aws/                   # Infraestrutura AWS
│   ├── .ebextensions/     # Configurações Elastic Beanstalk
│   ├── build-and-push-public.sh  # Script de build e deploy
│   ├── deploy.sh          # Script de deploy
│   └── .env               # Variáveis de ambiente
└── README.md
```

## 🚀 Tecnologias

**Frontend:**
- React 17
- Dark/Light Theme
- Internacionalização (PT/EN)
- CSS moderno com variáveis

**Backend:**
- Node.js + Express
- PostgreSQL
- Sequelize ORM
- API RESTful

**AWS:**
- Elastic Beanstalk
- RDS PostgreSQL
- ECR (Container Registry)
- Docker

## 🛠️ Desenvolvimento Local

### Frontend
```bash
cd app/frontend
npm install
npm start  # http://localhost:3000
```

### Backend
```bash
cd app/backend
npm install
npm start  # http://localhost:3000
```

## 📦 Deploy AWS

### Build e Push
```bash
cd aws
source .env
./build-and-push-public.sh
```

### Deploy
```bash
./deploy.sh v-YYYYMMDD-HHMMSS
```

## 🎯 Features

- ✅ Interface moderna com dark theme
- ✅ Gerenciamento de tarefas (CRUD)
- ✅ Marcação de prioridade
- ✅ Internacionalização PT/EN
- ✅ Design responsivo
- ✅ API RESTful
- ✅ Deploy automatizado AWS

## 📋 API Endpoints

- `GET /api/tarefas` - Listar tarefas
- `POST /api/tarefas` - Criar tarefa
- `GET /api/tarefas/:uuid` - Buscar tarefa
- `PUT /api/tarefas/update_priority/:uuid` - Atualizar prioridade
- `DELETE /api/tarefas/:uuid` - Deletar tarefa

## 🌐 URL da Aplicação

**Produção:** http://task-dev.us-east-1.elasticbeanstalk.com

