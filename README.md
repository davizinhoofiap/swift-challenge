# FIAP + Swift (JBS Challenge) - Sistema Gamificado de Gestão & Vendas

> **Sprint 2: Gamificação para Equipes Swift**

Aplicação Web Front-end interativa desenvolvida para a **Swift (JBS)** como parte do **FIAP Challenge**. A plataforma utiliza estratégias de gamificação (missões diárias, metas semanais/mensais, ranking de colaboradores/lojas, loja de resgate de pontos e microtreinamentos) para aumentar o engajamento das equipes de loja, elevar o NPS e alavancar o ticket médio.

---

## 👥 Integrantes do Grupo

| Nome | RM |
| :--- | :--- |
| **Davi Victor Monte da Silva** | 563104 |
| **Fernando Vasconcelos Peruchi** | 564687 |
| **João Vitor Bernardo** | 564687 |
| **Lara Lima Mota** | 563560 |
| **Victor Hugo Cadina da Silva** | 565544 |

---

## 🌐 Link de Acesso Online (GitHub Pages)

Acesse a aplicação funcionando ao vivo:
👉 **[https://davizinhoofiap.github.io/swift-challenge/](https://davizinhoofiap.github.io/swift-challenge/)**

---

## 📁 Arquitetura Limpa do Projeto

```text
Challenge/
├── index.html                      # Tela de Login (Ponto de entrada do sistema)
├── pages/                          # Páginas internas da plataforma
│   ├── dashboard.html              # Painel Principal / Metas Diárias e Semanais
│   ├── ranking.html                # Ranking de Vendedores e Lojas
│   ├── loja-pontos.html            # Loja de Resgate de Pontos e Recompensas
│   ├── treinamento.html            # Módulo de Microtreinamentos
│   └── promocoes/                  # Módulo de Ofertas e Detalhes de Produtos
│       ├── index.html              # Catálogo de Promoções com Filtros
│       ├── costela-porco.html      # Detalhes do Produto
│       ├── costela-suina.html      # Detalhes do Produto
│       ├── fraldinha.html          # Detalhes do Produto
│       └── picanha.html            # Detalhes do Produto
├── assets/                         # Recursos Estáticos Centralizados
│   ├── css/                        # Estilos organizados por módulo
│   │   ├── base.css                # Estilos globais e variáveis de design
│   │   ├── login.css               # Estilo da página de Login
│   │   ├── dashboard.css           # Estilo da Dashboard
│   │   ├── ranking.css             # Estilo da página de Ranking
│   │   ├── loja-pontos.css         # Estilo da Loja de Pontos
│   │   ├── treinamento.css         # Estilo da página de Treinamento
│   │   └── promocoes.css           # Estilo do módulo de Promoções
│   ├── js/                         # Scripts JavaScript
│   │   └── promocoes.js            # Filtros interativos de produtos
│   └── images/                     # Mídias organizadas por categoria
│       ├── brand/                  # Logotipos e marcas
│       ├── icons/                  # Ícones vetoriais SVG
│       ├── products/               # Imagens de produtos e cortes
│       └── treinamento/            # Capas dos cursos de treinamento
└── README.md                       # Documentação do projeto
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica de páginas
- **CSS3 / Vanilla CSS**: Layouts responsivos e estilização modular
- **Bootstrap 5 & Bootstrap Icons**: Grid responsivo, modais e iconografia
- **JavaScript (ES6+)**: Filtros de categoria e manipulação dinâmica de DOM

---

## ⚙️ Como Ativar o GitHub Pages no Repositório

Para garantir que o link público funcione para qualquer pessoa:

1. No repositório no GitHub, vá em **Settings** (Configurações).
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** $\rightarrow$ **Branch**, selecione a branch `main` e a pasta `/ (root)`.
4. Clique em **Save**. Em instantes, o site estará no ar no link informado acima!