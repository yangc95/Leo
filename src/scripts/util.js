class Util {
    constructor(leo, game) {
        document.addEventListener('keydown', e => {
            e.preventDefault();
            switch (e.keyCode) {
                case 37:
                    leo.left = true;
                    break
                case 65:
                    leo.left = true;
                    break
                case 38:
                    leo.up = true;
                    break
                case 87:
                    leo.up = true;
                    break
                case 39:
                    leo.right = true
                    break
                case 68:
                    leo.right = true
                    break
                case 40:
                    leo.down = true;
                    break
                case 83:
                    leo.down = true;
                    break
            }
        });

        document.addEventListener('keyup', e => {
            e.preventDefault();
            switch (e.keyCode) {
                case 37:
                    leo.left = false;
                    break;
                case 65:
                    leo.left = false;
                    break;
                case 38:
                    leo.up = false;
                    break;
                case 87:
                    leo.up = false;
                    break;
                case 39:
                    leo.right = false;
                    break;
                case 68:
                    leo.right = false;
                    break;
                case 40:
                    leo.down = false;
                    break;
                case 83:
                    leo.down = false;
                    break;
            }
        });
    }
}

export default Util;