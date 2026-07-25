# Swift (JBS Challenge) - Sistema Gamificado de Gestao e Vendas

LINK PARA VISUALIZACAO AO VIVO DO PROJETO:
https://davizinhoofiap.github.io/swift-challenge/

Aplicaçao Web Front-end interativa desenvolvida para a Swift (JBS). A plataforma utiliza estratégias de gamificaçao (missões diárias, metas semanais e mensais, ranking de colaboradores e lojas, loja de resgate de pontos e microtreinamentos) para aumentar o engajamento das equipes de loja, elevar o NPS e alavancar o ticket médio.

---

## Desenvolvedor

- Davi Victor Monte da Silva (Estudante de Tecnologia na FIAP)

---

## Instruçoes de Acesso e Utilizaçao (Demonstraçao)

A página inicial do sistema é a Tela de Login (`index.html`). Por se tratar de um protótipo de demonstraçao:
- E-mail: Qualquer e-mail valido (exemplo: vendedor@swift.com.br)
- Senha: Qualquer senha (exemplo: 123456)
- Acesso Direto: Clique no botão Login para entrar no painel principal da plataforma (pages/dashboard.html).

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
└── README.md                       # Documentaçao técnica do projeto
```

---

## Tecnologias Utilizadas

- HTML5: Estruturaçao semântica de páginas
- CSS3 / Vanilla CSS: Layouts responsivos e estilizaçao modular
- Bootstrap 5 & Bootstrap Icons: Grid responsivo, modais e iconografia
- JavaScript (ES6+): Filtros de categoria e manipulaçao dinâmica do DOM

---

## Como Executar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/davizinhoofiap/swift-challenge.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd swift-challenge
   ```
3. Abra o arquivo `index.html` em qualquer navegador ou utilize um servidor local (ex: Live Server no VS Code).
