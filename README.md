# Swift (JBS Challenge) - Sistema Gamificado de Gestão e Vendas

Aplicação Web Front-end interativa desenvolvida para a Swift (JBS). A plataforma utiliza estratégias de gamificação (missões diárias, metas semanais e mensais, ranking de colaboradores e lojas, loja de resgate de pontos e microtreinamentos) para aumentar o engajamento das equipes de loja, elevar o NPS e alavancar o ticket médio.

---

## Desenvolvedor

- **Davi Victor Monte da Silva**

---

## Link de Acesso Online (GitHub Pages)

Acesse a aplicação funcionando ao vivo:  
[https://davizinhoofiap.github.io/swift-challenge/](https://davizinhoofiap.github.io/swift-challenge/)

---

## Credenciais de Acesso (Demonstração)

A página inicial do sistema é a Tela de Login. Por ser um protótipo interativo de demonstração:
- **E-mail:** Qualquer e-mail (ex: `vendedor@swift.com.br`)
- **Senha:** Qualquer senha (ex: `123456`)
- **Acesso Direto:** Basta clicar no botão Login para entrar no painel principal da plataforma (`dashboard.html`).

---

## Arquitetura do Projeto

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

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica de páginas
- **CSS3 / Vanilla CSS**: Layouts responsivos e estilização modular
- **Bootstrap 5 & Bootstrap Icons**: Grid responsivo, modais e iconografia
- **JavaScript (ES6+)**: Filtros de categoria e manipulação dinâmica de DOM