
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
} 

interface SwimerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    public fly() {
        console.log('Tucan is flying');
        return 100;
    }

    public eat() {
        console.log('Tucan is eating');
    }

}

class Hummingbird implements Bird {
    public fly() {
        console.log('Hummingbird is flying');
        return 200;
    }

    public eat() {
        console.log('Hummingbird is eating');
    }
}

class Ostrich implements Bird, RunningBird{
 public eat() {
        console.log('Penguin is eating');
    }

    public run() {
        console.log('Penguin is running');
    }
}  

class Penguin implements Bird, SwimerBird {
    public eat() {
        console.log('Penguin is eating');
    }

    public swim() {
        console.log('Penguin is swimming');
    }
}
