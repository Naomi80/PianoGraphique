
class Tableau1 extends Phaser.Scene {

    preload() {
        //bg (tout au fond et très flou)
        this.load.image('bg', 'Assets/Background/Fond.png');
        //ground (premier plan noir)
        this.load.image('bubbles', 'Assets/Ground/Bulles/bubbles.png');
        this.load.image('blueBubbles', 'Assets/Ground/Bulles/blue_bubbles.png');
        this.load.image('greyBubbles', 'Assets/Ground/Bulles/grey_bubbles.png');
        this.load.image('littleBlueBubbles', 'Assets/Ground/Bulles/ltlle_blue_bubbles.png');
        this.load.image('littleGreyBubbles', 'Assets/Ground/Bulles/little_grey_bubbles.png');
        this.load.image('pinkBubbles', 'Assets/Ground/Bulles/pink_bubbles.png');
        this.load.image('violetBubbles', 'Assets/Ground/Bulles/violet_bubbles.png');




    }

    create() {
        //background
        let bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);
        //ground
        this.bubbles = this.add.image(200, 500, 'bubbles').setOrigin(0, 0);
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
        this.blueBubbles = this.add.image(350, 500, 'blueBubbles').setOrigin(0, 0);
        this.blueBubbles.setVisible(false)
        this.blueBubbles.setScale(0.2)
        this.tweens.add({
            targets: this.blueBubbles,
            y: -400,
            duration: 3000,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });
        this.littleGreyBubbles = this.add.image(500, 500, 'littleGreyBubbles').setOrigin(0, 0);
        this.littleGreyBubbles.setVisible(false)
        this.littleGreyBubbles.setScale(1)
        this.tweens.add({
            targets: this.littleGreyBubbles,
            y: -400,
            duration: 3000,
            ease: 'linear',
            yoyo: false,
            flipY: false,
            repeat: -1,
            delay: 0,
        });



        this.initKeyboard();



    }

    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                // initialisation de la touche en appuie U pour Bubbles
                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.bubbles.visible == true) {
                        me.bubbles.setVisible(false)
                    } else {
                        me.bubbles.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie I pour blueBubbles
                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.blueBubbles.visible == true) {
                        me.blueBubbles.setVisible(false)
                    } else {
                        me.blueBubbles.setVisible(true)
                    }
                    break
                // initialisation de la touche en appuie I pour blueBubbles
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.littleGreyBubbles.visible == true) {
                        me.littleGreyBubbles.setVisible(false)
                    } else {
                        me.littleGreyBubbles.setVisible(true)
                    }
                    break

            }
        });
    }
}