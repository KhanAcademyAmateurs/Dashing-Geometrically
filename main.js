/*
Changelog
---------
0.1.0 {
* Implemented Platformer Engine
* Basic Player Code
} ~     
0.2.0 {
* Bugfixes
* New avatars!
   - Lenny
   - Lenny 2
} ~
0.3.0 {
* Beginning work on the main menu
* First level begins work, basics in
} ~
0.4.0 {
* Gravity flip implemented
   -jumping is bugged
   -doing anything leads to falling back to other gravity
} ~
0.5.0 {
* New main menu!
* New buttons!
* One new avatar, "Blocky"!
} ~
0.6.0 {
* Bugfix
* Achievements
   - New achievements!
       > Let's Play!
       > Artist
} ~
0.7.0 {
* Graphical update
* Tinkered with physics some
} ~
0.8.0 {
* Trying to create a test level
* Submitted help request about achievements, answered by Blue Leaf
} ~
0.9.0 {
* New avatars!
   - Deadpool
   - Overly Smiley
* New colors!
* New achievements!
} ~
0.9.1 {
* Bugfix
} April 20, 2016
0.9.2 {
* Bugfixes
* New achievement!
* Credits
* Settings pane and Custom Levels pane are updated so that they are not entirely blank
* New changelog!
} April 21, 2016
0.9.3 {
* Bugfixes
} April 21, 2016
0.9.4 {
* Fixed program logic bug
} April 21, 2016
0.9.5 {
* Custom Level Name Ideas
} April 21, 2016
0.9.6 {
* Bugfix
} April 21, 2016
0.9.7 {
* Recreated test level. Now submitting help request regarding expansion.
* Beginning creation of the first "real" level, The X.
} April 21, 2016
0.9.8 {
* Beginning better spike implementation
* Bugfix
} April 22, 2016
0.9.9 {
* Finished implementation of triangle-rectangle collision, thanks to Bob Lyon's brilliant program
* Playing levels no longer throws an undefined error around 80% of the time
} April 22, 2016
0.10.0 {
* Level Select!!!!!! WOOOOOOOOOOOOO!
* Completed the test level
} April 22, 2016
0.10.1 {
* Bugfix
* End animation complete.
* I need an ending screen.
* Diverted to doing the contest.
* Should be released by the end of May
} April 22, 2016
0.10.2 {
* Fixed ES6 incompatibility error "static"
* Added the future levels, but they all redirect to "Test Level" for now.
* Working on hidden levels, custom level system.
* Custom Levels to be implemented as of 0.15.0, hopefully. I am unsure how to make a working level editor due to the fact that I end up with a blank screen every time I try.
} April 22, 2016
0.10.3 {
* Normal mode is basically complete except for awarded stars. Working on new calibration system for such.
} April 22, 2016
0.11.0 {
* Jump pads have been added, but they are invisible and glitched.
* Bugfix
* New levels
* Attempts are glitched. I'm deleting the whole system and starting over.
} April 22, 2016
0.12.0 { 
* JUMP PAD!!!!!!!
} April 24, 2016
0.13.0 { 
* JUMP BALLS!!!!!!!
* New achievement, "Minecraft?"
* WIP for 0.20.0: more avatars, and portal textures
* WIP for 0.30.0: Global leaderboards, push/pull from outside sources. Remember to ask SpongeJr about his database code
* WIP for 0.14.0: Stars
} April 24, 2016
0.14.0 { 
 * HUGE BUGFIX! SO MANY BUGS FIXED!
 * Stars are (somewhat) implemented.
 * Unlockable levels are a wip, also I have to redesign the original levels.
 * I NEED to make a ship. Like seriously, I NEED to make it. I want to start working on an "easy" level.
 * Planning ahead for 0.30.0: I need to make decorations, but also a better achievements system.
} April 24, 2016
0.15.0 { 
 * I haven't been updating recently due to a star race in the *real* Geometry Dash. I won, 144 stars later. Yes, it is possible to earn 144 stars within 3 days. And I'm stuck at 97 UC ;-;
 * ONE BAZILLION BUGFIXES
    - Buttons no longer scroll too far to the right or to the left
    - There are no more "impossible" achievements except for the ones about attempts, which I will probably change to user levels, etc
    - All those fancy names be gone ;-; bcuz they're all tests
    - Stars are working
    - Level unlocking works
    - no more disappearing block glitch
    - greatly delagged the program by only displaying certain blocks. I'm going to make a "super delag" button that completely removes character customization in 0.16.0.
 * Very basic ship thing is done. 
 * Started working on "The X", which will be the "Stereo Madness" here. For reasons of sheer time, levels in this game will be a lot shorter. 
 * I may ask other users if they want to make graphics for this. Basically I need to make the contest about a month before this is released. Hopefully I can get a lot of good entries. I'm going to draft the rules for 0.16.0. 
 * New achievements.
 * Coming soon menu, and ideas for user level submission is coming into play. I'm going to try to make the level editor by 0.20.0 (and it will be quite functional.)
 * For 0.16.0:
    - character graphics
    - super delag
    - Portal graphics
    - ship finished :3
    - Actually, I think I could make the "Spider" gamemode before RubRub..... jk. I'm not working on that at all until later. For now, after the ship, I'll work on the ball. But I need to make the ship first.
} May 1, 2016
0.15.1 {
 * Level icons :)
 * κ 
} May 4, 2016
*/
//https://www.khanacademy.org/computer-programming/new-program/4593713340
/**
@TODO {
* Finish Custom Level Screen @pending_help_request_answer @HALFDONE
* Decorations @hard
* Credits @DONE
* Music @pending_spongejr_request
* Make settings @medium
* Modes:
   - Ship @hard @HALFDONE 
   - Ball @easy @HALFDONE
   - Robot @easy <-- wat? i wrote that?
   - Wave @medium
   - Speeds @easy <-- yup easy
* Easter Eggs @hard
* End Panel @DONE
* Jump pads @DONE
* Gravity balls @medium @HALFDONE <-- yeah, one is done, but I need more
}
*/
//var mouseIsPressed = __mousePressed;
//calibration
angleMode = 'degrees';
frameRate(60);
var player;
textFont(createFont("Courier Bold"), 10);
frameRate(60);
var Camera;
var menu;
var collide = function(o1, o2) {
    return o1.x - o1.w / 2 < o2.x + o2.w / 2 &&
        o1.x + o1.w / 2 > o2.x - o2.w / 2 &&
        o1.y - o1.h / 2 < o2.y + o2.h / 2 &&
        o1.y + o1.h / 2 > o2.y - o2.h / 2;
};
var keys = {};
var keyPressed = function() {
    keys[keyCode] = keys[key.toString().toUpperCase()] = true;
};
var keyReleased = function() {
    keys[keyCode] = keys[key.toString().toUpperCase()] = false;
};
// begin Bob Lyon's polygon functions
{
    var coords2Points = function(x1, y1) {
        var i, j, points = [];
        for(i = j = 0; i < arguments.length; j++) {
            points[j] = {
                x: arguments[i++],
                y: arguments[i++]
            };
        }
        return points;
    };
    var rotatePoint = function(x, y, theta, sine) {
        var cosine = theta;
        if(sine === undefined) {
            cosine = cos(theta);
            sine = sin(theta);
        }
        return {
            x: cosine * x + sine * y,
            y: -sine * x + cosine * y
        };
    };
    var rectangleMode = function(mode) {
        if(mode !== undefined) {
            rectangleMode.mode = mode;
        }
        return rectangleMode.mode;
    };
    var rect2Points = function(x, y, w, h, theta) {
        var p;
        if(rectangleMode.mode === CORNERS) {
            w -= x;
            h -= y;
        }
        if(theta) {
            var cosine = cos(-theta);
            var sine = sin(-theta);
            if(rectangleMode.mode === CENTER) {
                w /= 2;
                h /= 2;
                p = [
                    rotatePoint(-w, -h, cosine, sine),
                    rotatePoint(+w, -h, cosine, sine),
                    rotatePoint(+w, +h, cosine, sine),
                    rotatePoint(-w, +h, cosine, sine)
                ];
            } else {
                p = [{
                        x: 0,
                        y: 0
                    },
                    rotatePoint(w, 0, cosine, sine),
                    rotatePoint(w, h, cosine, sine),
                    rotatePoint(0, h, cosine, sine)
                ];
            }
            for(var i = 0; i < p.length; i++) {
                p[i].x += x;
                p[i].y += y;
            }
        } else if(rectangleMode.mode === CENTER) {
            w /= 2;
            h /= 2;
            p = coords2Points(x - w, y - h, x + w, y - h, x + w, y + h, x - w, y + h);
        } else {
            p = coords2Points(x, y, x + w, y, x + w, y + h, x, y + h);
        }
        return p;
    };
    var isBetween = function(c, a, b) {
        return(a - c) * (b - c) <= 0;
    };
    var overlap = function(a, b, c, d) {
        return isBetween(c < d ? c : d, a, b) || isBetween(a < b ? a : b, c, d);
    };
    var polygonPolygonCollide = function(poly1, poly2) {
        var polys = [
            poly1,
            poly2
        ];
        var project = function(poly, axis) {
            var mn = Infinity;
            var mx = -Infinity;
            for(var i = 0; i < poly.length; i++) {
                var dot = poly[i].x * axis.x + poly[i].y * axis.y;
                mx = max(mx, dot);
                mn = min(mn, dot);
            }
            return {
                min: mn,
                max: mx
            };
        };
        var getAxes = function(poly) {
            var axes = [];
            for(var i = 0; i < poly.length; i++) {
                var n = (i + 1) % poly.length;
                axes[i] = {
                    y: poly[i].x - poly[n].x,
                    x: -(poly[i].y - poly[n].y)
                };
            }
            return axes;
        };
        for(var p = 0; p < polys.length; p++) {
            var axes = getAxes(polys[p]);
            for(var i = 0; i < axes.length; i++) {
                var axis = axes[i];
                var p1 = project(poly1, axis);
                var p2 = project(poly2, axis);
                if(!overlap(p1.min, p1.max, p2.min, p2.max)) {
                    return false;
                }
            }
        }
        return true;
    };
    rectangleMode(CENTER);
}
//end
//The achievement system.
//Thanks to Blue Leaf for fixing the order thing :)
var font = createFont("Avenir");

// The list of achievements that are running (or waiting to run).
{
    var queue = [];
    var Achievement = function(txt, desc, lawl) {
        this.y = -200;
        this.counter = 0;
        this.txt = txt;
        this.desc = desc;
        this.lawl = lawl;
        this.awarded = false;
    };
    Achievement.prototype.award = function() {
        // If we're not already awarded...
        if(!this.awarded) {
            this.awarded = true;
            // Add to the end of the queue.
            queue.push(this);
        }
    };
    Achievement.prototype.run = function() {
        if(this.y < 0 && this.counter < 255) {
            this.y += -this.y / 20;
            if(this.y > -1) {
                this.counter++;
            }
        } else {
            this.y += (-100 - this.y) / 23;
            if(this.y < -50) {
                // We're done.  Remove ourselves from the queue.
                queue.shift(); // removes element [0]
            }
        }
        fill(255, 255, 255, 100);
        stroke(255, 255, 255);
        strokeWeight(3);
        rect(300, this.y, 600, 100, 50);
        strokeWeight(1);
        fill(255, 255, 255);
        textAlign(LEFT, CENTER);
        textFont(createFont("Avenir"), 21);
        text(this.txt, 300, this.y + 17);
        textFont(createFont("Avenir"), 12);
        text(this.desc, 300, this.y + 36);
    };
    var stars = 0;
    var achievementSystem = {
        letsPlay: new Achievement("Let's Play!", "Unlocked new avatars and colors!", "Open the game from the hot list"),
        jump100: new Achievement("Centijumper", "Unlocked new avatar!", "Jump 100 Times"),
        jump500: new Achievement("You jump a lot", "Unlocked new color!", "Jump 500 Times"),
        jump1000: new Achievement("Millijumper", "Unlocked new avatar!", "Jump 1000 Times"),
        beginningofalegacy: new Achievement("Beginning of a Legacy", "Unlocked new avatar!", "Collect 1 Star"),
        isBlaze: new Achievement("Hey, I'm Blaze", "Unlocked thine avatar, master.", "Be Blaze"),
        artist: new Achievement("Artist", "Unlocked new color!", "Open the Character panel for the first time"),
        customizer: new Achievement("Customizer", "Unlocked new color!", "Open the Custom Level panel"),
        levelheaded: new Achievement("Levelheaded", "Unlocked new color!", "Beat 1 Level"),
        detective: new Achievement("Detective", "Unlocked new color!", "Find the Secret"),
        madAtLife: new Achievement("Mad At Life", "Unlocked new color!", "Do 10 Attempts"),
        imrathersaltytoday: new Achievement("I'm Rather Salty Today", "Unlocked new color!", "Do 50 Attempts"),
        iwillkillyouall: new Achievement("I Will Kill You All", "Unlocked new color!", "Do 100 Attempts"),
        theundeadshallrise: new Achievement("The Undead Shall Rise...", "Unlocked new color!", "Do 500 Attempts"),
        andtheywillplaygeometrydash: new Achievement("...And They Will Play Geometry Dash", "Unlocked new color!", "Do 1000 Attempts"),
        ijustneedanothernamenow: new Achievement("I just need another name now.", "Unlocked new color!", "Do 2000 Attempts"),
        iLikeChangingThings: new Achievement("I Like Changing Things", "Unlocked new color!", "Open the settings pane"),
        noIDidntPlagiarize: new Achievement("No, I didn't plagiarize.", "Unlocked new color!", "Open the credits pane"),
        itWorks: new Achievement("It Works!", "Unlocked new avatar!", "Beat Test Level 1 in Normal mode"),
        theCheckMark: new Achievement("Check Check", "Unlocked new avatar!", "Beat Test Level 2 in Normal mode"),
        forty2: new Achievement("Testing, testing, 1, 2, 3!", "Unlocked new color!", "Beat Test Level 3 in Normal mode"),
        'minecraft?': new Achievement("May The Fourth Be With You", "Unlocked new color!", "Beat Test Level 4 in Normal mode"),
        redundancy: new Achievement("Wow, were you *expecting* this one?", "Unlocked new color!", "Open the achievements pane"),
        delicious: new Achievement("Five is Alive!", "Unlocked new avatar!", "Beat Test Level 5 in Normal Mode"),
        test6: new Achievement("6 is a Perfect Number", "Unlocked new color!", "Beat all the original test levels")
    };
    achievementSystem.letsPlay.award();
}

//blocks and block stuff
{
var currentLevel = 0;
var blockSize = 41;
var Block = function(type, rotation) {
    this.x = 50;
    this.y = 50;
    this.w = blockSize;
    this.h = blockSize;
    this.type = type;
    this.used = false;
    this.rotation = rotation;
    this.c =(type===2)?color(255, 247, 0):(type===8?color(221, 0, 255):color(0, 255, 38));
};
Block.prototype.doPortals = function(player) {
    if(player.isDead || player.dead) {
        this.used = false;
    }
};
var portal = function(t, c){
    strokeWeight(7);
    if(t === 2){
        stroke(0);
        arc(0, 0, blockSize, blockSize*2.6, -90, 90);
        stroke(c);
        arc(-5, 0, blockSize, blockSize*2.6, -90, 90);
    }
}; //neaten this function!
Block.prototype.draw = function() {
    if(this.type===2){
        this.c = player.flipped?color(0, 149, 255):color(255, 247, 0);
    }
    pushMatrix();
    translate(this.x, this.y);
    rotate(this.rotation);
    switch(this.type) {
        case 1:
            fill(0);
            stroke(255);
            rect(0, 0, this.w, this.h);
            break;
        case 2: case 8: case 9:
            noFill();
            portal(2, this.c);
            strokeWeight(1);
            noStroke();
            break;
        case 3:
            fill(255, 255, 255, 50);
            stroke(255);
            triangle(-this.w / 2, this.h / 2,
                0, -this.h / 2,
                this.w / 2, this.h / 2
            );
            break;
    }
    popMatrix();
};
}

//jumpstuff
{
var JumpPad = function(x, y, colour, rot) {
    this.rot = !arguments[2] && !arguments[1] && !arguments[3] ? arguments[0] : rot;
    this.colour = colour || color(255, 0, 0);
    this.xPos = x;
    this.yPos = y;
    this.x = this.xPos || 0;
    this.y = (this.yPos || 0) + blockSize / 2;
    this.w = blockSize;
    this.h = blockSize / 4;
    var that = this;
    this.Particle = function() {
        this.x = that.xPos + random(-blockSize / 2, blockSize / 2);
        this.y = that.yPos + blockSize / 2;
        this.r = random(10, 15);
        this.timeToLive = 127;
        this.spd1 = random(2, 4);
        this.spd2 = random(0.4, 0.7);
    };
    this.Particle.prototype.run = function() {
        this.timeToLive--;
        this.r -= this.spd2;
        this.y -= this.spd1;
        fill(red(that.colour), green(that.colour), blue(that.colour), this.timeToLive);
        rect(this.x, this.y, this.r, this.r);
    };
    this.particles = [];
    for(var i = 0; i < 24; i++) {
        this.particles.push(new this.Particle());
    }
};
JumpPad.prototype.draw = function() {
    noStroke();
    pushMatrix();
    translate(this.xPos, this.yPos);
    rotate(this.rot);
    fill(this.colour);
    arc(0, blockSize * 0.83, blockSize * 1.3, blockSize, 223, 320);
    popMatrix();
    var that = this;
    for(var i in this.particles) {
        this.particles[i].run();
        if(this.particles[i].r < 0) {
            this.particles[i] = new this.Particle();
        }
    }
};
var JumpBall = function(x, y, colour) {
    this.w = blockSize + 10;
    this.h = blockSize + 10;
    this.Particle = function(origin, colour) {
        this.origin = origin;
        this.original = origin;
        this.colour = colour;
        this.t = random(0, 360);
        this.s = 1.01;
        this.xSquish = random(20, 40);
        this.ySquish = random(20, 40);
    };
    this.Particle.prototype.run = function() {
        fill(red(this.colour), green(this.colour), blue(this.colour), 100);
        ellipse(cos(this.t) * this.xSquish + this.origin.x, sin(this.t) * this.ySquish + this.origin.y, 10 - sin(frameCount * 5) * 5, 10 - sin(frameCount * 5) * 5);
        ellipse(cos(this.t) * this.xSquish + this.origin.x, sin(this.t) * this.ySquish + this.origin.y, 3 - sin(frameCount * 5) * 5, 3 - sin(frameCount * 5) * 5);
        this.t++;
        this.xSquish -= this.s;
        this.ySquish -= this.s;
        if(this.xSquish < 0 || this.ySquish < 0) {
            this.xSquish = random(20, 40);
            this.ySquish = random(20, 40);
        }
    };
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.particles = [];
    for(var i = 0; i < 10; i++) {
        this.particles.push(new this.Particle(new PVector(x, y), this.colour));
    }
};
JumpBall.prototype.draw = function() {
    var n = random(-1, 3);
    fill(this.colour);
    ellipse(this.x, this.y, 20 + n, 20 + n);
    noFill();
    stroke(this.colour);
    for(var i = 2; i < 4; i++) {
        ellipse(this.x, this.y, 20 + i * i * i + n, 20 + i * i * i + n);
    }
    noStroke();
    for(var i = 0; i < this.particles.length; i++) {
        this.particles[i].run();
    }
};
}

var levels = [

    //Level 1: Test Level

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, new Block(3), 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), 0, 0, 0]
    ],

    //Level 2: The X

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, new Block(3), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0],
        [0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(3), new Block(3), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0]
    ],

    //Level 3: Forty Too

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, 0, new JumpPad(), new Block(3), new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, new JumpPad(), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, new Block(3), 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, new JumpPad(), new Block(3), new Block(3), new Block(3), new JumpPad(), new JumpPad(), new Block(3), new Block(3), new Block(3), new JumpPad(), new JumpPad(), 0]
    ],

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new JumpPad(), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new JumpBall(), 0, 0, 0, new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, new Block(3), 0, 0, 0, new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), new Block(3), new Block(3), new Block(3), new Block(1), 0, 0, 0, 0]
    ],

    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(3, 180), 0, 0, 0, 0, new Block(3, 180), 0, 0, 0, 0, 0, 0, new Block(3, 180), new Block(3, 180), 0, 0, 0, 0, 0, 0, new JumpPad(180), new Block(3, 180), new Block(3, 180), new Block(3, 180), new Block(3, 180), 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(2), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    
    
[
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(9), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(8), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(4), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(4), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(2), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(2), new Block(4), 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(4), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, new Block(3), new Block(3), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, new Block(1), new Block(1), new Block(1), new Block(1), new Block(1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
],
];
/*
 * Frangipani
 * Lunar Lights
 * Vacuumed
 * The Vertex of the Vortex
 * Standstill
 * Void
 * The Surge
 */
var lock = function(x, y, s) {
    noFill();
    pushMatrix();
    translate(x, y - 51);
    scale(s);
    strokeWeight(25);
    stroke(125, 125, 125);
    arc(0, 0, 50, 50, 180, 360);
    line(-25, 0, -25, 25);
    line(25, 0, 25, 25);

    strokeWeight(2);
    fill(255, 213, 0);
    stroke(255, 255, 0);
    rect(0, 76, 100, 100, 15);
    noStroke();
    popMatrix();
    strokeWeight(1);
};
/**
 * The X
 * Forty Too
 * CraftIT
 * Aesthetic Grapes
 */
var levelData = [{ //ahhhhhhhh o_O
        name: "Test Level 1",
        normal: 0,
        practice: 0,
        stars: 1,
        complete: false,
        difficulty: "test",
        awardedStars: false
    }, {
        name: "Test Level 2",
        normal: 0,
        practice: 0,
        stars: 1,
        complete: false,
        difficulty: "test",
        awardedStars: false
    }, {
        name: "Test Level 3",
        normal: 0,
        practice: 0,
        stars: 1,
        complete: false,
        difficulty: "test",
        awardedStars: false
    }, {
        name: "Test Level 4",
        normal: 0,
        practice: 0,
        stars: 1,
        complete: false,
        difficulty: "test",
        awardedStars: false
    }, {
        name: "Test Level 5",
        normal: 0,
        practice: 0,
        stars: 4,
        complete: false,
        difficulty: "test",
        locked: 4,
        awardedStars: false
    }, {
        name: "Enterprise",
        normal: 0,
        practice: 0,
        stars: 5,
        complete: false,
        difficulty: "harder",
        awardedStars: false
    }
    /*
    {name: "Block Force", normal: 0, practice: 0, stars: 5, complete: false, difficulty: "Harder", awardedStars: false},
    {name: "Roadways", normal: 0, practice: 0, stars: 6, complete: false, difficulty: "Harder", awardedStars: false},
    {name: "Xenostage", normal: 0, practice: 0, stars: 7, complete: false, difficulty: "Hard", awardedStars: false},
    {name: "Forty Too 2", normal: 0, practice: 0, stars: 8, complete: false, difficulty: "Hard", awardedStars: false},
    {name: "Rielle", normal: 0, practice: 0, stars: 9, complete: false, difficulty: "Insane", awardedStars: false},
    {name: "Void", normal: 0, practice: 0, stars: 12, complete: false, difficulty: "Insane", awardedStars: false},
    {name: "21 or 84", normal: 0, practice: 0, stars: 13, complete: false, difficulty: "Insane", awardedStars: false},
    {name: "Androids", normal: 0, practice: 0, stars: 14, complete: false, textSizeOverride: 42, difficulty: "Insane", locked: 10, awardedStars: false},
    {name: "Xenostage 2", normal: 0, practice: 0, stars: 18, complete: false, textSizeOverride: 35, difficulty: "Demon", locked: 20, awardedStars: false},
    {name: "Eons", normal: 0, practice: 0, stars: 24, complete: false, textSizeOverride: 45, difficulty: "Demon", locked: 20, awardedStars: false},
    {name: "Antedivulian Reminiscence", normal: 0, practice: 0, stars: 30, complete: false, textSizeOverride: 30, difficulty: "Demon", locked: 30, awardedStars: false},
    {name: "Frangipani", normal: 0, practice: 0, stars: 35, complete: false, difficulty: "Demon", locked: 40, awardedStars: false},
    {name: "The Surge", normal: 0, practice: 0, stars: 10, complete: false, difficulty: "Harder", locked: 70, awardedStars: false}
    */
]; ///  o_O ///
var PFloor = blockSize * 60;
var _lock = {top: 0, bottom: PFloor + 100};

var recalibrateGlobalBlocks = function() {
    for(var i = 0; i < levels[currentLevel].length; i++) {
        for(var j = 0; j < levels[currentLevel][i].length; j++) {
            if(levels[currentLevel][i][j]) {
                if(levels[currentLevel][i][j] instanceof Block) {
                    levels[currentLevel][i][j].x = 40 * j + 20;
                    levels[currentLevel][i][j].y = PFloor - 40 * (levels[currentLevel].length - i) + 20;
                    if(levels[currentLevel][i][j].type === 2) {
                        levels[currentLevel][i][j].w = blockSize * 3;
                        levels[currentLevel][i][j].used = false;
                    }
                } else if(levels[currentLevel][i][j] instanceof JumpPad) {
                    levels[currentLevel][i][j] = new JumpPad(40 * j + 20, PFloor - 40 * (levels[currentLevel].length - i) + 20, color(247, 255, 0), levels[currentLevel][i][j].rot);
                } else if(levels[currentLevel][i][j] instanceof JumpBall) {
                    levels[currentLevel][i][j] = new JumpBall(40 * j + 20, PFloor - 40 * (levels[currentLevel].length - i) + 20, color(247, 255, 0));
                }
            }
        }
    }
};
recalibrateGlobalBlocks();

var attempts = -2;
var trans = 0;
//Unlockable shapes. The reason this is so many lines of code is because of Deadpool -_- It took 50 lines just for the cube form. I know, it's crazy.
var types = [
    function(x, y, pc1, pc2, lr) {
        noStroke();
        fill(pc1);
        rect(x, y, blockSize, blockSize, blockSize / 8);
        fill(pc2);
        rect(x - blockSize / 4 + lr, y - blockSize / 6, blockSize / 7, blockSize / 7, 1);
        rect(x + blockSize / 4 + lr, y - blockSize / 6, blockSize / 7, blockSize / 7, 1);
    },
    function(x, y, pc1, pc2, lr) {
        noStroke();
        fill(pc1);
        rect(x, y, blockSize, blockSize, blockSize / 8);
        fill(pc2);
        rect(x, y, blockSize / 1.2, blockSize / 1.2, blockSize / 8);
        fill(pc1);
        rect(x, y, blockSize / 1.5, blockSize / 1.5, blockSize / 8);
    },
    function(x, y, pc1, pc2, lr) {
        noStroke();
        for(var i = 0; i < 10; i += 2) {
            fill(pc1);
            rect(x - blockSize / 2, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 2 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 4 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 6 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 8 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
        }
        for(var i = 1; i < 9; i += 2) {
            fill(pc2);
            rect(x - blockSize / 2 + 1 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 3 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 5 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
            rect(x - blockSize / 2 + 7 * blockSize / 8, y - blockSize / 2 + i * blockSize / 8, blockSize / 8, blockSize / 8);
        }
    },
    function(x, y, pc1, pc2, lr) {
        noStroke();
        fill(pc1);
        rect(x, y, blockSize, blockSize, blockSize / 8);
        fill(pc2);
        textAlign(LEFT, LEFT);
        text("( ͡° ͜ʖ ͡° )", x, y);
    },
    function(x, y, pc1, pc2, lr) {
        noStroke();
        fill(pc1);
        rect(x, y, blockSize, blockSize, blockSize / 8);
        textAlign(LEFT, LEFT);
        fill(pc2);
        text("( ¬ ⏠ ¬ )", x, y);
    },
    function(x, y, pc1, pc2, lr) {
        pushMatrix();
        translate(x, y);
        stroke(0, 0, 0);
        strokeWeight(blockSize / 20);
        rect(0, 0, blockSize, blockSize, blockSize / 15);
        translate((200 - blockSize) / 197, (200 - blockSize) / 197);
        scale(blockSize / 200);
        noStroke();
        fill(pc1);
        rect(-50, 0, 100, 196);

        fill(lerpColor(pc1, color(0), 0.2));
        rect(50, 0, 100, 196);

        fill(color(0));
        beginShape();
        vertex(-8, 4);
        vertex(-43, 38);
        vertex(-93, -7);
        vertex(-74, -68);
        vertex(-24, -37);
        endShape();

        beginShape();
        vertex(8, 4);
        vertex(43, 38);
        vertex(93, -7);
        vertex(74, -68);
        vertex(24, -37);
        endShape();

        fill(pc2);
        beginShape();
        vertex(-71, -24);
        vertex(-29, -9);
        vertex(-50, 0);
        endShape();

        beginShape();
        vertex(71, -24);
        vertex(29, -9);
        vertex(50, 0);
        endShape();
        popMatrix();
    },
    function(x, y, pc1, pc2, lr) {
        pushMatrix();
        strokeCap(ROUND);
        translate(x, y);
        stroke(color(0));
        strokeWeight(blockSize / 20);
        rect(0, 0, blockSize, blockSize, blockSize / 15);
        translate((200 - blockSize) / 197, (200 - blockSize) / 197);
        scale(blockSize / 200);
        noStroke();
        fill(pc1);
        rect(0, 0, 196, 196);

        fill(color(0));
        ellipse(-50, -15, 46, 46);
        ellipse(50, -15, 46, 46);

        strokeWeight(blockSize / 70);
        stroke(color(0));
        fill(pc1);
        bezier(-67, 8, -54, 3, -44, 5, -30, 5);
        bezier(67, 8, 54, 3, 44, 5, 30, 5);

        noStroke();
        ellipse(-46, 20, 46, 29);
        ellipse(46, 20, 46, 29);

        fill(pc2);
        pushMatrix();
        translate(-56, -22);
        rotate(-58);
        ellipse(0, 0, 20, 14);
        popMatrix();

        pushMatrix();
        translate(44, -22);
        rotate(-58);
        ellipse(0, 0, 20, 14);
        popMatrix();

        fill(255, 255, 255);
        strokeCap(SQUARE);
        stroke(color(0));
        strokeWeight(blockSize / 45);
        beginShape();
        vertex(-78, 33);
        bezierVertex(-78, 33, -57, 30, -36, 28);
        bezierVertex(-11, 26, 10, 27, 29, 30);
        bezierVertex(40, 32, 63, 35, 80, 38);
        endShape();

        beginShape();
        vertex(-70, 32);
        bezierVertex(-70, 41, -70, 47, -55, 62);
        bezierVertex(-51, 65, -34, 76, -20, 76);
        bezierVertex(2, 76, 27, 75, 41, 70);
        bezierVertex(51, 64, 65, 53, 65, 37);
        endShape();

        popMatrix();
    }
];
var availableColors = [
    color(255, 0, 0),
    color(255, 136, 0),
    color(230, 255, 0),
    color(9, 255, 0),
    color(0, 166, 255),
    color(0, 34, 255),
    color(213, 0, 255),
    color(0, 0, 0),
    color(122, 122, 122),
    color(255, 255, 255),
    color(214, 184, 107)
];
var availableColorsY = [
    color(255),
    color(0, 0, 0),
    color(238, 255, 0),
    color(0, 242, 255)
];
var colorsUnlocked = [
    'letsPlay',
    'minecraft?',
    'customizer',
    'test6',
    'detective',
    'iwillkillyouall',
    'madAtLife',
    'forty2',
    'forty2',
    'forty2',
    'ijustneedanothernamenow'
];
var colorsUnlockedY = [
    'letsPlay',
    'letsPlay',
    'iLikeChangingThings',
    'noIDidntPlagiarize'
];
var typesUnlocked = [
    'letsPlay',
    'letsPlay',
    'itWorks',
    'letsPlay',
    'letsPlay',
    'theCheckMark',
    'delicious'
];
var levelUnlockers = [
    'itWorks',
    'theCheckMark',
    'forty2',
    'minecraft?',
    'delicious',
    'test6'
];

rectMode(CENTER);

var levelEndAnim = false;
var cameraIsLocked = false;
//player code
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.color1 = availableColors[0];
    this.color2 = availableColorsY[0];
    this.yVel = 0;
    this.isJumping = false;
    this.w = this.h = blockSize;
    this.currentType = 0;
    this.speed = 4;
    this.angle = 0;
    this.angularVelocity = 6;
    this.isDead = true;
    this.flipped = false;
    this.small = false;
    this.mode = 'block';
    this.finishedFirstIterationFrames = false;
    this.firstIterationFrames = 0;
    this.endedLevel = false;
    this.endedCounter = 0;
    this.xVel = 3.5;
    this.origin = new PVector(0, 0);
    this.shipAngle = 0;
    this.shipAV = 0;
    this.deadR = 0;
    this.maxDepth = this.origin.y + blockSize*3.5;
    this.maxHeight = this.origin.y - blockSize*3.5;
};
Player.prototype.run = function() {
    if(this.mode==='ship'){
        this.maxDepth = this.origin.y + blockSize*3.5;
        this.maxHeight = this.origin.y - blockSize*3.5;
    }
    if(this.firstIterationFrames < 10) {
        this.firstIterationFrames++;
    } else {
        this.finishedFirstIterationFrames = true;
    }
    /*
    First you modify velocity, then the position.
    Constants to play around with:
    */
    var FRICTION = 0.8;
    var LIFT = TWO_PI + 1.9;
    this.xVel = 4;
    var GRAVITY = 0.35;
    var DRAG = 1;
    var SHIPLIFT = 0.5;

    /* Player is jumping. Apply strong force upwards. */
    if(menu !== 'Main') {
        if((keys[UP] || mouseIsPressed || (key && key.toString() === ' ' && keyIsPressed)) && !this.isJumping && this.finishedFirstIterationFrames) {
            this.yVel -= LIFT;
        }

    } else {
        if(random() < 0.1 && !this.isJumping) {
            this.yVel -= LIFT;
        }
    }
    if(this.mode === 'ship') {
        if(!(keys[UP] || mouseIsPressed || (key && key.toString() === ' ' && keyIsPressed))) {
            this.yVel += SHIPLIFT;
        } else {
            this.yVel -= SHIPLIFT;
        }
    }
    /*
    The isJumping property isn't a "jumping or not" checker as much as a checker
    whether or not you are resting on a block at any given time. So let's set it
    to true first before collision evaluation.
    */
    this.isJumping = true;
    /*
    The awesome applyCollisions function. It loops through all of the blocks indivi-
    dually, applying collisions to them one by one.
    */
    var applyCollisions = function(vx, vy) {
        /*
        Loops through all the blocks. I didn't exactly get your "block array" setup, but
        I think this covers it.
        */
        var level = levels[currentLevel];
        for(var i = 0; i < level.length; i++) {
            var blockRow = level[i];
            if(!blockRow) {
                break;
            }
            for(var j = 0; j < blockRow.length; j++) {
                var block = blockRow[j];
                /* Not colliding? Go to next iteration. */
                if(!collide(block, this)) {
                    continue;
                }
                if(block instanceof Block) {
                    switch(block.type) {
                        case 1:
                            {
                                if(this.flipped) {
                                    if(vx > 0) {
                                        attempts++;
                                        this.isDead = true;
                                    }
                                    /* If vy is less than zero, I am falling. */
                                    if(vy < 0) {
                                        /* Set my new y outside of the block. */
                                        this.y = block.y - block.h / 2 - this.h / 2;
                                        this.yVel = 0;
                                        /* Make it so I can jump again. */
                                        if(this.mode === 'block'){
                                            this.isJumping = false;
                                        }
                                    }
                                    /* If vy is greater than zero, I am jumping. */
                                    if(vy > 0) {
                                        /* Set my new y outside of the block. */
                                        this.y = block.y + this.h / 2 + block.h / 2;
                                        this.yVel = 0;
                                        this.isJumping = false;
                                    }
                                } else {
                                    /* If vx is greater than zero, I am moving right. */
                                    if(vx > 0) {
                                        attempts++;
                                        this.isDead = true;
                                    }
                                    /* If vy is less than zero, I am jumping. */
                                    if(vy < 0) {
                                        /* Set my new y outside of the block. */
                                        this.y = block.y + block.h / 2 + this.h / 2;
                                        this.yVel = 0;
                                    }
                                    /* If vy is greater than zero, I am falling. */
                                    if(vy > 0) {
                                        /* Set my new y outside of the block. */
                                        this.y = block.y - this.h / 2 - block.h / 2;
                                        /* Bounce backwards from block. */
                                        this.yVel = 0;
                                        /* Make it so I can jump again. */
                                        if(this.mode === 'block'){
                                            this.isJumping = false;
                                        }
                                    }
                                }
                                break;
                            }
                            break;
                        case 2:
                            {
                                if(!block.used) {
                                    this.flipped = !this.flipped;
                                    block.used = true;
                                }
                            }
                            break;
                        case 3:
                            {
                                var polyBlock;
                                //if(levels[currentLevel][i][j].rot !== 90) {
                                    polyBlock = coords2Points(levels[currentLevel][i][j].x - levels[currentLevel][i][j].w / 2, levels[currentLevel][i][j].y + levels[currentLevel][i][j].h / 2, levels[currentLevel][i][j].x, levels[currentLevel][i][j].y - levels[currentLevel][i][j].h / 2, levels[currentLevel][i][j].x + levels[currentLevel][i][j].w / 2, levels[currentLevel][i][j].y + levels[currentLevel][i][j].h / 2);
                                    fill(255, 0, 0);
                                    triangle(levels[currentLevel][i][j].x - levels[currentLevel][i][j].w / 2, levels[currentLevel][i][j].y + levels[currentLevel][i][j].h / 2, levels[currentLevel][i][j].x, levels[currentLevel][i][j].y - levels[currentLevel][i][j].h / 2, levels[currentLevel][i][j].x + levels[currentLevel][i][j].w / 2, levels[currentLevel][i][j].y + levels[currentLevel][i][j].h / 2);
                                //} else {
                                    //polyBlock = coords2Points(levels[currentLevel][i][j].x - levels[currentLevel][i][j].w / 2, levels[currentLevel][i][j].y - levels[currentLevel][i][j].h / 2, levels[currentLevel][i][j].x, levels[currentLevel][i][j].y + levels[currentLevel][i][j].h / 2, levels[currentLevel][i][j].x + levels[currentLevel][i][j].w / 2, levels[currentLevel][i][j].y - levels[currentLevel][i][j].h / 2);
                                //}
                                var polyThis = rect2Points(this.x, this.y, this.w, this.h, this.angle);
                                if(polygonPolygonCollide(polyBlock, polyThis)) {
                                    attempts++;
                                    this.isDead = true;
                                }
                            } //buggy!
                            break;
                        case 8: 
                            {
                                this.mode = "ship";
                                this.origin.x = block.x;
                                this.origin.y = block.y;
                                cameraIsLocked = true;
                            }
                            break;
                        case 9:
                            { 
                                this.mode = "block";
                                cameraIsLocked = false;
                                this.shipAngle = 0;
                                this.angle = 0;
                            }
                            break;
                    }
                }
                if(block instanceof JumpPad) {
                    this.yVel = -9.5;
                    this.isJumping = true;
                }
                if(block instanceof JumpBall) {
                    if(keys[UP] || mouseIsPressed || (key && key.toString() === ' ' && keyIsPressed)) {
                        this.yVel = -8.5;
                        this.isJumping = true;
                    }
                }

            }
        }
        /*
        This just creates a y-collision surface from y = FLOOR_Y+, as a virtual "floor".
        */
        if(menu !== 'Main') {
            if(this.y + this.h / 2 > PFloor && vy > 0) {
                this.yVel = 0;
                this.y = PFloor - this.h / 2;
                if(this.mode !== 'ship'){
                    this.isJumping = false;
                }
            }
            if(this.mode==='ship'){
                if(this.y + this.h/2 > this.maxDepth){
                    this.yVel = 0;
                    this.y = this.maxDepth - this.h / 2;
                    this.isJumping = true;
                }
                if(this.y - this.h/2 < this.maxHeight){
                    this.yVel = 0;
                    this.y = this.maxHeight + this.h / 2;
                    this.isJumping = true;
                }
            }
        } else {
            if(this.y + this.h / 2 > 325 && vy > 0) {
                this.yVel = 0;
                this.y = PFloor - this.h / 2;
                this.isJumping = false;
            }
        }
    };
    if(menu !== 'Main') {

        /* Add x-vel. */
        this.x += this.xVel / DRAG;
        /* Apply collisions about the x-axis.*/
        applyCollisions.call(this, this.xVel, 0);
    }
    /* Add y-vel. */
    if(this.flipped) {
        this.y -= this.yVel / DRAG;
    } else {
        this.y += this.yVel / DRAG;
    }
    if(menu !== "Main") {
        /* Apply collisions about the y-axis.*/
        applyCollisions.call(this, 0, this.yVel);
    }
    /* Apply a small gravitational force downwards. */
    if(this.mode === 'block') {
        this.yVel += GRAVITY;
    }


    /** AngularVel.js @ct200224 */
    if(this.yVel !== GRAVITY) {
        this.angle += this.angularVelocity;
    } else {
        if(this.angle % 90 !== 0) {
            if(this.angle % 90 < 45) {
                this.angle -= this.angularVelocity * 1;
            } else {
                this.angle += this.angularVelocity * 1;
            }
        }
    }

    /** DeathCheck.js @ct200224 */
    if(this.isDead) {
        this.shipAngle = 0;
        this.isJumping = false;
        cameraIsLocked = false;
        if(round((this.x / (levels[currentLevel][0].length * blockSize + 500)) * 100) > levelData[currentLevel].normal) {
            levelData[currentLevel].normal = round((this.x / (levels[currentLevel][0].length * blockSize + 500)) * 100);
        }
        recalibrateGlobalBlocks();
        this.mode = 'block';
        this.endedCounter = 0;
        this.x = 0;
        this.y = PFloor - blockSize / 2;
        this.isDead = false;
        this.flipped = false;
        this.endedLevel = false;
        this.xVel = 4.1;
    }
    if(this.x > levels[currentLevel][0].length * blockSize && !this.endedLevel) {
        this.flipped = false;
        this.isJumping = true;
        this.yVel = -10;
        this.endedLevel = true;
    }
    if(this.endedLevel) {
        this.xVel *= 1.01;
        if(this.x > levels[currentLevel][0].length * blockSize + 500 + blockSize) {
            levelEndAnim = true;
            levelData[currentLevel].normal = 100;
            achievementSystem[levelUnlockers[currentLevel]].award();
            if(!levelData[currentLevel].awardedStars) {
                stars += levelData[currentLevel].stars;
                levelData[currentLevel].awardedStars = true;
            }
        }
    } else {
        this.xVel = 4;
    }
};
Player.prototype.draw = function() {
    if(!(arguments[0] && arguments[1])) {
        switch(this.mode) {
            case 'block': case 'ship':
                {
                    if(types[this.currentType]) {
                        pushMatrix();
                        translate(this.x, this.y);
                        rotate(this.mode==="block"?this.angle:(this.yVel*2));
                        types[this.currentType](0, 0, this.color1, this.color2, 0);
                        popMatrix();
                    }
                }
                break;
        }
    } else {
        switch(this.mode) {
            case 'block':
                {
                    if(types[this.currentType]) {
                        types[this.currentType](arguments[0], arguments[1], this.color1, this.color2, 0);
                    }
                }
                break;
        }
    }
};
var player = new Player(200, 200);

//camera code
Camera = new PVector(200, 200);

//calibration
noStroke();

//level editor
var colors = {
    background: color(42, 62, 84),
    obj: color(0, 0, 0),
    ground: color(0, 0, 0),
    color: (function() {
        var arry = [];
        for(var i = 0; i < 20; i++) {
            arry.push(color(255));
        }
        return arry;
    })()
};

//Thanks to Eytukan for the GD Logo.
//These are main things
var menu = "Main";
var dashlogo = function(x, y, size) {
    pushMatrix();
    translate(x, y);
    scale(size / 10);
    noStroke();
    //G top
    fill(195, 253, 116);
    rect(8, 116, 10, 5);
    rect(3, 121, 10, 10);
    rect(18, 126, 10, 5);
    //E top
    rect(36, 116, 20, 5);
    rect(31, 121, 10, 5);
    rect(31, 126, 20, 5);
    //O top
    rect(64, 116, 20, 5);
    rect(59, 121, 10, 10);
    rect(74, 121, 15, 5);
    rect(79, 126, 10, 5);
    //M top
    rect(98, 116, 5, 5);
    rect(118, 116, 10, 5);
    rect(93, 121, 15, 10);
    rect(108, 126, 10, 5);
    rect(113, 121, 20, 5);
    rect(123, 121, 10, 10);
    //E top
    pushMatrix();
    translate(106, 0);
    rect(36, 116, 20, 5);
    rect(31, 121, 10, 5);
    rect(31, 126, 20, 5);
    popMatrix();
    //T top
    rect(165, 116, 25, 5);
    rect(170, 121, 10, 10);
    //R top
    rect(198, 116, 15, 5);
    rect(193, 121, 10, 10);
    rect(208, 121, 10, 10);
    rect(193, 126, 25, 5);
    //Y top
    rect(226, 116, 5, 15);
    rect(221, 121, 5, 10);
    rect(231, 126, 5, 5);
    rect(242, 121, 5, 10);
    //D top
    rect(279, 116, 25, 5);
    rect(284, 121, 10, 10);
    rect(299, 121, 10, 10);
    //A top
    rect(318, 116, 15, 5);
    rect(313, 121, 10, 10);
    rect(328, 121, 10, 10);
    rect(323, 126, 5, 5);
    //S top
    rect(347, 116, 15, 5);
    rect(342, 121, 10, 5);
    rect(342, 126, 25, 5);
    //H top
    rect(370, 116, 5, 5);
    rect(370, 121, 10, 10);
    rect(385, 121, 10, 10);
    rect(385, 116, 5, 5);
    // G bottom
    fill(124, 243, 92);
    rect(3, 131, 10, 5);
    rect(3, 136, 25, 5);
    rect(18, 131, 10, 5);
    rect(8, 141, 10, 5);
    rect(23, 141, 5, 10);
    //E bottom
    rect(31, 131, 10, 10);
    rect(46, 136, 5, 5);
    rect(36, 141, 15, 5);
    //O bottom
    rect(59, 131, 10, 5);
    rect(79, 131, 10, 10);
    rect(64, 136, 15, 5);
    rect(69, 141, 15, 5);
    //M bottom
    rect(93, 131, 10, 10);
    rect(93, 141, 5, 5);
    rect(108, 131, 10, 5);
    rect(113, 136, 5, 5);
    rect(123, 131, 10, 15);
    rect(123, 146, 5, 5);
    //E bottom
    pushMatrix();
    translate(106, 0);
    rect(31, 131, 10, 10);
    rect(46, 136, 5, 5);
    rect(36, 141, 15, 5);
    popMatrix();
    //T bottom
    rect(170, 131, 10, 10);
    rect(175, 141, 5, 5);
    //R bottom
    rect(193, 131, 20, 5);
    rect(193, 136, 10, 10);
    rect(198, 146, 5, 5);
    rect(208, 136, 10, 5);
    rect(213, 141, 5, 5);
    //Y bottom
    rect(227, 131, 20, 5);
    rect(237, 136, 10, 10);
    rect(227, 141, 10, 5);
    rect(232, 146, 10, 5);
    //D bottom
    rect(284, 131, 10, 15);
    rect(299, 131, 10, 10);
    rect(294, 141, 10, 5);
    rect(289, 146, 10, 5);
    //A bottom
    rect(313, 131, 25, 5);
    rect(313, 136, 10, 10);
    rect(318, 146, 5, 5);
    rect(328, 136, 10, 5);
    rect(333, 141, 5, 5);
    //S bottom
    rect(342, 131, 25, 5);
    rect(357, 136, 10, 5);
    rect(352, 141, 10, 5);
    //H bottom
    rect(370, 131, 25, 5);
    rect(370, 136, 10, 5);
    rect(375, 141, 5, 5);
    rect(385, 136, 10, 5);
    rect(390, 141, 5, 5);
    popMatrix();
};
var clickCounter = 0;
var mouseOverButton = false;
var dashButton = function(x, y, w, h, txt, fun) {
    if(!arguments[6]) {
        fill(195, 253, 116);
        rect(x, y - h / 4, w, h / 2);
        fill(124, 243, 92);
        rect(x, y + h / 4, w, h / 2);
        var externals;
        
        var ctx = this.externals.context;
        var grad = ctx.createLinearGradient(x, y - h / 2, x, y + h / 2);
        grad.addColorStop(0, "rgb(200, 200, 200)");
        grad.addColorStop(0.49, "rgb(200, 200, 200)");
        grad.addColorStop(0.51, "rgb(127, 127, 127)");
        grad.addColorStop(1, "rgb(127, 127, 127)");
        ctx.fillStyle = grad;
        ctx.textAlign = "center";
        ctx.font = "20px Verdana";
        ctx.fontWeight = "bold";
        ctx.fillText(txt, x, y + 7);
    }
    if(arguments[6] !== 'disabled') {
        if(mouseX < x + w / 2 && mouseX > x - w / 2 && mouseY < y + h / 2 && mouseY > y - h / 2) {
            mouseOverButton = true;
            if(mouseIsPressed && clickCounter > 10) {
                clickCounter = 0;
                fun();
            }
        }
    } else {
        if(mouseX < x + w / 2 && mouseX > x - w / 2 && mouseY < y + h / 2 && mouseY > y - h / 2) {
            mouseOverButton = 'NO';
            fun();
        }
    }
};
var mainMenuPlayer = new Player(-100, 325);
var mouseIsIn = function(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
};
var credits = [{
    name: "Blaze",
    reason: "Well, I created 95% of the game..."
}, {
    name: "Jake",
    reason: "Creating collisions and general bugfixing"
}, {
    name: "Lionofgd",
    reason: "Helping me out of my platformer engine fails"
}, {
    name: "Blue Leaf",
    reason: "Helping me finish the achievement queue"
}, {
    name: "Stargazer",
    reason: "General moral support and suggestions"
}, {
    name: "Bob Lyon",
    reason: "Rectangle-Triangle collision, usage questions answered"
}, {
    name: "Trevor Farnsworth",
    reason: "Fixing bugs on my level editor program"
}, {
    name: "Eytukan",
    reason: "Geometry Dash Logo"
}];
var mouseCounter = 0;
var transAchievements = 0;
var diff = function(dif, x, y){
    var externals;
    
    var ctx = this.externals.context;
    var cols = {
        test: [ "rgb(162, 91, 255)", "rgb(80, 0, 255)", PI*(214/360), PI*(77/360), PI*(91/360)],
        easy: [ "#00C9FF", "rgb(0, 106, 254)", PI*(190/360), PI*(77/360), PI*(91/360)],
        normal: [ "#01FF45", "#166C01", 0, PI*(77/360), PI*(91/360)],
        harder: [ "#FFEB00", "#FF7900", PI*(191/360), PI*(77/360), PI*(91/360)],
        hard: [ "#FF7700", "#FF0211", PI*(231/360), PI*(65/360), PI*(65/360)],
        insane: [ "#FE74DD", "#DD04F0", PI*(290/360), PI*(45/360), PI*(25/360)],
        mystery: [ "#6b8bff ", "#002aff", 0, 0, 0]
    };
    pushMatrix();
    translate(x, y);
    var grad = ctx.createLinearGradient(0, -25, 0, 25);
    grad.addColorStop(0, cols[dif][0]);
    grad.addColorStop(1, cols[dif][1]);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, 25, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    
    ctx.fillStyle = "black";
    ctx.save();
    ctx.translate(-12, -5);
    ctx.rotate(cols[dif][3]);
    ctx.beginPath();
    ctx.arc(0, 0, 6.5, cols[dif][2], 2 * PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.translate(12, -5);
    ctx.rotate(cols[dif][4]);
    ctx.beginPath();
    ctx.arc(0, 0, 6.5, cols[dif][2], 2 * PI);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    
    ctx.fillStyle="white";
    ctx.beginPath();
    ctx.arc(-14, -7, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(10, -7, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    switch(dif){
        case 'test': {
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(0, 10, 3, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            
        }break;
        case 'easy': {
            ctx.fillStyle = "rgb(51, 0, 0)";
            ctx.beginPath();
            ctx.arc(0, 4, 16, 0, Math.PI);
            ctx.closePath();
            ctx.fill();
            
        }break;
        case 'normal': case 'mystery': {
            stroke(0);
            strokeWeight(2);
            noFill();
            arc(0, -12, 71, 50, 70, 110);
            strokeWeight(1);
        }break;
        case 'harder': {
            strokeWeight(2);
            noFill();
            beginShape();
            vertex(-5, 10.8);
            vertex(5, 10.8);
            endShape();
        } break;
        case 'hard': {
            strokeWeight(1.5);
            line(-12, -18, -3.6, -11);
            line(12, -18, 3.6, -11);
            strokeWeight(1);
            strokeWeight(2);
            noFill();
            arc(0, 29, 45, 50, -118, -61);
            strokeWeight(1);
        }break;
        case 'insane': {
            stroke(0, 0, 0);
            strokeWeight(3);
            line(-15.4, -21.2, -3.6, -10);
            line(15.4, -21.2, 3.6, -10);
            strokeWeight(1);
            noFill();
            noStroke();
            ctx.fillStyle = "black";
            ctx.save();
            ctx.translate(0, 16);
            ctx.rotate((-6/360)*PI);
            ctx.beginPath();
            ctx.arc(0, 0, 16.4, PI + 0.1, TWO_PI);
            ctx.closePath();
            ctx.restore();
            ctx.fill();
        }break;
    }
    popMatrix();
};
var draw = function() {
    mouseCounter++;
    background(0, 89, 255);
    try {
        mouseOverButton = false;
        switch(menu) {
            case "Main":
                {
                    rectMode(CORNER);
                    dashlogo(18, -76, 14);
                    rectMode(CENTER);
                    fill(0);
                    noStroke();
                    rect(300, 363, 600, 75);
                    for(var i = 0; i < 600; i++) {
                        stroke(255, 255, 255, sin(i * (180 / 600)) * 255);
                        point(i, 325);
                    }
                    dashButton(300, 200, 150, 45, "Play", function() {
                        menu = "Select";
                        trans = 0;
                    });
                    dashButton(100, 200, 150, 45, "Character", function() {
                        menu = "Character";
                        achievementSystem.artist.award();
                    });
                    dashButton(500, 200, 150, 45, "Custom Levels", function() {
                        menu = "Custom";
                        achievementSystem.customizer.award();
                    });
                    dashButton(450, 320, 87, 45, "Settings", function() {
                        menu = "Settings";
                        achievementSystem.iLikeChangingThings.award();
                    });
                    dashButton(150, 320, 87, 45, "Credits", function() {
                        menu = "Credits";
                        achievementSystem.noIDidntPlagiarize.award();
                    });
                    dashButton(300, 320, 150, 45, "Achievements", function() {
                        menu = "Achievements";
                        achievementSystem.redundancy.award();
                    });
                    mainMenuPlayer.run();
                    mainMenuPlayer.draw();
                    mouseCounter = 0;
                }
                break;
            case "Select":
                {
                    pushMatrix();
                    translate(-trans, 0);
                    for(var i = 0; i < levelData.length; i++) {
                        pushMatrix();
                        translate(600 * -i, 0);
                        textAlign(LEFT, LEFT);
                        strokeWeight(6);
                        fill(0, 0, 0, 100);
                        stroke(255, 255, 255);
                        rect(300, 200, 450, 300, 50);
                        if(stars >= levelData[i].locked) {
                            levelData[i].locked = undefined;
                        }
                        if(!levelData[i].locked) {
                            fill(255, 255, 255);
                            textFont(createFont("helvetica-bold"), levelData[i].textSizeOverride || 40);
                            text(levelData[i].name, 300, 120);
                            textFont(createFont("helvetica"), 20);
                            fill((levelData[i].awardedStars) ? color(247, 255, 0) : color(255));
                            text(levelData[i].stars + " \u2605", 155, 164);
                            fill(255);
                            text("Normal Mode", 300, 173);
                            text("Practice Mode", 300, 277 - (200 - 173));
                            noStroke();
                            fill(0, 0, 0, 50);
                            rect(300, 200, 418, 20, 5);
                            rect(300, 277, 418, 20, 5);
                            rectMode(CORNER);
                            //normal
                            fill(195, 253, 116);
                            rect(91, 190, 418 * levelData[i].normal * 0.01, 10,
                                5, 5, 0, 0);
                            fill(124, 243, 92);
                            rect(91, 200, 418 * levelData[i].normal * 0.01, 10,
                                0, 0, 5, 5);

                            //practice
                            fill(29, 226, 220);
                            rect(91, 267, 418 * levelData[i].practice * 0.01, 10,
                                5, 5, 0, 0);
                            fill(12, 191, 195);
                            rect(91, 277, 418 * levelData[i].practice * 0.01, 10,
                                0, 0, 5, 5);

                            rectMode(CENTER);
                            stroke(255, 255, 255);
                            strokeWeight(3);
                            noFill();
                            rect(300, 200, 418, 20, 5);
                            rect(300, 277, 418, 20, 5);

                            fill(255, 255, 255);
                            text(levelData[i].practice + "%", 300, 284.5);
                            text(levelData[i].normal + "%", 300, 208);
                            if(mouseIsIn(300 - 450 / 2, 200 - 300 / 2, 450, 300) && mouseIsPressed && mouseCounter > 30 && trans === 600 * -i) {
                                currentLevel = i;
                                menu = "Play";
                                mouseCounter = 0;
                            }
                            stroke(0);
                            diff(levelData[i].difficulty, 462, 142);
                        } else {
                            noFill();
                            lock(300, 179, 1);
                            textFont(createFont("helvetica-bold"), 30);
                            fill(255, 255, 255);
                            text(stars + "/" + levelData[i].locked + " \u2605", 300, 308);
                        }
                        popMatrix();
                    }
                    var n = 600 * -levelData.length;
                    textFont(createFont("helvetica-bold"), 40);
                    fill(255, 255, 255);
                    text("Coming Soon....", n + 300, 200);
                    textSize(20);
                    text("Ask me about user level submissions!", n + 300, 250);
                    popMatrix();
                    strokeWeight(1);
                    noStroke();
                    if(trans !== n) {
                        dashButton(565, 200, 50, 100, "›", function() {
                            trans -= 600;
                        });
                    }
                    if(trans !== 0) {
                        dashButton(600 - 565, 200, 50, 100, "‹", function() {
                            trans += 600;
                        });
                    }

                }
                break;
            case "Play":
                {
                    background(colors.background); {
                        if(!player.endedLevel) {
                            Camera.x += (player.x - Camera.x) / 5;
                            if(!cameraIsLocked){
                                Camera.y += (player.y - Camera.y) / 5;
                            }else{
                                Camera.y += (player.origin.y - Camera.y + 50) / 5;
                            }
                            Camera.x = constrain(Camera.x, 200, 200000);
                        }
                        if(player instanceof Player) {
                            player.run();
                        }
                        pushMatrix();
                        translate(-Camera.x + 200, -Camera.y + 250);
                        fill(255, 255, 255);
                        textAlign(LEFT, LEFT);
                        textFont(createFont("monospace"), 55);
                        text("Attempt " + (attempts + 1), 200, PFloor - 100);
                        textFont(createFont("monospace"), 10);
                        if(player instanceof Player) {
                            player.draw();
                        }
                        fill(0, 0, 0);
                        rect(levels[currentLevel][0].length * blockSize + 500, 0, 400, 19000);
                        if(attempts === 10) {
                            achievementSystem.madAtLife.award();
                        }
                    }
                    try {
                        fill(255);
                        for(var i = 0; i < levels[currentLevel].length; i++) {
                            for(var j = 0; j < levels[currentLevel][i].length; j++) {
                                if(levels[currentLevel][i][j]) {
                                    var cB = levels[currentLevel][i][j];
                                    if(cB.x - cB.w / 2 < Camera.x + 600 && cB.x + cB.w / 2 > Camera.x - 300 && cB.y > Camera.y - 300 && cB.y < Camera.y + 300) {
                                        cB.draw();
                                    }
                                }
                            }
                        }
                    } catch(e) {
                        println(e);
                        noLoop();
                    }
                    popMatrix();
                    pushMatrix();
                    translate(0, -Camera.y + 250);
                    fill(0, 0, 0);
                    noStroke();
                    rectMode(CORNER);
                    rect(0, PFloor, 600, 400);
                    rectMode(CENTER);
                    for(var i = 0; i < 600; i++) {
                        stroke(255, 255, 255, sin(i * (180 / 600)) * 255);
                        point(i, PFloor);
                    }
                    rectMode(CORNER);
                    if(player.mode !== 'block'){
                        rect(0, _lock.bottom, 600, 100);
                        rect(0, _lock.top, 600, -300);
                    }
                    rectMode(CENTER);
                    popMatrix();
                    noFill();
                    rectMode(CORNER);
                    
                    
                    fill(player.color1);
                    rect(200, 10, constrain(round((player.x / (levels[currentLevel][0].length * blockSize + 500)) * 200), 0, 200), 15);
                    stroke(255);
                    noFill();
                    rect(200, 10, 200, 15);
                    rectMode(CENTER);
                    for(var i = 0; i < levelData.length; i++) {
                        levelData[i].normal = constrain(levelData[i].normal, 0, 100);
                    }

                }
                break;
            case "Character":
                {
                    textFont(createFont("helvetica-bold"), 30);
                    fill(242, 255, 0);
                    text(stars + " \u2605", 510, 100);
                    var csx = 0;
                    var csy = 0;
                    var cspage = 1;
                    player.draw(200, 51);
                    fill(255);
                    textFont(createFont("monospace"), 12);
                    text("<--- That's you", 331, 51);
                    for(var i = 0; i < types.length; i++) {
                        if(achievementSystem[typesUnlocked[i]]) {
                            if(achievementSystem[typesUnlocked[i]].awarded) {
                                types[i]((csx + 1) * (blockSize + 11), csy * (blockSize + 10) + 119, player.color1, player.color2, 0);
                                dashButton((csx + 1) * (blockSize + 11), csy * (blockSize + 10) + 119, blockSize, blockSize, "", function() {
                                    player.currentType = i;
                                }, 24); //jshint ignore:line
                            } else {
                                fill(255, 255, 255, 100);
                                rect((csx + 1) * (blockSize + 11), csy * (blockSize + 10) + 119, blockSize, blockSize, 5);
                                if(mouseX < (csx + 1) * (blockSize + 11) + blockSize / 2 && mouseX > (csx + 1) * (blockSize + 11) - blockSize / 2 && mouseY < csy * (blockSize + 10) + 119 + blockSize / 2 && mouseY > csy * (blockSize + 10) + 119 - blockSize / 2) {
                                    textFont(createFont("monospace"), 12);
                                    fill(255);
                                    textAlign(LEFT, LEFT);
                                    text("You need to " + achievementSystem[typesUnlocked[i]].lawl.toLowerCase() + " to unlock this!", 300, 86);
                                    textFont(createFont("monospace"), 12);
                                }
                            }
                        }
                        csx++;
                        if(csx > 9) {
                            csx = 0;
                            csy++;
                            if(csy > 5) {
                                csy = 0;
                                cspage++;
                            }
                        }
                    }

                    csx = csy = 0;
                    for(var i = 0; i < availableColors.length; i++) {
                        fill(availableColors[i]);
                        rect((csx + 1) * 35, csy * 35 + 300, 30, 30);
                        if(achievementSystem[colorsUnlocked[i]]) {
                            if(achievementSystem[colorsUnlocked[i]].awarded) {
                                dashButton((csx + 1) * 35, csy * 35 + 300, 30, 30, "", function() {
                                    player.color1 = availableColors[i];
                                }, 1); //jshint ignore:line
                            } else {
                                if(mouseIsIn((csx + 1) * 35 - 15, csy * 35 + 300 - 15, 30, 30)) {
                                    textFont(createFont("monospace"), 12);
                                    fill(255);
                                    textAlign(LEFT, LEFT);
                                    text("You need to " + achievementSystem[colorsUnlocked[i]].lawl.toLowerCase() + " to unlock this!", 300, 86);
                                    textFont(createFont("monospace"), 12);
                                }
                            }
                        }
                        csx++;
                    }
                    csx = csy = 0;
                    for(var i = 0; i < availableColorsY.length; i++) {
                        fill(availableColorsY[i]);
                        rect((csx + 1) * 35, csy * 35 + 335, 30, 30);
                        if(achievementSystem[colorsUnlockedY[i]].awarded) {
                            dashButton((csx + 1) * 35, csy * 35 + 335, 30, 30, "", function() {
                                player.color2 = availableColorsY[i];
                            }, 1); //jshint ignore:line
                        } else {
                            if(mouseIsIn((csx + 1) * 35 - 15, csy * 35 + 335 - 15, 30, 30)) {
                                textFont(createFont("monospace"), 12);
                                fill(255);
                                textAlign(LEFT, LEFT);
                                text("You need to " + achievementSystem[colorsUnlockedY[i]].lawl.toLowerCase() + " to unlock this!", 300, 86);
                            }
                        }

                        csx++;
                    }
                }
                break;
            case "Credits":
                {
                    fill(255, 255, 255);
                    textFont(createFont("monospace", 11));
                    for(var i = 0; i < credits.length; i++) {
                        //no edit please :)
                        text(credits[i].name + "......................................................................".substr(0, "......................................................................".length - credits[i].reason.length - credits[i].name.length) + credits[i].reason, 300, 95 + i * 30);
                    }
                }
                break;
            case "Achievements":
                {
                    noStroke();
                    fill(255, 255, 255);
                    textFont(createFont("helvetica"), 25);
                    textAlign(LEFT);
                    var asx = 300;
                    var acy = 53;
                    var astep = 0;
                    var c1 = color(158, 101, 27);
                    var c2 = color(196, 149, 75);
                    pushMatrix();
                    translate(-transAchievements, 0);
                    for(var i in achievementSystem) {
                        fill(astep % 2 === 0 ? c1 : c2);
                        rect(asx, acy, 415, 55);
                        if(!achievementSystem[i].awarded) {
                            noFill();
                            lock(asx - 171, acy + 37, 0.3);
                        }
                        fill(251, 255, 0);
                        textFont(createFont("helvetica"), 20);
                        text(achievementSystem[i].txt, 162 + textWidth(achievementSystem[i].txt) / 2 + asx - 300, acy);
                        fill(255, 255, 255);
                        textFont(createFont("helvetica"), 15);
                        text(achievementSystem[i].lawl, 162 + textWidth(achievementSystem[i].lawl) / 2 + asx - 300, acy + 15);
                        acy += 55;
                        astep++;
                        if(acy > 350) {
                            acy = 53;
                            asx += 600;
                        }
                    }
                    popMatrix();
                    if(transAchievements !== 2400) {
                        dashButton(555, 200, 50, 100, "›", function() {
                            transAchievements += 600;
                        });
                    }
                    if(transAchievements !== 0) {
                        dashButton(600 - 555, 200, 50, 100, "‹", function() {
                            transAchievements -= 600;
                        });
                    }
                }
                break;
            default:
                {
                    fill(255, 255, 255);
                    textFont(createFont("monospace"), 30);
                    text("Nothing much to see here...", 300, 200);
                }
                break;
        }
        if(menu !== "Main") {
            noStroke();
            dashButton(25, 25, 50, 50, "‹", function() {
                menu = "Main";
                player.isDead = true;
                recalibrateGlobalBlocks();
            });
            if(menu !== "Play" && menu !== "Customize") {
                rectMode(CORNER);

                fill(29, 226, 220);
                rect(550, 25, 50, 25);
                rect(550, 350, 50, 25);
                rect(0, 350, 50, 25);

                fill(12, 191, 195);
                rect(550, 0, 50, 25);
                rect(550, 375, 50, 25);
                rect(0, 375, 50, 25);

                fill(195, 253, 116);
                rect(50, 370, 35, 20);
                rect(515, 370, 35, 20);
                rect(0, 315, 35, 20);
                rect(565, 315, 35, 20);
                rect(565, 65, 35, 20);
                rect(515, 15, 35, 20);

                fill(124, 243, 92);
                rect(50, 385, 35, 20);
                rect(515, 385, 35, 20);
                rect(0, 330, 35, 20);
                rect(565, 330, 35, 20);
                rect(565, 50, 35, 20);
                rect(515, 0, 35, 20);

                rectMode(CENTER);
            }
        }
        clickCounter++;
        if(mouseOverButton) {
            cursor('pointer');
        } else {
            cursor('default');
        }
        textAlign(LEFT, LEFT);
        // Run only the achievement that needs to be run.
        if(queue.length) {
            queue[0].run();
        }
    } catch(error) {
        println(error.message);
    }
    _lock.top += (player.maxHeight - _lock.top)/10;
    _lock.bottom += (player.maxDepth - _lock.bottom)/10;
};
