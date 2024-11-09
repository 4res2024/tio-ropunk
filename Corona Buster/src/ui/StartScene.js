import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }

  init(data) {
    this.startButton = undefined;

  }

  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("play-button", "images/1432343177.png");
  }

  create() {
    this.add.image(200, 320, "background");
    // @ts-ignore
    this.add.text(55, 150, 'Welcome!', {fontSize : '64px', fill : 'black'})
    this.replayButton = this.add.image(200, 400, 'play-button')
      .setInteractive().setScale(0.2);
    
    this.replayButton.once(
        "pointerup",
        () => {
          this.scene.start("corona-buster-scene");
        },
        this
      );
  }

  
}