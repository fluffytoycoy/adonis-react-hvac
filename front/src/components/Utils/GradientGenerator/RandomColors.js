class RandomColors {
  constructor(){
    this.linearGradient = 'linear-gradient(45deg, transparent, #0ec3ff)';
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
    return (this.timesCalled + 1) % 3 ? this.blue : this.orange
  }


  generate(){
      let background = `linear-gradient(${this.getCalculatedDeg()}deg, transparent,${(this.getCurrentColor())} `
      this.timesCalled = ++this.timesCalled > 2 ? 0 : this.timesCalled;
      return background;
  }
}

export default RandomColors