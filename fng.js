// Função para verificar se um caractere é um símbolo não-terminal
function isNonTerminal(symbol) {
    return symbol.toUpperCase() === symbol;
  }
  
  // Função para verificar se um caractere é um símbolo terminal
  function isTerminal(symbol) {
    return !isNonTerminal(symbol);
  }
  
  // Função para converter uma regra em FNG
  function convertToGreibachForm(rule, nonTerminal) {
    const convertedRules = [];
    let nonTerminalCount = 0;
  
    for (let i = 0; i < rule.length; i++) {
      if (isNonTerminal(rule[i]) && rule[i] !== nonTerminal) {
        const newNonTerminal = `Z${nonTerminalCount++}`;
        convertedRules.push(rule[i] + newNonTerminal);
        nonTerminal = newNonTerminal;
      } else {
        convertedRules.push(rule[i]);
      }
    }
  
    return convertedRules;
  }
  
  // Função para converter uma gramática em FNG
  function convertGrammarToGreibachForm(grammar) {
    const convertedGrammar = {};
  
    for (let nonTerminal in grammar) {
      const rules = grammar[nonTerminal];
      const convertedRules = [];
  
      for (let i = 0; i < rules.length; i++) {
        convertedRules.push(convertToGreibachForm(rules[i], nonTerminal));
      }
  
      convertedGrammar[nonTerminal] = convertedRules;
    }
  
    return convertedGrammar;
  }
  
  // Gramática de exemplo
  const grammar = {
    S: ['AB', 'SCB'],
    A: ['aA', 'C'],
    B: ['bB', 'b'],
    C: ['cC', 'γ']
  };
  
  // Converter a gramática em FNG
  const convertedGrammar = convertGrammarToGreibachForm(grammar);
  
  // Imprimir a gramática convertida
  console.log(convertedGrammar);