import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]

  connect() {
    console.log("Cards controller connected")
  }

  shuffle() {
    const cards = this.cardTargets
    const imageNumbers = Array.from({length: 25}, (_, i) => i + 1)
    
    // Embaralha o array de números
    for (let i = imageNumbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageNumbers[i], imageNumbers[j]] = [imageNumbers[j], imageNumbers[i]]
    }

    // Aplica as imagens aos cards
    cards.forEach((card, index) => {
      const imageNumber = imageNumbers[index]
      const imageName = `${imageNumber} - ${this.getImageName(imageNumber)}`
      card.style.backgroundImage = `url('/assets/${imageName}.png')`
      
      // Adiciona animação de virada
      card.style.transform = 'rotateY(180deg)'
      setTimeout(() => {
        card.style.transform = 'rotateY(0)'
      }, 100)
    })
  }

  getImageName(number) {
    const imageNames = {
      1: "Eu",
      2: "Meu Desejo",
      3: "O outro",
      4: "Amor Sólido",
      5: "Paixão ilusória",
      6: "Burnout",
      7: "idealização ilusória",
      8: "Idealização Util",
      9: "esforço inutil",
      10: "Esforço Util",
      11: "Entrega rapida",
      12: "Entrega lenta",
      13: "Paranoia",
      14: "miséria",
      15: "Descoberta Gloriosa",
      16: "sucesso absoluto",
      17: "sucesso mediano",
      18: "Maçã Podre",
      19: "ódio",
      20: "Doença",
      21: "amizade sincera",
      22: "arrependimento",
      23: "decadencia",
      24: "Feitiçaria",
      25: "espirito"
    }
    return imageNames[number]
  }
}
