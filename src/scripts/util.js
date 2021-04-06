 class Util {
    constructor(leo, game) {
        document.addEventListener('keydown', e => {
            switch (e.keyCode) {
                case 39:
                   leo.right = true
                    break
                case 37:
                    leo.left = true;
                    break
                case 40:
                    leo.down = true
                    break
                case 38:
                    leo.up = true
                    break
            }
        });

        document.addEventListener('keyup', e => {
            switch (e.keyCode) {
                case 39:
                    leo.right = false;
                    break;
                case 37:
                    leo.left = false;
                    break;
                case 40:
                    leo.down = false;
                    break;
                case 38:
                    leo.up = false;
                    break;
            }
        });
    }
}

export default Util;