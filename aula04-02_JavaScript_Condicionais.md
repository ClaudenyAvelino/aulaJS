# 📘 Apostila de JavaScript
## Operadores de Comparação, Condicionais e Estrutura de Escolha

---

## 🎯 Objetivo da Apostila
Apresentar, de forma clara e prática, os **operadores de comparação** e as **estruturas condicionais** em JavaScript, fundamentais para a lógica de programação.

---

## 📌 Pré-requisitos
- Noções básicas de lógica de programação  
- Conhecimento introdutório em JavaScript  
- Editor de código (VS Code ou similar)

---

## 🔹 1. Operadores de Comparação

Os operadores de comparação retornam valores booleanos (`true` ou `false`).

| Operador | Descrição |
|--------|----------|
| `==` | Igualdade |
| `===` | Igualdade estrita |
| `!=` | Diferente |
| `!==` | Diferente estrito |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

### 🧪 Exemplo

```javascript
const idadeVinny = 35;
const minhaIdade = 36;

console.log(idadeVinny == minhaIdade);
console.log(idadeVinny > minhaIdade);
console.log(idadeVinny < minhaIdade);
```

---

## 🔹 2. Comparação Estrita

```javascript
const idade1 = 36;
const idade2 = "36";

console.log(idade1 === idade2); // false
console.log(idade1 !== idade2); // true
```

📌 **Boa prática:** prefira sempre `===` e `!==`.

---

## 🔹 3. Estrutura Condicional `if / else`

```javascript
const idade = 17;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

---

## 🔹 4. Condicional com `else if`

Critérios de avaliação:

- 9 a 10 → Excelente  
- 7 a 8 → Boa  
- 4 a 6 → Mediana  
- 0 a 3 → Ruim  

```javascript
const nota = 6;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Boa");
} else if (nota >= 4) {
    console.log("Mediana");
} else {
    console.log("Ruim");
}
```

---

## 🔹 5. Estrutura de Escolha `switch / case`

```javascript
const nota = 8;

switch (nota) {
    case 10:
    case 9:
        console.log("Excelente");
        break;
    case 8:
    case 7:
        console.log("Boa");
        break;
    case 6:
    case 5:
    case 4:
        console.log("Mediana");
        break;
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("Ruim");
        break;
    default:
        console.log("Valor inválido");
}
```

---

## 📝 Exercícios

1. Crie duas variáveis e compare se são iguais.
2. Verifique se uma pessoa pode votar (idade ≥ 16).
3. Crie um programa que avalie a nota de um aluno.

---

## 📚 Conclusão

Os operadores de comparação e estruturas condicionais são essenciais para a construção de algoritmos eficientes e aplicações interativas.

---

✍️ **Autor:** Claudeny Avelino  
📘 **Disciplina:** Algoritmos / JavaScript
