class Temperatura {
    private valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
  
    getValorEmCelsius(): number {
      return this.valor;
    }
  
    converterParaFahrenheit(): number {
      return (this.valor * 9/5) + 32;
    }
  
  
    converterParaKelvin(): number {
      return this.valor + 273.15;
    }
  }
  
  const temperatura = new Temperatura(25); 
  
  console.log("Temperatura em Celsius: ${temperatura.getValorEmCelsius()}°C");
  console.log("Temperatura em Fahrenheit: ${temperatura.converterParaFahrenheit()}°F");
  console.log("Temperatura em Kelvin: ${temperatura.converterParaKelvin()}K");