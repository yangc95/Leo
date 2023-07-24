class Story {
    constructor(leo, map) {
        this.leo = leo;
        this.map = map;
        this.storyline = {
            foundPolly: false, 
            foundHewert: false 
        };
        this.currentPos = {
            map: true,
            pollysHouse: false,
            hewertsHouse: false
        };
    }

    storylines () {
        // Storyline here
    }
}

export default Story;
