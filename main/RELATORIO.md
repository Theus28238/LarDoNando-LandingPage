# Relatório do Projeto — Site "Lar do Nando"

Projeto acadêmico, desenvolvido seguindo o modelo **Spec-Driven Development** (spec em `Specs/LarDoNando`): a especificação funcional veio primeiro, o plano técnico depois, e a implementação seguiu as tarefas descritas lá, com um redesign posterior para alinhar fielmente aos mockups visuais (`Images/`).

---

## 1. O que foi construído

Site institucional de uma página (SPA) para a ONG de proteção animal "Lar do Nando", com uma página adicional dedicada à história de um caso real (Michele), usando **React 19 + Tailwind CSS v4 + Vite**.

### Estrutura de páginas

- **Home (`/`)**: Header, Hero, 01 Conheça nossa história, 02 O que fazemos, 03 Um caso real (Michele), 04 Dúvidas frequentes, 05 Apoio, Footer.
- **`/historias/michele`**: a mesma seção "Um caso real" renderizada como página própria (com breadcrumb e sem o header fixo do restante da Home), reutilizando o mesmo componente (`CaseStudySection`) com a prop `standalone`.

### Estrutura de pastas (`src/`)

```
components/
  layout/   → Header, Footer, Nav, Layout
  ui/       → Button, Badge, Card, Tabs, Timeline, StatCard, FaqItem,
              FormField, SectionEyebrow, PhotoPlaceholder, FadeIn
  sections/ → Hero, AboutSection, WhatWeDoSection, CaseStudySection,
              FaqSection, SupportSection (+ support/DonationTab,
              VolunteerTab, AdoptionTab)
data/       → services.js, faq.js, stats.js (conteúdo estático)
pages/      → Home.jsx, CaseStudy.jsx
assets/images/ → fotos reais fornecidas (hero, fundadores)
```

---

## 2. Como foi feito (ordem cronológica)

1. **Leitura da spec** (`Specs/LarDoNando`) para entender escopo, seções, formulários e design system.
2. **Setup do projeto**: Vite + React + Tailwind.
3. **Implementação inicial** de todas as seções e formulários a partir do texto da spec, com placeholders onde a spec marcava "a confirmar com a ONG".
4. **Troca de ícones** para Bootstrap Icons (pedido explícito, no lugar de `lucide-react`).
5. **Integração das fotos reais** (`Images/hero.png`, `Rectangle.png`, `Rectangle-leiliane.png`) no Hero e na seção "Nossa história".
6. **Redesign de fidelidade ao mock**: comparação pixel a pixel com `Images/Lar do Nando — Página web.png`, `Mobile completo.png` e as variantes `estrutura-web-painel-voluntario*.png`, corrigindo várias diferenças entre o que eu tinha implementado e o visual real do mock (ver seção 3).
7. **Animações de fade-in** ao rolar a página, usando `IntersectionObserver` nativo.

---

## 3. Por que foi feito assim (decisões e justificativas)

### 3.1 Arquitetura

- **React + Tailwind v4 (`@tailwindcss/vite`)**: definido pela própria spec (seção 8). O Tailwind v4 usa tokens de cor/fonte via `@theme` no CSS (`src/index.css`) em vez de `tailwind.config.js`, que é a forma atual recomendada pela ferramenta — adaptei a instrução da spec (escrita pensando em v3) para a versão instalada.
- **Michele como componente reutilizável com prop `standalone`**: a spec pedia explicitamente que essa seção pudesse "ser destacada na Home e/ou virar uma página própria reutilizável" (seção 5.5). Implementar como um único componente configurável evita duplicar conteúdo e HTML.
- **Sem backend**: formulários simulam envio com `useState` local e mensagem de sucesso, exatamente como a spec define ("Sem backend no escopo").

### 3.2 Bootstrap Icons

Pedido explícito do usuário no meio da implementação, substituindo a biblioteca `lucide-react` que eu tinha usado inicialmente (ícones via classes `bi bi-*` importadas em `index.css`).

### 3.3 Redesign de fidelidade ao mock — principais divergências encontradas e como resolvi

Ao comparar a primeira versão (feita só a partir do texto da spec) com os mockups visuais, encontrei vários pontos onde o texto da spec e a imagem real do mock divergiam, ou onde os próprios arquivos de mock se contradiziam entre si. Resolvi cada um assim:

| Item | Spec / 1ª versão | Mock visual | Decisão tomada |
|---|---|---|---|
| Botão no header | CTA "Quero ajudar" fixo | Sem CTA, só nav | Segui o mock (removi o botão) |
| Menu mobile | Hambúrguer (texto da spec) | Nenhum hambúrguer em nenhum mock | Segui o mock, mas **aviso**: hoje a única navegação no celular é pelo rodapé ou rolando a página |
| Texto do menu | "Sobre nós / O que fazemos / Michele / FAQ / Apoio" | Header usa "Sobre nós / O que fazemos / **Como fazemos** / **O que já fizemos** / Apoio"; rodapé mobile usa o outro set | Implementei os **dois sets diferentes** (`HEADER_NAV_ITEMS` e `FOOTER_NAV_ITEMS` em `Nav.jsx`), cada um usado onde o mock mostra |
| FAQ | Accordion (clique para abrir) | Todas as respostas sempre visíveis, com `[ placeholders ]` em âmbar inline | Troquei para sempre-visível, mais fiel e também mais acessível (sem depender de clique para ler conteúdo) |
| "O que fazemos" | Grid uniforme de 6 cards | Mobile é lista numerada 01-06; desktop é grid assimétrico com ícones em badge circular, 1 card ocupando 3 linhas e outro 2 linhas | Recriei os dois layouts (`DesktopCard` / `MobileListItem` em `WhatWeDoSection.jsx`) |
| Numeração das seções | 06 seções no sitemap da spec | Mock usa 01/02 só nas 2 primeiras seções; Michele e FAQ aparecem sem número no desktop mas **com** número no mobile; Apoio aparece como "05" num arquivo e "06" noutro | Fiquei com numeração 01-05 consistente (Michele=03, FAQ=04, Apoio=05), mostrando o número só no mobile para Michele/FAQ (prop `numberOnlyMobile` do `SectionEyebrow`) |
| Formulários (Apoio) | Campos em coluna única | Duas colunas com subtítulos em caixa alta ("DADOS PESSOAIS", "DISPONIBILIDADE" etc.) | Reescrevi os 3 formulários nesse layout |
| "Áreas de colaboração" | Checkboxes | Pills clicáveis no desktop, checkboxes no mobile | Implementei os dois (mesmo estado React, visual diferente por breakpoint) |
| Botões | `rounded-full` (pill) | `rounded-xl` (cantos moderados) | Troquei globalmente no componente `Button` |

> Nota: nenhum mock trouxe foto real da Michele (antes/depois) — essa parte continua como placeholder tracejado, igual à checklist de pendências da própria spec ("confirmar com a ONG").

### 3.4 Animações de fade-in

Em vez de instalar uma biblioteca (ex. Framer Motion), criei um componente pequeno (`FadeIn.jsx`) com `IntersectionObserver` nativo do navegador:
- **Por quê sem biblioteca**: projeto acadêmico enxuto, a necessidade é simples (fade + leve translação ao entrar na tela) e não justifica uma dependência pesada.
- Respeita `prefers-reduced-motion` (usuários que desativam animações no sistema operacional não veem a transição).
- Aplicado com atraso escalonado (`delay`) nos grids de cards (O que fazemos, FAQ) para dar efeito de cascata.
- Na seção de Apoio, o conteúdo da aba também re-anima sutilmente ao trocar de Doação/Voluntário/Adoção (usando `key={active}` para remontar o `FadeIn`).

---

## 4. Como testar

### 4.1 Rodar o projeto localmente

```bash
npm install      # só na primeira vez / após mudar dependências
npm run dev      # servidor de desenvolvimento em http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run lint     # lint com oxlint
```

Não há suíte de testes automatizados (unitários) configurada — a spec não pediu e o projeto é focado em front-end estático sem lógica de negócio complexa.

### 4.2 Checklist de teste manual

**Navegação**
- [ ] Clicar em cada item do menu do header (desktop) rola suavemente até a seção correta.
- [ ] No rodapé (mobile e desktop), os links levam às seções certas.
- [ ] O link "Ver a história da Michele" (card "Cuidado veterinário") navega para `/historias/michele`.
- [ ] Na página da Michele, o link "Início" no breadcrumb volta para `/`.

**Responsividade** (testar em pelo menos 2 larguras: ~390px e ~1440px)
- [ ] Hero: mobile mostra foto + texto empilhados; desktop mostra foto de fundo com overlay.
- [ ] "O que fazemos": mobile em lista numerada vertical; desktop em grid assimétrico de 3 colunas.
- [ ] Seção da Michele: mobile mostra as duas fotos (antes/depois) lado a lado estaticamente; desktop mostra o toggle "No resgate / Hoje" interativo.
- [ ] Apoio: abas em coluna lateral no desktop, em linha no mobile; "Áreas de colaboração" em pills no desktop, checkboxes no mobile.

**Formulários** (seção Apoio)
- [ ] Trocar entre as abas Doação / Voluntário / Adoção mantém o conteúdo correto.
- [ ] Botão "Copiar" da chave PIX copia o valor (testável manualmente colando em outro campo).
- [ ] Preencher os campos obrigatórios (`*`) e enviar cada formulário mostra a mensagem de sucesso; deixar um campo obrigatório vazio impede o envio (validação nativa do HTML5 via `required`).
- [ ] Nenhum dado é realmente enviado a um servidor (comportamento esperado — spec define "sem backend").

**FAQ**
- [ ] Todas as 8 perguntas e respostas ficam visíveis sem precisar clicar.
- [ ] Os trechos entre colchetes (ex. `[ WhatsApp da ONG ]`) aparecem destacados em âmbar.

**Animações**
- [ ] Ao carregar a Home, o texto do Hero aparece com fade-in.
- [ ] Ao rolar a página, cada seção/card aparece com fade-in a partir do momento em que entra na tela (não antes).
- [ ] Com "reduzir movimento" ativado no sistema operacional, o conteúdo aparece direto, sem animação.

**Acessibilidade básica**
- [ ] Todas as imagens têm `alt` descritivo.
- [ ] Todos os campos de formulário têm `label` associado (clicar no texto do label foca o campo).
- [ ] Texto sobre fundo amarelo usa azul-escuro (contraste), nunca branco.

### 4.3 Como eu testei durante o desenvolvimento

Usei o Chromium headless via Playwright (instalado localmente no ambiente de desenvolvimento, não é dependência do projeto) para:
- Tirar screenshots em viewport mobile (390×844) e desktop (1440×900) e comparar visualmente com os arquivos em `Images/`.
- Simular cliques reais (trocar abas, abrir/preencher formulários, clicar no toggle da Michele) e checar o console do navegador em busca de erros JS.
- Simular rolagem incremental da página (`window.scrollTo` em passos) para confirmar que as animações de fade-in disparam no momento certo e que nenhum conteúdo fica preso em opacidade 0.

---

## 5. Pendências conhecidas (herdadas da spec e dos mocks)

- Fotos reais da Michele (antes/depois) e dos cards "Resgate de emergência" / "Adoção responsável" — por ora usando fotos de banco de imagens livres (ver créditos abaixo) só para preencher visualmente; trocar pelas fotos reais assim que a ONG fornecer.
- Número de WhatsApp oficial — atualmente um placeholder (`5500000000000`).
- Chave PIX / QR Code definitivos — usando o CNPJ como chave, conforme spec.
- Processo de adoção, dias/horários de visita — marcados como "a confirmar com a ONG" no FAQ.
- Menu de navegação no mobile: os mocks não mostram nenhum (nem hambúrguer, nem nav fixo). Hoje a navegação mobile depende de rolar a página ou usar os links do rodapé. Se isso for considerado uma regressão de usabilidade, um hambúrguer pode ser adicionado de volta facilmente (o componente `Header.jsx` já tinha essa lógica antes do redesign).

### 5.1 Créditos das fotos temporárias de banco de imagens

Adicionadas em `src/assets/images/` para preencher os placeholders tracejados até a ONG enviar fotos reais:

| Arquivo | Usada em | Fonte | Licença | Autor |
|---|---|---|---|---|
| `michele-resgate.jpg` | Michele — "No resgate" | Unsplash (foto `BLaXAI922FI`) | Unsplash License | 12photostory (@12photography) |
| `michele-hoje.jpg` | Michele — "Hoje" / foto principal | Wikimedia Commons ("Rescued street dog.jpg") | CC BY-SA 4.0 | Gillyene Bortoloti |
| `resgate-emergencia.jpg` | Card "Resgate de emergência" | Wikimedia Commons (`Para "Rescate Animal" (4304467407).jpg`, via Flickr) | CC BY 2.0 | Eneas De Troya |
| `adocao-familia.jpg` | Card "Adoção responsável" | Unsplash (foto `ISg37AI2A-s`) | Unsplash License | Eric Ward (@ericjamesward) |

As duas CC BY/BY-SA exigem atribuição — manter esta tabela ou repassar os créditos caso as imagens continuem em produção por muito tempo. Assim que a ONG fornecer fotos reais da Michele e dos resgates, substituir estes arquivos e remover a atribuição correspondente.

### 5.2 Otimização de imagens para dispositivos/conexões mais fracas

Antes: `hero-nando.png` sozinho pesava 2,5 MB (1920×1080 em PNG, formato sem perdas para uma fotografia), e as fotos dos fundadores também estavam em PNG. Total de imagens: ~4,8 MB, tudo carregado de uma vez, sem lazy loading e sem variante mobile.

Mudanças feitas:
- Todas as fotos convertidas de PNG para JPEG (mozjpeg, qualidade 76–82) e redimensionadas para o tamanho realmente exibido.
- Hero agora tem duas variantes: `hero-nando-mobile.jpg` (14 KB, usada no `<img>` mobile) e `hero-nando.jpg` (54 KB, usada no background do desktop) — antes as duas telas carregavam o mesmo PNG de 2,5 MB.
- `loading="lazy"` + `width`/`height` explícitos em toda imagem abaixo da dobra (About, O que fazemos, Michele), evitando layout shift e download antecipado.
- `fetchPriority="high"` na imagem do Hero (é o LCP da página).

Resultado: ~4,8 MB → ~500 KB no total de imagens do build (`npm run build` mostra o breakdown por arquivo).

### 5.3 Troca do Bootstrap Icons por lucide-react

O projeto usava só 8 ícones (`bi-exclamation-triangle-fill`, `bi-heart-pulse-fill`, `bi-house-heart-fill`, `bi-scissors`, `bi-heart-fill`, `bi-people-fill`, `bi-shield-check`, `bi-camera`), mas carregava a fonte Bootstrap Icons inteira (woff+woff2, ~314 KB) e o CSS completo da biblioteca (que o Tailwind não conseguia podar, por vir de um `@import` de outro pacote).

Trocado por [`lucide-react`](https://lucide.dev) — cada ícone é um componente React/SVG importado individualmente (`TriangleAlert`, `HeartPulse`, `HouseHeart`, `Scissors`, `Heart`, `Users`, `ShieldCheck`, `Camera`), então só os 8 usados entram no bundle. Em `data/services.js` os ícones agora são referências de componente (`icon: TriangleAlert`), renderizados como `<service.icon />`.

Resultado: as duas fontes (314 KB) somem completamente e o CSS final cai de 107 KB para 27 KB (19,83 KB → 5,70 KB gzip); o JS cresce ~5 KB pelos SVGs dos ícones — troca líquida muito favorável.
