# 🚗 Lions Seminovos — Projeto Front-end

Este projeto consiste na recriação e adaptação do site **Lions Seminovos**, desenvolvido como parte de um **processo seletivo**, com foco em **qualidade de código, organização, responsividade e fidelidade visual**, respeitando o tempo disponível para entrega.

O objetivo foi construir uma aplicação **front-end funcional, limpa e escalável**, utilizando apenas tecnologias web nativas, sem frameworks, priorizando clareza e boas práticas.

---

## 📌 Visão Geral do Projeto

O site é composto por múltiplas páginas, cada uma com uma responsabilidade clara:

- **Home**
- **Catálogo de veículos**
- **Agendamento de visita**
- **Formulários com modal de confirmação**
- **Componentes reutilizáveis (navbar, footer, botão flutuante)**

Durante o desenvolvimento, algumas decisões de layout e estrutura foram ajustadas para **melhorar usabilidade, legibilidade e experiência do usuário**, mantendo sempre o site oficial como referência visual.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**  
- **CSS3 (Flexbox + Grid)**  
- **JavaScript (Vanilla JS)**  
- **Google Fonts (Montserrat)**  

> Nenhum framework ou biblioteca externa foi utilizada, reforçando o domínio dos fundamentos da web.

---

## 🧱 Estrutura do Projeto

```text
/
├── home/
│   ├── home.html
│   ├── style.css
│   └── script.js
│
├── catalogo/
│   ├── catalogo.html
│   └── catalogo.css
│
├── visita/
│   ├── visita.html
│   ├── visita.css
│   └── visita.js
│
├
│
└── README.md
Cada página possui seu próprio CSS, garantindo isolamento visual, facilidade de manutenção e clareza estrutural.

🎨 Principais Funcionalidades
🔹 Home

Banner principal com carrossel em JavaScript

Destaques de categorias de veículos

Vídeo institucional em formato banner

Seção de análise de crédito

Footer e botão flutuante de WhatsApp

🔹 Catálogo

Grid responsivo de veículos

Paginação simulada (3 páginas com 12 veículos cada)

Filtros por tipo de carro:

Hatch

Sedan

SUV

Cards com imagem, ano e preço

Layout fiel ao site base

🔹 Agendamento de Visita

Seção hero com imagem de fundo e gradiente

Formulário completo:

Nome

Telefone

E-mail

Data

Horário

Mensagem

Modal premium de confirmação, com:

Acessibilidade (focus trap)

Fechamento por clique externo e tecla ESC

Bloqueio de scroll ao abrir

📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first, utilizando media queries para garantir compatibilidade com:

Smartphones

Tablets

Notebooks

Telas widescreen

Componentes como grids, formulários e modais se adaptam automaticamente ao tamanho da tela.

🧠 Decisões de Projeto

Durante o desenvolvimento, algumas decisões foram tomadas com foco em:

Usabilidade: layouts mais limpos e objetivos

Manutenibilidade: CSS organizado por seções

Escalabilidade: estrutura pronta para integração futura com back-end

Performance: uso de imagens e scripts de forma controlada

Acessibilidade: foco em navegação por teclado e hierarquia semântica

Essas escolhas visam aproximar o projeto de um cenário real de produção, respeitando o escopo e o tempo disponíveis.

🚀 Possíveis Evoluções Futuras

Visando a evolução do projeto para um ambiente de produção real, algumas melhorias e expansões naturais foram mapeadas:

Implementação de back-end para recebimento, validação e tratamento dos dados enviados pelos formulários (agendamento, análise de crédito e contato).

Integração com banco de dados, utilizando PHP no lado do servidor, para persistência de informações como:

Dados de clientes

Solicitações de visita

Leads de análise de crédito

Criação de API própria para gerenciamento de veículos, filtros e paginação dinâmica do catálogo.

Página individual de detalhes do veículo, com informações completas e histórico.

Autenticação e painel administrativo para gestão de veículos e leads.

Implementação de máscaras e validações avançadas nos inputs.

Otimizações de performance e SEO.

Evolução da interface mobile com menu responsivo (hamburger menu).

Essas melhorias permitem que o projeto evolua de um protótipo front-end para uma aplicação web completa, escalável e pronta para uso comercial.

▶️ Como Executar o Projeto

Clone o repositório:

git clone https://simascassio/lions-simas


Acesse a pasta do projeto:

cd lions-seminovos


Abra qualquer arquivo .html diretamente no navegador
(não é necessário servidor local para o funcionamento atual)

📄 Observações Finais

Este projeto foi desenvolvido exclusivamente para fins de avaliação técnica, demonstrando organização, domínio de front-end e capacidade de tomada de decisões técnicas dentro de prazos definidos.

Desenvolvido por:
Cássio Simas
