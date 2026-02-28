# 🍣 ROOTS SUSHI BAR - STYLE GUIDE PREMIUM

## Documento de Identidade Visual e Padrões de Design

---

## ETAPA 1: ANÁLISE VISUAL DA IDENTIDADE

### 1️⃣ PALETA DE CORES PREMIUM

#### **Cores Primárias**

| Cor | HEX | RGB | Uso | Sensação |
|-----|-----|-----|-----|----------|
| Preto Carvão | `#0d1117` | 13, 17, 23 | Fundo principal | Sofisticação, mistério |
| Vermelho Fogo | `#B22222` | 178, 34, 34 | Headers, botões | Paixão, energia |
| Vermelho Escuro | `#000000` | 0, 0, 0 | Acentos, botões | Intensidade, profundidade |
| Vermelho Intenso | `#d32f2f` | 211, 47, 47 | Call-to-action | Paixão, urgência, fogo |

#### **Cores Secundárias**

| Cor | HEX | RGB | Uso |
|-----|-----|-----|-----|
| Off-White Premium | `#f0e6d2` | 240, 230, 210 | Texto principal, elegância |
| Cinza Suave | `#b0b0b0` | 176, 176, 176 | Texto secundário |
| Ouro Premium | `#d4af37` | 212, 175, 55 | Títulos, elementos premium |
| Fundo Secundário | `#1a1a1f` | 26, 26, 31 | Cards, componentes |

**Atmosfera Geral:** *Dark Mode Premium com toques de Luxo Minimalista*
- Transmite: Exclusividade, Autenticidade, Experiência Premium
- Sensação: Rústico-moderno, Sofisticado, Orgânico

---

### 2️⃣ TIPOGRAFIA PROFISSIONAL

#### **Sistema de Fontes Do Google Fonts**

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Poppins:wght@300;400;500;600;700&display=swap');
```

##### **`Playfair Display` - Fonte Display (Títulos)**
- **Família:** Serif elegante e robusta
- **Pesos:** 700 (bold), 800 (extra-bold), 900 (black)
- **Uso:** `h1`, `h2`, cabeçalhos, identidade da marca
- **Características:** 
  - Letras largas e majestosas
  - Excelente para criar hierarquia visual
  - Transmite sofisticação e elegância
- **Exemplos:**
  - Títulos principais: `h1 { font-family: 'Playfair Display', serif; font-size: 3.5rem; font-weight: 900; }`
  - Subtítulos: `h2 { font-family: 'Playfair Display', serif; font-size: 2.5rem; }`

##### **`Poppins` - Fonte Corpo (Texto Principal)**
- **Família:** Sans-serif moderna e limpa
- **Pesos:** 300 (light), 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Uso:** Parágrafos, textos de suporte, formulários, navegação
- **Características:**
  - Excelente legibilidade em telas
  - Moderna e contemporânea
  - Versátil e profissional
- **Exemplos:**
  - Texto corpo: `p { font-family: 'Poppins', sans-serif; font-weight: 400; }`
  - Ênfases: `strong { font-weight: 600; }`

#### **Hierarquia Tipográfica Recomendada**

```css
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.2;
}

h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 1px;
}

h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
}

p {
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.8;
}

small {
  font-size: 0.875rem;
  font-weight: 300;
}
```

---

### 3️⃣ TEXTURAS & ATMOSFERA

#### **Conceito Visual**

- **Fundo Base:** Cinza escuro (#1a1a1a) — parece rocha costeira ou carvão
- **Textura:** Gradiente radial sutil com cor vermelha na base (radiação de fogo/energia)
- **Ruído:** Padrão de linha fina horizontal, com curvas leves para evocar raízes subterrâneas
- **Efeito Backdrop:** Blur sutil em componentes para profundidade
- **Motivo Raiz:** SVG repetitivo transparente com curvas sutis usado no background para reforçar o nome "Roots" e a conexão com a terra
- **Fumaça & Chamas:** camadas de gradientes radiais vermelhos e brancos simulam fumaça e fogo emergindo das raízes, transmitindo caos e intensidade por trás do conteúdo

#### **Técnica CSS Implementada**

```css
body {
  background-color: var(--cor-fundo-principal); /* #0d1117 */
  background-image: 
    radial-gradient(ellipse at 50% 100%, rgba(211, 47, 47, 0.15) 0%, transparent 50%),
    repeating-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.02) 0px,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 2px
    );
  background-attachment: fixed;
}
```

**Resultado:**
- Sensação de profundidade e movimento
- Atmosfera intensa mas acolhedora
- Premium e sofisticado

---

## ETAPA 2: TRADUÇÃO PARA CSS

### 1️⃣ VARIÁVEIS CSS (ROOT)

```css
:root {
  /* ===== CORES ===== */
  --cor-fundo-principal: #1a1a1a;
  --cor-fundo-secundario: #2a2a2a;
  --cor-texto-principal: #f0e6d2;
  --cor-texto-secundario: #cccccc;
  --cor-destaque: #B22222;
  --cor-flame: #000000;
  --cor-root: #444444;
  --cor-acento-ouro: #ffae00;
  
  /* ===== TIPOGRAFIA ===== */
  --fonte-display: 'Playfair Display', serif;
  --fonte-corpo: 'Poppins', sans-serif;
  
  /* ===== EFEITOS & SOMBRAS ===== */
  --sombra-glow: 0 0 20px rgba(211, 47, 47, 0.3);
  --sombra-premium: 0 10px 40px rgba(0, 0, 0, 0.5);
}
```

**Como Usar:**
```css
button {
  background: var(--cor-destaque);
  color: var(--cor-texto-principal);
  box-shadow: var(--sombra-glow);
}
```

---

### 2️⃣ COMPONENTES PRINCIPAIS

#### **HEADER - Premium e Imponente**

```css
header {
  background: linear-gradient(135deg, var(--cor-destaque) 0%, var(--cor-flame) 100%);
  color: var(--cor-texto-principal);
  padding: 2.5rem 0;
  box-shadow: var(--sombra-premium);
  border-bottom: 3px solid var(--cor-acento-ouro);
}

header h1 {
  font-family: var(--fonte-display);
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

header p {
  color: var(--cor-acento-ouro);
  font-weight: 300;
  letter-spacing: 1px;
}
```

---

#### **BOTÕES - Intensos e Interativos**

```css
button {
  background: linear-gradient(135deg, var(--cor-destaque) 0%, #b71c1c 100%);
  color: white;
  padding: 1.3rem 2.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 0 5px 20px rgba(211, 47, 47, 0.3);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(211, 47, 47, 0.5), var(--sombra-glow);
  letter-spacing: 1.5px;
}

button:active {
  transform: translateY(-1px);
}
```

**Características:**
- Gradiente vermelho vibrante
- Efeito glow ao passar o mouse
- Animação suave com transição
- Sensação de profundidade com sombra

---

#### **CARDS/DISHES - Elegantes e Interativos**

```css
.dish {
  background: var(--cor-fundo-secundario);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--sombra-premium);
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.dish:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 50px rgba(211, 47, 47, 0.2), var(--sombra-glow);
  border-color: rgba(212, 175, 55, 0.5);
}

.dish h3 {
  font-family: var(--fonte-display);
  font-size: 1.5rem;
  color: var(--cor-acento-ouro);
}

.dish-image {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.dish:hover .dish-image {
  transform: scale(1.05);
}
```

**Características:**
- Borda com ouro sutil
- Levitação ao hover com escala
- Imagem com zoom suave
- Efeito glow ao interagir

---

#### **FORMULÁRIOS - Elegantes e Modernos**

```css
form {
  background: linear-gradient(135deg, rgba(26, 26, 31, 0.8) 0%, rgba(178, 34, 34, 0.1) 100%);
  padding: 2.5rem;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: var(--sombra-premium);
  backdrop-filter: blur(10px);
}

input, select, textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(212, 175, 55, 0.3);
  color: var(--cor-texto-principal);
  border-radius: 8px;
  padding: 1rem;
  font-family: var(--fonte-corpo);
  transition: all 0.3s ease;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--cor-destaque);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 15px rgba(211, 47, 47, 0.2);
}
```

**Características:**
- Fundo semi-transparente com gradiente
- Efeito glassmorphism (blur backdrop)
- Borda ouro sutil
- Focus com foco vermelho vibrante

---

### 3️⃣ EFEITOS AVANÇADOS

#### **Galeria Interativa**

Use um container `.gallery` com itens flexíveis que expandem ao passar o mouse ou tocar. Exemplo de CSS:
```css
.gallery { display:flex; overflow:hidden; height:300px; }
.gallery-item { flex:1; transition:flex 0.5s ease; }
.gallery-item:hover,
.gallery-item.active { flex:3; }
.gallery-item img { width:100%; height:100%; object-fit:cover; transition:transform 0.5s; }
.gallery-item:hover img,
.gallery-item.active img { transform:scale(1.1); }
```

JS mínimo para suporte a toque:
```js
const items=document.querySelectorAll('.gallery-item');
items.forEach(it=>{
 it.addEventListener('mouseenter',()=>{clearActive();it.classList.add('active');});
 it.addEventListener('mouseleave',()=>{it.classList.remove('active');});
 it.addEventListener('touchstart',()=>{clearActive();it.classList.add('active');});
});
function clearActive(){items.forEach(i=>i.classList.remove('active'));}
document.addEventListener('click',e=>{if(!e.target.closest('.gallery'))clearActive();});
```

Essa galeria é ideal para mostrar imagens adicionais e cria um efeito de janelas dinâmicas ao mover o cursor.

#### **Glow Effect (Para elementos importantes)**

```css
.glow {
  box-shadow: 0 0 20px rgba(211, 47, 47, 0.3);
  animation: glow-pulse 2s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(211, 47, 47, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(211, 47, 47, 0.5);
  }
}
```

---

#### **Hover Elevation (Para interatividade)**

```css
.elevate:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}
```

---

#### **Text Shadow Premium**

```css
.text-premium {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  letter-spacing: 1px;
}
```

---

## GUIA PRÁTICO DE IMPLEMENTAÇÃO

### ✅ **DO: Faça Isso**

```css
/* ✅ Use variáveis CSS */
button {
  background: var(--cor-destaque);
  color: var(--cor-texto-principal);
  box-shadow: var(--sombra-glow);
}

/* ✅ Use a tipografia correta para cada elemento */
h1 { font-family: var(--fonte-display); }
p { font-family: var(--fonte-corpo); }

/* ✅ Aplique transições suaves */
.component {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}
```

### ❌ **DON'T: Não Faça Isso**

```css
/* ❌ Evite cores hardcoded */
button { background: #ff0000; } /* ✗ */

/* ❌ Evite fontes do sistema */
h1 { font-family: Arial; } /* ✗ */

/* ❌ Evite transições muito rápidas ou lentas */
.component { transition: all 5s linear; } /* ✗ */

/* ❌ Evite muitas sombras diferentes */
.component { box-shadow: 0 0 10px #fff, 0 0 20px #000; } /* ✗ */
```

---

## REFERÊNCIA RÁPIDA

### Cores
- 🟫 Fundo: `#0d1117`
- � Vermelho Fogo: `#B22222`
- ⚫ Vermelho Escuro/Preto: `#000000`
- 🔴 Vermelho Destaque: `#d32f2f`
- 🟡 Ouro Premium: `#d4af37`
- ⚪ Texto Principal: `#f0e6d2`

### Fontes
- **Títulos:** Playfair Display (Google Fonts)
- **Corpo:** Poppins (Google Fonts)

### Efeitos
- **Sombra Premium:** `0 10px 40px rgba(0, 0, 0, 0.5)`
- **Glow Vermelho:** `0 0 20px rgba(211, 47, 47, 0.3)`

---

## CHECKLIST DE QUALIDADE

Ao criar novos componentes, verifique:

- [ ] Está usando cores da paleta CSS?
- [ ] Está usando as fonts corretas (Playfair Display para títulos, Poppins para corpo)?
- [ ] Tem transição suave (`0.3s` a `0.4s`)?
- [ ] Tem efeito hover apropriado?
- [ ] Funciona bem em mobile?
- [ ] Tem texto descritivo para acessibilidade?
- [ ] A sombra está ajustada (não muito pesada)?

---

## Conclusão

Este style guide premium transmite a **intensidade, sofisticação e organicidade** esperadas do Roots Sushi Bar. Cada elemento foi projetado para criar uma **experiência visual imersiva** que comunica exclusividade e autenticidade.

**Última atualização:** 25 de fevereiro de 2026
**Versão:** 1.0 Premium

---

Dúvidas? Consulte o CSS do `index.html` para exemplos práticos de implementação! 
🍣 **Roots Sushi Bar - Onde Premium e Autêntico se Encontram**
