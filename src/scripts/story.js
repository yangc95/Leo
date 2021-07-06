class Story {
    constructor(leo, map) {
        this.leo = leo;
        this.map = map;
        this.storyline = {
            // based on the point in the storyline, the map will change
            // map changes include what characters say and where they are located
            foundPolly: false,
            foundHewert: false 
        };
        // this is a story line object
        this.currentPos = {
            map: true,
            pollysHouse: false,
            hewertsHouse: false
        };
    }

    storylines () {

    }
}

export default Story;