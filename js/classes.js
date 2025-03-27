class Comic {

    constructor(id, title, issueNumber, volume, storyArc, storeDate, characters, creators, description, image) {
        this.id = id;
        this.title = title || "";
        this.issueNumber = issueNumber || "";
        this.volume = volume || "";
        this.storyArc = storyArc || "";
        this.storeDate = storeDate || "";
        this.characters = characters || "";
        this.creators = creators || "";
        this.descrdescription = description || "";
        this.image = image || "";

        this.fav = false;
    }

    // FUNCION GUARDAR FAVORITOS
    saveFav() {
        if(this.fav) {
            return;
        }
        this.fav = true;
    }

    // FUNCION BORRAR FAVORITOS
    removeFav() {
        if(!this.fav) {
            return;
        }
        this.fav = false;
    }
}

class Character{

    constructor(id, name, realName, aliases, origin, powers, teams, enemies, description, image, issues, volumes, issuesCount) {
        
        this.id = id;
        this.name = name || "";
        this.realName = realName || "";
        this.aliases = aliases || "";
        this.origin = origin || "";
        this.powers = powers || "";
        this.teams = teams || "";
        this.enemies = enemies || "";
        this.volumes = volumes || "";
        this.issues = issues || "";
        this.descrdescription = description || "";
        this.image = image || "";
        this.issuesCount = issuesCount || "";

        this.fav = false;
    }

    // FUNCION GUARDAR FAVORITOS
    saveFav() {
        if(this.fav) {
            return;
        }
        this.fav = true;
    }

    // FUNCION BORRAR FAVORITOS
    removeFav() {
        if(!this.fav) {
            return;
        }
        this.fav = false;
    }

}

class Volume {

    constructor(id, name, issuesCount, firstIssue, lastIssue, image, description) {
        
        this.id = id;
        this.name = name || "";
        this.issuesCount = issuesCount || "";
        this.firstIssue = firstIssue || "";
        this.lastIssue = lastIssue || "";
        this.descrdescription = description || "";
        this.image = image || "";
        
        this.fav = false;
    }

    // FUNCION GUARDAR FAVORITOS
    saveFav() {
        if(this.fav) {
            return;
        }
        this.fav = true;
    }

    // FUNCION BORRAR FAVORITOS
    removeFav() {
        if(!this.fav) {
            return;
        }
        this.fav = false;
    }

}

export {
    Comic,
    Character,
    Volume
};