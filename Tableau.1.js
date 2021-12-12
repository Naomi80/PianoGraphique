
class Tableau1 extends Phaser.Scene {

    preload() {
        //bg (tout au fond et très flou)
        this.load.image('bg', 'Assets/Background/Fond.png');
        //ground (premier plan noir)
        ///Bulles
        this.load.image('bubbles', 'Assets/Ground/Bulles/bubbles.png');
        this.load.image('blueBubbles', 'Assets/Ground/Bulles/blue_bubbles.png');
        this.load.image('bubbles1', 'Assets/Ground/Bulles/bubbles1.png');
        this.load.image('bubbles2', 'Assets/Ground/Bulles/bubbles2.png');
        this.load.image('bubbles3', 'Assets/Ground/Bulles/bubbles3.png');
        this.load.image('bubbles4', 'Assets/Ground/Bulles/bubbles4.png');
        this.load.image('bubbles5', 'Assets/Ground/Bulles/bubbles5.png');
        this.load.image('bubbles6', 'Assets/Ground/Bulles/bubbles6.png');
        this.load.image('bubbles7', 'Assets/Ground/Bulles/bubbles7.png');

        ///Petits poissons
        this.load.image('fishes1', 'Assets/Ground/Petits poissons/fishes_yellow_blue.png');
        this.load.image('fishes2', 'Assets/Ground/Petits poissons/fishes_yellow_violet.png');
        this.load.image('fishes3', 'Assets/Ground/Petits poissons/fishes_orange-yellow.png');
        this.load.image('fishes4', 'Assets/Ground/Petits poissons/fishes_orange.png');
        this.load.image('fishes5', 'Assets/Ground/Petits poissons/fishes_green.png');
        this.load.image('fishes6', 'Assets/Ground/Petits poissons/fishes_blue.png');
        ///Gros poissons
        this.load.image('seaKing', 'Assets/Ground/Gros poissons/seaking.png');
        this.load.image('seaBoar', 'Assets/Ground/Gros poissons/seaboar.png');
        this.load.image('meuhmeuh', 'Assets/Ground/Gros poissons/meuhmeuh.png');
        this.load.image('megalo', 'Assets/Ground/Gros poissons/megalo.png');
        this.load.image('laboon', 'Assets/Ground/Gros poissons/laboon.png');
        ///Hommes poissons
        this.load.image('siren', 'Assets/Ground/hommespoissons/siren.png');
        this.load.image('shirahoshi', 'Assets/Ground/hommespoissons/shirahoshi.png');
        this.load.image('ryuboshi', 'Assets/Ground/hommespoissons/ryuboshi.png');
        this.load.image('pappug', 'Assets/Ground/hommespoissons/pappug.png');
        this.load.image('octy', 'Assets/Ground/hommespoissons/octy.png');
        this.load.image('neptune', 'Assets/Ground/hommespoissons/neptune.png');


    }

    create() {
        //background
        let bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
        //ground
        ///Bulles
        this.bubbles = this.add.image(-10, 500, 'bubbles').setOrigin(0, 0);
        this.bubbles.setVisible(false)
        this.bubbles.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles,
            y: -400,
            duration: 3000,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.blueBubbles = this.add.image(90, 500, 'blueBubbles').setOrigin(0, 0);
        this.blueBubbles.setVisible(false)
        this.blueBubbles.setScale(0.2)
        this.tweens.add({
            targets: this.blueBubbles,
            y: -400,
            duration: 3500,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles1 = this.add.image(180, 500, 'bubbles1').setOrigin(0, 0);
        this.bubbles1.setVisible(false)
        this.bubbles1.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles1,
            y: -400,
            duration: 3250,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles2 = this.add.image(290, 500, 'bubbles2').setOrigin(0, 0);
        this.bubbles2.setVisible(false)
        this.bubbles2.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles2,
            y: -400,
            duration: 3600,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles3 = this.add.image(380, 500, 'bubbles3').setOrigin(0, 0);
        this.bubbles3.setVisible(false)
        this.bubbles3.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles3,
            y: -400,
            duration: 3400,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles4 = this.add.image(490, 500, 'bubbles4').setOrigin(0, 0);
        this.bubbles4.setVisible(false)
        this.bubbles4.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles4,
            y: -400,
            duration: 3100,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles5 = this.add.image(580, 500, 'bubbles5').setOrigin(0, 0);
        this.bubbles5.setVisible(false)
        this.bubbles5.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles5,
            y: -400,
            duration: 4000,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles6 = this.add.image(690, 500, 'bubbles6').setOrigin(0, 0);
        this.bubbles6.setVisible(false)
        this.bubbles6.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles6,
            y: -400,
            duration: 4100,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.bubbles7 = this.add.image(740, 500, 'bubbles7').setOrigin(0, 0);
        this.bubbles7.setVisible(false)
        this.bubbles7.setScale(0.2)
        this.tweens.add({
            targets: this.bubbles7,
            y: -400,
            duration: 3800,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        ///petits poissons
        this.fishes1 = this.add.image(0, 0, 'fishes1').setOrigin(0, 0);
        this.fishes1.setScale(0.1)
        this.fishes2 = this.add.image(100, 0, 'fishes2').setOrigin(0, 0);
        this.fishes2.setScale(0.1)
        this.ryuboshi = this.add.image(300, 0, 'ryuboshi').setOrigin(0, 0);
        this.ryuboshi.setScale(0.3)

        this.initKeyboard();



    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                ///bulles
                // initialisation de la touche en appuie A pour Bubbles
                case Phaser.Input.Keyboard.KeyCodes.A:
                    if (me.bubbles.visible == true) {
                        me.bubbles.setVisible(false)
                    } else {
                        me.bubbles.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie Z pour blueBubbles
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    if (me.blueBubbles.visible == true) {
                        me.blueBubbles.setVisible(false)
                    } else {
                        me.blueBubbles.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie E pour Bubbles1
                case Phaser.Input.Keyboard.KeyCodes.E:
                    if (me.bubbles1.visible == true) {
                        me.bubbles1.setVisible(false)
                    } else {
                        me.bubbles1.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie R pour Bubbles2
                case Phaser.Input.Keyboard.KeyCodes.R:
                    if (me.bubbles2.visible == true) {
                        me.bubbles2.setVisible(false)
                    } else {
                        me.bubbles2.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie T pour Bubbles3
                case Phaser.Input.Keyboard.KeyCodes.T:
                    if (me.bubbles3.visible == true) {
                        me.bubbles3.setVisible(false)
                    } else {
                        me.bubbles3.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie Y pour Bubbles4
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.bubbles4.visible == true) {
                        me.bubbles4.setVisible(false)
                    } else {
                        me.bubbles4.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie U pour Bubbles5
                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.bubbles5.visible == true) {
                        me.bubbles5.setVisible(false)
                    } else {
                        me.bubbles5.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie I pour Bubbles6
                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.bubbles6.visible == true) {
                        me.bubbles6.setVisible(false)
                    } else {
                        me.bubbles6.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie O pour Bubbles7
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.bubbles7.visible == true) {
                        me.bubbles7.setVisible(false)
                    } else {
                        me.bubbles7.setVisible(true)
                    }
                    break

            }
        });
    }
}