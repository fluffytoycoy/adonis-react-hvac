
class RandomColors {
  constructor(){
    this.linearGradient = 'linear-gradient(45deg, #0ec3ff, transparent)';
    this.orange = 'orange';
    this.blue = "#0ec3ff";
    this.timesCalled = 0;
    this.startingDeg =45;
  }


  getCalculatedDeg(){
    console.log(this.startingDeg + (this.timesCalled * 90))
    return this.startingDeg + (this.timesCalled * 90)
  }

  getCurrentColor(){
    return (this.timesCalled + 1) % 2 ? this.blue : this.orange
  }


  generate(){
      let background = `linear-gradient(${this.getCalculatedDeg()}deg, ${(this.getCurrentColor())}, transparent`
      this.timesCalled = ++this.timesCalled > 5 ? 0 : this.timesCalled;
      return background;
  }
}

export default RandomColors