
class Tableau1 extends Phaser.Scene {

    preload(){
        //bg (tout au fond et très flou)
        this.load.image('bg', 'Assets/Background/Fond.png');
        //ground (premier plan noir)


    }

    create() {
        let bg = this.add.image(0, 0, 'bg').setOrigin(0, 0);


    }
}